import i18n from './i18n';

const SIZE_UNITS = {
    kB: 1024,
    MB: Math.pow(1024, 2),
    GB: Math.pow(1024, 3),
    TB: Math.pow(1024, 4),
};

export const UUploader = {
    name: 'u-uploader',
    i18n,
    props: {
        url: String,
        dataType: { type: String, default: 'json' },
        data: { type: Object, default: () => ({}) },
        name: { type: String, default: 'file' },
        extensions: { type: [String, Array], default: '' },
        maxSize: { type: [String, Number], default: Infinity },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            contentType: 'multipart/form-data',
            sending: false,
            file: {},
            tempId: new Date().getTime(),
        };
    },
    methods: {
        /**
         * @method upload() Pop up the file dialog box and upload the file
         * @public
         * @return {void}
         */
        upload() {
            if (this.disabled || this.sending)
                return;

            this.$refs.file.value = '';
            this.$refs.file.click();
        },
        /**
         * @method checkExtensions(file) Check extensions
         * @private
         * @param {File} file file object
         * @return {boolean} Returns whether verification is passed
         */
        checkExtensions(file) {
            if (!this.extensions)
                return true;

            const fileName = file.name;
            const extName = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();

            let extensions = this.extensions;
            if (typeof extensions === 'string')
                extensions = extensions.split(',');

            if (extensions.includes(extName))
                return true;

            /**
             * @event error Triggered when there is an upload error
             * @property {object} name ExtensionError
             * @property {object} message error message
             * @property {object} extensions Uploadable extensions
             */
            this.$emit('error', {
                name: 'ExtensionError',
                message: this.$t('extensionError', { extensions: extensions.join(', ') }),
                extensions,
            }, this);

            return false;
        },
        /**
         * @method checkSize(file) Check file size
         * @private
         * @param {File} file file object
         * @return {boolean} Returns whether verification is passed
         */
        checkSize(file) {
            if (this.maxSize === Infinity)
                return true;

            let maxSize;
            if (!isNaN(this.maxSize))
                maxSize = +this.maxSize;
            else {
                const unit = this.maxSize.slice(-2);
                if (!SIZE_UNITS[unit])
                    throw new Error('Unknown unit!');

                maxSize = this.maxSize.slice(0, -2) * SIZE_UNITS[unit];
            }

            if (file.size <= maxSize)
                return true;

            /**
             * @event error Triggered when there is an upload error
             * @property {object} name SizeError
             * @property {object} message error message
             * @property {object} maxSize The maximum file size that can be uploaded
             * @property {object} size current file size
             */
            this.$emit('error', {
                name: 'SizeError',
                message: 'File size exceeds limit! ',
                maxSize: this.maxSize,
                size: file.size,
            }, this);

            return false;
        },
        /**
         * @method submit() Submit the form
         * @private
         * @return {void}
         */
        submit() {
            const file = this.$refs.file.files ? this.$refs.file.files[0] : {
                name: this.$refs.file.value,
                size: 0,
            };

            if (!file || !file.name || !this.checkExtensions(file) || !this.checkSize(file))
                return;

            const fileName = file.name;
            this.file = {
                name: fileName,
                extName: fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase() : undefined,
                size: file.size,
            };

            if (typeof FormData === 'undefined') { // IE9 does not support XHR2 related functions
                /**
                 * @event sending trigger before sending
                 * @property {object} data data to be sent
                 */
                let cancel = false;
                this.$emit('before-send', {
                    data: this.data,
                    file,
                    files: this.$refs.file.files,
                    preventDefault: () => cancel = true,
                }, this);
                if (cancel)
                    return;

                this.sending = true;
                this.$refs.form.submit();
            } else {
                const xhr = new XMLHttpRequest();
                const formData = new FormData(this.$refs.form);

                xhr.open('POST', this.url);
                xhr.upload.onprogress = function (e) {
                    if (e.lengthComputable) {
                        /**
                        * @event progress triggered when sending
                        * @property {object} data data to be sent
                        */
                        this.$emit('progress', {
                            loaded: e.loaded,
                            total: e.total,
                            xhr,
                        }, this);
                    }
                }.bind(this);

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200)
                            this.onLoad(xhr.responseText, xhr.responseXML);
                        else {
                            if (!this.sending)
                                return;
                            this.sending = false;
                            this.file = null;
                            this.$emit('error', {
                                name: 'ResponseError',
                                message: 'No responseText!',
                                xhr,
                            }, this);
                        }
                    }
                };

                /**
                 * @event sending trigger before sending
                 * @property {object} data data to be sent
                 */
                let cancel = false;
                this.$emit('before-send', {
                    data: this.data,
                    file,
                    files: this.$refs.file.files,
                    xhr,
                    formData,
                    preventDefault: () => cancel = true,
                }, this);
                if (cancel)
                    return;

                this.sending = true;
                xhr.send(formData);
            }

            this.$emit('send', {
                data: this.data,
                file,
                files: this.$refs.file.files,
            }, this);
        },
        /**
         * @method onLoad() Receive data callback
         * @private
         * @return {void}
         */
        onLoad(responseText, responseXML) {
            const $iframe = this.$refs.iframe;
            const file = this.file;

            if (!this.sending)
                return;
            this.sending = false;
            this.file = null;

            const xml = {};

            if (!!responseText || !!responseXML) {
                // Data processing during ajax upload
                xml.responseText = responseText;
                xml.responseXML = responseXML;
            } else {
                if ($iframe.contentWindow) {
                    xml.responseText = $iframe.contentWindow.document.body ? $iframe.contentWindow.document.body.innerText : null;
                    xml.responseXML = $iframe.contentWindow.document.XMLDocument ? $iframe.contentWindow.document.XMLDocument : $iframe.contentWindow.document;
                } else if ($iframe.contentDocument) {
                    xml.responseText = $iframe.contentDocument.document.body ? $iframe.contentDocument.document.body.innerText : null;
                    xml.responseXML = $iframe.contentDocument.document.XMLDocument ? $iframe.contentDocument.document.XMLDocument : $iframe.contentDocument.document;
                }
            }

            if (!xml.responseText) {
                /**
                 * @event error Triggered when there is an upload error
                 * @property {object} name ResponseError
                 * @property {object} message error message
                 */
                return this.$emit('error', {
                    name: 'ResponseError',
                    message: 'No responseText!',
                    xml,
                }, this);
            }

            /**
             * @event complete Triggered when the upload is completed
             * @property {object} xml returned xml
             */
            this.$emit('complete', {
                xml,
            }, this);

            /**
             * @event success Triggered when the upload is successful
             * @property {object} data returned data
             */
            this.$emit('success', {
                data: this.parseData(xml, this.dataType),
                file,
                xml,
            }, this);
        },
        /**
         * @method parseData(xml, type) parse the received data
         * @private
         * @param {object} xml received xml
         * @param {object} type data type
         * @return {object|string} parsed data
         */
        parseData(xml, type) {
            if (type === 'text')
                return xml.responseText;
            else if (type === 'xml')
                return xml.responseXML;
            else if (type === 'json') {
                let data = xml.responseText;
                try {
                    data = JSON.parse(data);
                } catch (e) { }

                return data;
                // danger, temporarily not enabled
                // } else if (type === 'script')
                //     return eval(xml.responseText);
            } else
                return xml.responseText;
        },
    },
};

export default UUploader;
