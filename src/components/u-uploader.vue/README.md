<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UUploader file upload

**UI Components**, **Form Controls**, **Inline Display**

## Example
### Basic Usage

``` html
<u-uploader url="/api/upload">
    <u-button>Upload</u-button>
</u-uploader>
```

> Note: When implementing the upload function in IE, you need to set the `Content-Type` of the response header to `text/plain` or `text/html`, not `application/json`, otherwise IE will prompt the user to download The data returned.

### File Type Restrictions

``` html
<u-uploader url="/api/upload" extensions="jpg,gif,png">
    <u-button>Upload</u-button>
</u-uploader>
```

### File Size Limit

``` html
<u-uploader url="/api/upload" max-size="10kB">
    <u-button>Upload</u-button>
</u-uploader>
```

### Disable

``` html
<u-uploader url="/api/upload" disabled>
    <u-button disabled>upload</u-button>
</u-uploader>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| url | string | | | Upload file path |
| data-type | string | | `'json'` | Receive data type. Optional values: `text`, `xml`, `json` |
| data | object | | | Additional data |
| name | string | | `'file'` | The name of the uploaded file, the backend generally requires this field |
| extensions | string, Array | | `''` | Uploadable extensions. The default is empty, which means files of any file type can be uploaded. It can be a string, with multiple extensions separated by `,`, such as: `'png, jpg, gif'`; it can also be an array, such as: `['png', 'jpg', 'gif']` |
| max-size | string, number | | `Infinity` | The maximum file size that can be uploaded. The default is empty, which means files of any size can be uploaded; if it is a number, the unit is bytes; if it is a string, the following units can be added: `kB`, `MB`, `GB` |
| disabled | boolean | | `false` | Whether to disable |

### Slots

#### (default)

Insert text or HTML.

### Events

#### @before-send

Trigger before sending

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | object | Progress related information |
| $event.xhr | XMLHttpRequest | XMLHttpRequest object before sending |
| $event.formData | FormData | Data object for sending |
| $event.preventDefault | Function | Prevent upload process |
| senderVM | UUploader | Send event object |

#### @send

Triggered when just sent

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | object | Progress related information |
| $event.preventDefault | Function | Prevent upload process |
| senderVM | UUploader | Send event object |

#### @progress

Triggered when sending progress changes, used when uploading progress bar

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | object | Progress related information |
| senderVM | UUploader | Send event object |

#### @complete

Triggered when upload is complete

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.xml | string | Server response information |
| senderVM | UUploader | Send event object |

#### @success

Triggered when upload is successful

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | object | Server returns information object |
| $event.file | object | Upload file information, excluding file body content |
| senderVM | UUploader | Send event object |

#### @error

Triggered when an upload error occurs

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.name | string | Error name |
| $event.message | string | Error description |
| $event.extensions | string | Restriction type |
| $event.maxSize | number | Limit size |
| $event.size | number | Current size |
| senderVM | UUploader | Send event object |
