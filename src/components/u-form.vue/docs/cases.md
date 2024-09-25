### Basic

```vue
<template>
<u-form ref="form" :rules="rules" @validate="canSubmit = $event.valid">
    <u-form-item label="Username" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Email" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="Please enter your email"></u-input>
    </u-form-item>
    <u-form-item label="Nested List" layout="block">
        <u-form-item label="Email 1" :rules="rules.email">
            <u-input v-model="model.email1" maxlength="24" placeholder="Please enter your email"></u-input>
        </u-form-item>
        <u-form-item label="Mailbox 2" :rules="rules.email">
            <u-input v-model="model.email2" maxlength="24" placeholder="Please enter your email"></u-input>
        </u-form-item>
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
                email1: '',
                email2: '',
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

        // When getting data, it's as follows
        // this.getData().then(...)
        //  .then(() => this.$refs.form.validate(true))
        //  .catch(() => { /* noop */ });
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

### Bubble

```vue
<template>
<u-form ref="form" :rules="rules" @validate="canSubmit = $event.valid">
    <u-form-item label="Username" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Email" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="Please enter your email"></u-input>
    </u-form-item>
    <u-form-item label="Nested list" bubble layout="block">
        <u-form-item label="Mailbox 1" :rules="rules.email" layout="none" muted="message">
            <u-input v-model="model.email1" maxlength="24" placeholder="Please enter your email"></u-input>
        </u-form-item>
        <u-form-item label="Mailbox 2" :rules="rules.email" layout="none" muted="message">
            <u-input v-model="model.email2" maxlength="24" placeholder="Please enter your email"></u-input>
        </u-form-item>
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
                email1: '',
                email2: '',
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

        // When getting data, it's as follows
        // this.getData().then(...)
        //  .then(() => this.$refs.form.validate(true))
        //  .catch(() => { /* noop */ });
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
