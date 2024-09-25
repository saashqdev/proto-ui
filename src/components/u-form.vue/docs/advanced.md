The previous Example only partially shows how to use the component library form verification system, and the effect achieved may not be consistent with the actual situation. Here are some more reasonable cases:

According to the circumstances under which the form submit button can be clicked, it can be divided into the following common and reasonable situations: it can always be clicked, the required fields can be clicked if there is content, and the form submission button can be clicked only when the content of all items is correct.

### Always Clickable

The form submit button is always clickable.

All behavior represented by all controls in the form must be submitted for validation, aided by appropriate use of out-of-focus and real-time validation.

``` vue
<template>
    <u-form ref="form" :rules="rules">
        <u-form-item label="Username" name="username">
            <u-input v-model="model.username" maxlength="12" placeholder="4~12 characters"></u-input>
        </u-form-item>
        <u-form-item label="Email" name="email">
            <u-input v-model="model.email" maxlength="24" placeholder="Please enter your email"></u-input>
        </u-form-item>
        <u-form-item label="Mobile Phone Number" name="phone">
            <u-input v-model="model.phone" maxlength="11" placeholder="Please enter your mobile phone number"></u-input>
        </u-form-item>
        <u-form-item>
            <u-button color="primary" @click="submit()">Submit</u-button>    </u-form-item>
    </u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter username' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: 'Please enter 4~12 characters' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your email' },
                    { type: 'email', trigger: 'blur', message: 'The email format is incorrect' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: 'Mobile phone number format is incorrect' },
                ],
            },
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => { /* noop */ });
        },
    },
};
</script>
```

### Required Fields have Content to Click On

The form submit button can only be clicked when all required fields in the form have content.

The performance is based on whether the required fields in the form are empty, and calculated properties are used to determine in real time whether the submit button can be clicked. And in this case, a combination of three verifications is usually used.

```vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="Username" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Email" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="Please enter your email"></u-input>
    </u-form-item>
    <u-form-item label="Mobile Phone Number" name="phone">
        <u-input v-model="model.phone" maxlength="11" placeholder="Please enter your mobile phone number"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" :disabled="!canSubmit" @click="submit()">Submit</u-button>    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter username' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: 'Please enter 4~12 characters' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your email' },
                    { type: 'email', trigger: 'blur', message: 'The email format is incorrect' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: 'Mobile phone number format is incorrect' },
                ],
            },
        };
    },
    computed: {
        canSubmit() {
            return this.model.username && this.model.email;
        },
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('Submission successful'))
                .catch(() => { /* noop */ });
        },
    },
};
</script>
```

### All Items are Correct and Clickable

The form submit button can only be clicked when all items in the form meet the requirements.

The performance is based on the verification results of each form control, using calculated properties to determine whether the submit button can be clicked in real time. In this case, submission verification is generally not required.

```vue
<template>
<u-form ref="form" :rules="rules" @validate="canSubmit = $event.valid">
    <u-form-item label="Username" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Email" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="Please enter your email"></u-input>
    </u-form-item>
    <u-form-item label="Mobile Phone Number" name="phone">
        <u-input v-model="model.phone" maxlength="11" placeholder="Please enter your mobile phone number"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" :disabled="!canSubmit" @click="submit()">Submit</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            canSubmit: false,
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'input+blur', message: 'Please enter username' },
                    { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: 'Please enter 4~12 characters' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'input+blur', message: 'Please enter your email' },
                    { type: 'email', trigger: 'input+blur', message: 'The email format is incorrect' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'input+blur', message: 'Mobile phone number format is incorrect' },
                ],
            },
        };
    },
    mounted() {
        // Must be quietly verified during initialization or when data is obtained.
        this.$refs.form.validate(true)
            .catch(() => { /* noop */ });

        //When getting data, it's as follows
        // this.getData().then(...)
        // .then(() => this.$refs.form.validate(true))
        // .catch(() => { /* noop */ });
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('Submission successful'))
                .catch(() => { /* noop */ });
        },
    },
};
</script>
```
