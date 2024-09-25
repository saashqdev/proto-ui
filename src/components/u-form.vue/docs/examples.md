## Form Layout
### Basic Usage

``` html
<u-form gap="large">
    <u-form-item label="Billing Method" required>
        <u-radios value="0">
            <u-radio label="0">Yearly and Monthly Subscription</u-radio>
            <u-radio label="1">Pay as you Go</u-radio>
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
            username
        </span>
        <div slot="description">Description</div>
        <i-icon name="alert" size="small" slot="extra">
            <u-tooltip content="Please enter Chinese characters in the correct format"></u-tooltip>
        </i-icon>
        <u-input maxlength="4" maxlength-message="No more than 4 characters" placeholder="No more than 4 characters"></u-input>
    </u-form-item>
</u-form>
```


## Data Collection and Submission

It is recommended to collect the data bound by each form control using `v-model` into the `model` object in `data`.

```vue
<template>
<u-form gap="large">
    <u-form-item label="Billing method" required>
        <u-radios v-model="model.chargeType">
            <u-radio label="0">Yearly and Monthly Subscription</u-radio>
            <u-radio label="1">Pay as you Go</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="Instance name" required>
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

### Form validation

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
    <u-form-item label="Instance Name" required rules="required | ^az | az09$ | ^az09-$ | rangeLength(1,63)">
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
