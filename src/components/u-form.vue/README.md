<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UForm Form

**UI Components**, **Form Validators**, **Block Level Display**

A form with data collection, verification and submission functions, including input boxes, selection boxes, check boxes, radio buttons and other elements.

### Related Components

#### Form UForm

Used for overall layout, centralized setting of attributes, and unified exposure of events and methods.

#### Validator UValidator

Implemented basic nested verification function and atomic verification function, including prompt style.

#### Form Item UFormItem

Inherited from validator and has all the functions of validator. Compared with the validator, it is designed to facilitate the layout of UForm.

#### Form Field (form control) MField

MField serves as the base class for various form fields (form controls) and is used to trigger the validation function of UValidator (or UFormItem).

For example, the common ones: `<u-input>`, `<u-select>`, `<u-radios>`, `<u-date-picker>` all belong to this category.

#### Complex dynamic verification component

Such as: `<u-form-table-view>` and `<u-dynamic-cards>`

## Example
## Form layout
### Basic Usage

``` html
<u-form gap="large">
    <u-form-item label="Billing method" required>
        <u-radios value="0">
            <u-radio label="0">Yearly and monthly subscription</u-radio>
            <u-radio label="1">Pay as you go</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="Instance Name" required>
        <u-input size="huge" maxlength="63" placeholder="Composed of 1-63 lowercase letters, numbers, and underscores, starting with a letter and ending with a letter or number"></u-input>
    </u-form-item>
    <u-form-item label=" " required>
        <u-input size="huge" maxlength="63" placeholder="Required if label is empty"></u-input>
    </u-form-item>
    <u-form-item label="Specification">
        <u-select value="0101">
            <u-select-item value="0101">1 core 1GB</u-select-item>
            <u-select-item value="0102">1 core 2GB</u-select-item>
            <u-select-item value="0204">2 core 4GB</u-select-item>
            <u-select-item value="0408">4 core 8GB</u-select-item>
            <u-select-item value="0816">8 core 16GB</u-select-item>
            <u-select-item value="0832">8 core 32GB</u-select-item>
            <u-select-item value="1664">16 core 64GB</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="Type" description="High-performance SSD cloud disk does not support snapshot function" layout="block">
        <u-select value="SSD">
            <u-select-item value="SSD">SSD Cloud Disk</u-select-item>
            <u-select-item value="HSSD">High-performance SSD Cloud Disk</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="Port Number" required>
        <u-input size="huge medium" maxlength="5" placeholder="1150-65535" value="3306"></u-input>
    </u-form-item>
    <u-form-item label="Public Network Bandwidth">
        <u-combo-slider :step="10" unit="Mbps"></u-combo-slider>
    </u-form-item>
    <u-form-item label="Details" layout="block">
        <u-textarea size="huge"></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">Create Now</u-button>
    </u-form-item>
</u-form>
```

### Inline

``` html
<u-form layout="inline" label-size="auto">
    <u-form-item label="Status">
        <u-select auto-select>
            <u-select-item>Authenticating</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="Username">
        <u-input maxlength="63" placeholder="Please enter username"></u-input>
    </u-form-item>
    <u-form-item label="Contact Number">
        <u-input maxlength="63" placeholder="Please enter contact number"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">Query</u-button>
    </u-form-item>
</u-form>
```

### Grid Layout

Forms with multiple rows are usually used with grid layout for beautiful alignment.

``` html
<u-form layout="inline">
    <u-grid-layout>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-form-item label="Status">
                    <u-select auto-select>
                        <u-select-item>Authenticating</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="Record Type">
                    <u-select auto-select>
                        <u-select-item>All</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="Registration Number">
                    <u-input maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-form-item label="Username">
                    <u-input maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="Organization Name">
                    <u-input maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item>
                    <u-button color="primary">Query</u-button>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
    </u-grid-layout>
</u-form>
```

### Slot

- Customize left content through `slot="label"` slot
- Customize the description content through the `slot="description"` slot
- Customize extra content on the right side of `label` through `slot='extra'` slot

``` html
<u-form ref="form">
    <u-form-item required layout="block">
        <span slot="label">
            Username
        </span>
        <div slot="description">Description</div>
        <i-icon name="alert" size="small" slot="extra">
            <u-tooltip content="Please enter Chinese characters in the correct format"></u-tooltip>
        </i-icon>
        <u-input maxlength="4" maxlength-message="No more than 4 characters" placeholder="No more than 4 characters"></u-input>
    </u-form-item>
</u-form>
```


## Data collection and submission

It is recommended to collect the data bound by each form control using `v-model` into the `model` object in `data`.

```vue
<template>
<u-form gap="large">
    <u-form-item label="Billing Method" required>
        <u-radios v-model="model.chargeType">
            <u-radio label="0">Yearly and Monthly Subscription</u-radio>
            <u-radio label="1">Pay as you Go</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="Instance Name" required>
        <u-input v-model="model.name" size="huge" maxlength="63" placeholder="Composed of 1-63 lowercase letters, numbers, and underscores, starting with a letter and ending with a letter or number" ></u-input>
    </u-form-item>
    <u-form-item label="Specification">
        <u-select v-model="model.spec">
            <u-select-item value="0101">1 core 1GB</u-select-item>
            <u-select-item value="0102">1 core 2GB</u-select-item>
            <u-select-item value="0204">2 core 4GB</u-select-item>
            <u-select-item value="0408">4 core 8GB</u-select-item>
            <u-select-item value="0816">8 core 16GB</u-select-item>
            <u-select-item value="0832">8 core 32GB</u-select-item>
            <u-select-item value="1664">16 core 64GB</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="Type" description="High-performance SSD cloud disk does not support snapshot function" layout="block">
        <u-select v-model="model.type">
            <u-select-item value="SSD">SSD Cloud Disk</u-select-item>
            <u-select-item value="HSSD">High-performance SSD Cloud Disk</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="Port Number" required>
        <u-input v-model.number="model.port" size="huge normal" maxlength="5" placeholder="1150-65535"></u-input>
    </u-form-item>
    <u-form-item label="Public Network Bandwidth">
        <u-combo-slider v-model="model.bandwidth" :step="10" unit="Mbps"></u-combo-slider>
    </u-form-item>
    <u-form-item label="Description" layout="block">
        <u-textarea v-model="model.description" size="huge"></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit()">Create Now</u-button>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                chargeType: '0',
                name: '',
                spec: '0101',
                type: 'SSD',
                port: 3306,
                bandwidth: 10,
                description: '',
            },
        };
    },
    methods: {
        submit() {
            console.info(this.model);
            this.$toast.show('Submission successful!');
        },
    },
};
</script>
```

### Data Conversion

Sometimes the data in the UI is not completely consistent with the data submitted to the backend. You can decompose `v-model` into a `:value` attribute binding + `@input` event for temporary conversion.

For those that need to maintain the numeric type, you can directly use the `.number` modifier of Vue's `v-model`.

```vue
<template>
<u-form gap="large">
    <u-form-item label="Timeout Duration" required>
        <u-input size="huge normal" maxlength="5" placeholder="300-10000"
            :value="model.timeout / 1000" @input="model.timeout = $event * 1000"></u-input>
    </u-form-item>
    <u-form-item label="Port Number" required>
        <u-input v-model.number="model.port" size="huge normal" maxlength="5" placeholder="1150-65535"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit()">Create Now</u-button>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                timeout: 900000,
                port: 3306,
            },
        };
    },
    methods: {
        submit() {
            console.info(this.model);
            this.$toast.show('Submission successful!');
        },
    },
};
</script>
```

### Form Validation

Validation rules need to be added to the `rules` attribute of `<u-form-item>`. Input and defocusing will automatically trigger validation. When the submit button is clicked, the `validate` method of the form needs to be manually called.

You can monitor the validation status of the form based on the `@validate` event.

For detailed usage of validation rules, see [UValidator](../u-validator).

```vue
<template>
<u-form ref="form" gap="large">
    <u-form-item label="Billing Method" required>
        <u-radios v-model="model.chargeType">
            <u-radio label="0">Yearly and Monthly Subscription</u-radio>
            <u-radio label="1">Pay as you Go</u-radio>        
        </u-radios>
    </u-form-item>
    <u-form-item label="Instance name" required rules="required | ^az | az09$ | ^az09-$ | rangeLength(1,63)">
        <u-input v-model="model.name" size="huge" maxlength="63" placeholder="Composed of 1-63 lowercase letters, numbers, and underscores, starting with a letter and ending with a letter or number" ></u-input>
    </u-form-item>
    <u-form-item label="Specification">
        <u-select v-model="model.spec">
            <u-select-item value="0101">1 core 1GB</u-select-item>
            <u-select-item value="0102">1 core 2GB</u-select-item>
            <u-select-item value="0204">2 core 4GB</u-select-item>
            <u-select-item value="0408">4 core 8GB</u-select-item>
            <u-select-item value="0816">8 core 16GB</u-select-item>
            <u-select-item value="0832">8 core 32GB</u-select-item>
            <u-select-item value="1664">16 core 64GB</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="Type" description="High-performance SSD cloud disk does not support snapshot function" layout="block">
        <u-select v-model="model.type">
            <u-select-item value="SSD">SSD Cloud Disk</u-select-item>
            <u-select-item value="HSSD">High-performance SSD Cloud Disk</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="Port Number" required rules="required | integer | range(1150,65535)">
        <u-input v-model.number="model.port" size="huge normal" maxlength="5" placeholder="1150-65535"></u-input>
    </u-form-item>
    <u-form-item label="Public Network Bandwidth">
        <u-combo-slider v-model="model.bandwidth" :step="10" unit="Mbps"></u-combo-slider>
    </u-form-item>
    <u-form-item label="Description" layout="block" rules="minLength(8)">
        <u-textarea v-model="model.description" size="huge"></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit">Create Now</u-button>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                chargeType: '0',
                name: '',
                spec: '0101',
                type: 'SSD',
                port: '',
                bandwidth: 10,
                description: '',
            },
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => this.$toast.show('Verification passed, submission successful!'))
                .catch(() => this.$toast.show('Verification failed!'));
        },
    },
};
</script>
```

## UForm API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| model | object | | | Form data model |
| rules | object | | | Validation rules for all fields of the form are obsolete. It is recommended to add rules yourself in each `<u-form-item>`. |
| layout | string | | `'block'` | Form layout method. Optional values: `block`, `inline`. |
| label-size | string | | `'normal'` | Label size. Optional values: `small`, `normal`, `large`. |

### Computed

| Computed | Type | Description |
| -------- | ---- | ----------- |
| touched | boolean | Whether the user touched |
| dirty | boolean | whether the user modified the value |
| valid | boolean | whether the verification passed |
| firstError | string | The first error message |

### Slots

#### (default)

Insert `<u-form-item>` subcomponent.

### Events

#### @validate

Triggered on verification

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.valid | boolean | Verification passed |
| $event.touched | boolean | Whether the user touched |
| $event.dirty | boolean | Whether the user modifies the value |
| $event.firstError | string | The first error message |
| senderVM | UValidator | Send event instance |

### Methods

#### validate(trigger, muted)

手动验证。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | string | `'submit'` | Trigger mode, optional value: one of `submit`, `blur` and `input`, or any combination thereof. |
| muted | boolean | `false` | Whether to be silent after verification |

#### validateItem(name, trigger, slient)

An item in the validation form is obsolete. The items in the form are nested, with a deeper level of name, and may have the same name.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| name | string | | Name of the form item |
| trigger | string | `'submit'` | Trigger mode, optional value: one of `submit`, `blur` and `input`, or any combination thereof. |
| muted | boolean | `false` | Whether to be silent after verification |

## UFormItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| name | string | | | Form item name. Deprecated |
| label | string | | | Label. Used for left display and synthesis of prompt messages |
| label-size | string | | `'normal'` | Set the label size of the form item individually |
| field-size | string | | `'normal'` | Set the content size of the form item individually. Optional value: `'full'` |
| required | boolean | | `false` | Whether it is required. Only the style is displayed. If you want to verify required items, you need to add required rules in `rules`. |
| message | string | | | Default prompt message |
| muted | string | | | Whether to be silent during verification. Optional values: `'message'` means to silence only the message prompt, `'all'` to silence both the message prompt and the red box prompt |
| description | string | | | Add description content |
| placement | string | | | When the value is `'bottom'`, the prompt information is displayed at the bottom, change the display position of the prompt information |
| layout | string | | | Layout mode, optional value: `'block'` |
| **Validator Props/Attrs** | | | | |
| rules | string, Array | | | Validation rules. The abbreviated format is a string type, the full format or mixed format is an array type |
| ignore-validation | boolean | | `false` | Ignore validation |
| ignore-rules | boolean | | `false` | Ignore validation rules. Deprecated, same as `ignore-validation` |
| validating-options | object | | | Validation auxiliary object. Used in Rule's `validate` method |
| validating-value | any | | | Temporarily modify the validation value |
| validating-process | Function | | | Preprocess the value before validation |

### Slots

#### (default)

Insert text or HTML.

#### Label

Insert a custom label title in place of the `label` attribute.

#### Description

Insert custom description content instead of the `description` attribute.

#### Extra

Additional content on the right side of the custom label.

### Events

#### @validate

Triggered during validation, or triggered by bubbling during internal validation.
For the first Field or all child UValidators:


| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.valid | boolean | Verification passed |
| $event.touched | boolean | Whether the user touched |
| $event.dirty | boolean | Whether the user modifies the value |
| $event.firstError | string | The first error message |
| senderVM | UValidator | Send event instance |

### Methods

#### validate(trigger, muted)

Validate this form item.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | string | `'submit'` | Trigger mode, optional value: one of `submit`, `blur` and `input`, or any combination thereof. |
| muted | boolean | `false` | Whether to be silent after verification |
