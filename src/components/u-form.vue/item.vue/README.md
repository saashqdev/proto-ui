# Form Item

## Example
### Basic Usage

```vue
<template>
<u-linear-layout direction="vertical">
    <u-form-item :rules="rules">
        <u-input maxlength="112" placeholder="4~12 characters, numbers or underscores"></u-input>
    </u-form-item>
    <u-form-item :rules="rules" placement="bottom">
        <u-input maxlength="112" placeholder="4~12 letters, numbers or underscores"></u-input>
    </u-form-item>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            rules: [
                { type: 'string', required: true, trigger: 'blur', message: 'Please enter username' },
                { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: 'Starts with letter' },
                { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: 'Composed of letters, numbers or underscores' },
                { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: 'End with letter or number' },
                { type: 'string', min: 4, trigger: 'blur', message: 'Not less than 4 characters' },
            ],
        };
    },
};
</script>
```
