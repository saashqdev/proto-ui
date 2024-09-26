## Validation Rules

Validation rules are set via the `rules` property of a validator (or form item). They can be written in either a shorthand format (string) or a full format (array). It is recommended to use the shorthand format whenever possible.

### Abbreviated Format

In a large project, validation rules (including triggering methods and error prompts, etc.) for the same scenario are usually used multiple times. If these rules are called by registered names, a lot of duplicate code can be reduced.

Some common validation rules are already built into the component library, and you can also register rules in your project (see below).

Using these existing rules, you can concatenate them into a string in the `rules` attribute for quick use.

For example, the validation of a username input box contains the following rules:

1. Username is required, out of focus verification
2. Start with a letter, real-time verification
3. Letters, numbers or hyphens, real-time verification
4. Ending with letters or numbers, out of focus verification
5. No less than 4 characters, out of focus verification

``` html
<u-form-item label="Username" rules="required | ^azAZ | ^azAZ09-$ | azAZ09$ | minLength(4)">
    <u-input maxlength="12" placeholder="4-12 characters"></u-input>
</u-form-item>
```

#### String Abbreviation Description:

Multiple validation rules are separated by `|`, similar to the filter writing method of Vue.

The format of each verification is `name @bi #message`, and the order of the items cannot be interchanged.

- `name` is the name of the registered validation rule: you can add parameters, such as `name(arg1, arg2)`
- Add triggering methods after `@`: `i` stands for `input`, `b` stands for `blur`, which can be used alone or in combination, such as: `@input`, `@b`, `@bi`, etc.
- Add an error message after `#`: the content will be closed until the next `|` or the end of the string


Using `@` and `#`, you can make some adjustments to the original built-in rules:

In the following example:
- Input format only performs out-of-focus judgment
- The length prompt text has been modified

``` html
<u-form-item label="Username" required rules="required | ^azAZ | ^azAZ09-$ @b | azAZ09$ | minLength(4) #4-12 characters">
    <u-input maxlength="12" placeholder="4-12 characters"></u-input>
</u-form-item>
```

The triggering method and error prompts will be explained in detail in the full format. Let's take a look at a few more examples:

#### Verify Uniqueness

``` view
<template>
<u-form-item label="Port" required rules="required | integer | range(80, 65535) | unique(...existingPortList)">
    <u-input v-model.number="model.port" maxlength="5" placeholder="80-65535内的整数"></u-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            model: {
                port: '',
            },
            existingPortList: [8000, 3306, 65535],
        };
    },
};
</script>
```

#### Password Confirmation Scenario

``` view
<template>
<u-form gap="large">
    <u-form-item label="Password" required rules="required | ^azAZ09_$ | minLength(4)">
        <u-input size="huge medium" type="password" v-model="model.password" maxlength="8" placeholder="以字母、数字或'_'组成"></u-input>
    </u-form-item>
    <u-form-item label="Confirm Password" required rules="required | confirmed(model.password)">
        <u-input size="huge medium" type="password" v-model="model.confirmedPassword" maxlength="8" placeholder="再次输入密码"></u-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                password: '',
                confirmedPassword: '',
            },
        };
    },
};
</script>
```

### Full Format

The full format of the `rules` property is an array containing several validation rules. Each rule has the following structure:

``` ts
interface Rule {
    validate: string | ValidateFunc, // Validator name or validation function. Details are given below.
    args?: any | Array<any> | (() => any | Array<any> | Promise<any | Array<any>>), // Verify the arguments. More details below
    required?: boolean, // Is this a required rule? If it is not required, this rule will be automatically skipped if the value is empty
    trigger?: string, // Trigger method. Details are given below.
    message?: string, // error message
    ignore?: boolean, // Whether to ignore this rule
    muted?: boolean, // Whether to verify but not prompt
    [prop: string]: any, // custom property
}
```

Let’s take a look at the complete format of the above example `required | ^azAZ | ^azAZ09-$ | azAZ09$ | minLength(4)`:

``` html
<u-form-item label="Username" required :rules="[
    { validate: 'required', required: true, trigger: 'blur', message: 'Please enter your username' },
    { validate: 'pattern', args: /^[a-zA-Z]/, trigger: 'input+blur', message: 'Starts with a letter' },
    { validate: 'pattern', args: /^[a-zA-Z0-9-]$/, trigger: 'input+blur', message: 'Letters, numbers or hyphens' },
    { validate: 'pattern', args: /[a-zA-Z0-9]$/, trigger: 'blur', message: 'Ends with a letter or number' },
    { validate: 'minLength', args: [4], trigger: 'blur', message: 'Must not be less than 4 characters' },
]">
    <u-input maxlength="12" placeholder="4-12 characters"></u-input>
</u-form-item>
```

#### Validator Name or Validation Function

A validator is a simple function that is built-in or registered. Its structure is as follows:

The parameter is the value to be verified, plus some parameters required by the function. Returns a Boolean value or a Promise of a Boolean value.

``` ts
type Validator = (value: any, ...args: any[]) => boolean | Promise<boolean>;
```

See the built-in validators.

ValidateFunc is a function that needs to be called immediately to validate the rules. It is often used to handle synchronous or asynchronous methods. Different from the validator, its structure is as follows:

``` ts
type ValidateResult = boolean | string | void;
type ValidateFunc = (value: any, rule: Rule, options?: Object) => ValidateResult | Promise<ValidateResult>;
```

The parameters are the value to be validated, the rule object, and the options. The options can be passed in through the `validating-options` of the UValidator component.

When the return value of the verification function is of the following types, the cases are:
- boolean, if it is `true`, the verification is passed, if it is `false`, the error message corresponding to `message` is displayed
- void, that is, `undefined`, passes verification, the same as `true`
- string, directly display the returned string as an error message
- Promise, when the result is obtained asynchronously, it is processed according to the above types

#### Verify Parameters

Parameters to apply to the validator.

The type can be:
- an array
- A value, shorthand for a single parameter
- A function, which is passed to the validator for calculation after execution
- The function return value can be Promise

#### Trigger Method

Form validation can usually be divided into manual validation, out-of-focus validation, and real-time validation according to real-time performance. The corresponding values   of the `trigger` field in the validation rules are: `''`, `'blur'`, `'input'`, which can be used in combination, such as `input+blur`.

### Mixed Writing

Sometimes you need to perform some complex validation, such as asynchronous validation or some custom methods, then you can mix the string format with the full format.

The following is an example of **asynchronous validation**, adding an asynchronous duplicate validation:

``` view
<template>
<u-form-item label="Username" required :rules="nameRules">
    <u-input maxlength="12" placeholder="4-12 characters"></u-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            nameRules: [
                'required | ^is THAT | ^azAZ09-$ | azAZ09$ | minLength(4)',
                { message: 'This user name already exists', trigger: 'blur', validate(value, rule, options) {
                    return new Promise((resolve, reject) => {
                        // Here simulates an asynchronous request
                        setTimeout(() => {
                            resolve(!['abcd', 'aaaa', 'ABCD'].includes(value));
                        }, 200);
                    });
                } },
            ],
        };
    },
};
</script>
```

You can also disassemble them all:

``` view
<template>
<u-form-item label="Username" required :rules="nameRules">
    <u-input maxlength="12" placeholder="4-12 characters"></u-input>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            nameRules: [
                'required',
                '^is THAT',
                '^azAZ09-$',
                'azAZ09$',
                'minLength(4)',
                { message: 'This user name already exists', trigger: 'blur', validate(value, rule, options) {
                    return new Promise((resolve, reject) => {
                        // Here simulates an asynchronous request
                        setTimeout(() => {
                            resolve(!['abcd', 'aaaa', 'ABCD'].includes(value));
                        }, 200);
                    });
                } },
            ],
        };
    },
};
</script>
```

### Dynamic Validation

Sometimes the `rules` property needs to change according to different situations. In this case, you can directly bind a dynamic string or array to the property.

``` view
<template>
<u-form ref="form">
    <u-form-item>
        <u-radios v-model="model.protocol">
            <u-radio label="HTTP">HTTP</u-radio>
            <u-radio label="HTTPS">HTTPS</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="Port" required :rules="model.protocol === 'HTTP' ?
        'required | integer | range(80, 65535) | unique(...existingPortList)' :
        'required | integer | range(443, 65535) | unique(...existingPortList)'">
        <u-input size="huge medium" v-model.number="model.port" maxlength="5" :placeholder="model.protocol === 'HTTP' ? '80-65535内的整数' : 'Integer within 443-65535'"></u-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                protocol: 'HTTP',
                port: '',
            },
            existingPortList: [8000, 3306, 65535],
        };
    },
};
</script>
```

Or use mixed writing directly to handle complex verification.

``` view
<template>
<u-form ref="form">
    <u-form-item>
        <u-radios v-model="model.protocol">
            <u-radio label="HTTP">HTTP</u-radio>
            <u-radio label="HTTPS">HTTPS</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="Port" required :rules="portRules">
        <u-input size="huge medium" v-model.number="model.port" maxlength="5" :placeholder="model.protocol === 'HTTP' ? '80 or an integer within 1025-65535' : '443 or an integer within 1025-65535'"></u-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                protocol: 'HTTP',
                port: '',
            },
            existingPortList: [8000, 3306, 65535],
            portRules: [
                'required',
                'integer',
                {
                    trigger: 'blur',
                    validate: (value, rule, options) => {
                        value = +value;
                        if (this.model.protocol === 'HTTP') {
                            if (value === 80 || value >= 1025 && value <= 65535)
                                return true;
                            else
                                return '80 or an integer between 1025-65535';
                        } else {
                            if (value === 443 || value >= 1025 && value <= 65535)
                                return true;
                            else
                                return '443 or an integer between 1025-65535';
                        }
                    },
                },
                'unique(...existingPortList)',
            ],
        };
    },
    watch: {
        'model.protocol'() {
            this.$nextTick(() => this.$refs.form.validate().catch(() => undefined));
        },
    },
};
</script>
```

### Registration Validation Rules

You can register rules yourself in the `rules` field of the Vue component options.

``` view
<template>
<u-form-item label="Color" rules="hexColor">
    <u-input placeholder="Please enter the hexadecimal color value"></u-input>
</u-form-item>
</template>
<script>
export default {
    rules: {
        hexColor: { validate: 'pattern', args: /^#([0-9a-f]{3}|[0-9a-f]{6})$/i, message: 'The color value format is incorrect', trigger: 'blur' },
    },
};
</script>
```

In the above example, you can also register the validator in the `validators` field of the Vue component options first, and then register the rules.

``` view
<template>
<u-form-item label="Color" rules="hexColor">
    <u-input placeholder="Please enter the hexadecimal color value"></u-input>
</u-form-item>
</template>
<script>
export default {
    validators: {
        hexColor: (value) => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value),
    },
    rules: {
        hexColor: { validate: 'hexColor', message: 'The color value format is incorrect', trigger: 'blur' },
    },
};
</script>
```

> Vue component options' `rules` and `validators` can be passed via `mixins` or `extends`.
>
> If you want to register rules and validators globally, use the `Vue.rule(id, rule)` and `Vue.validator(id, validator)` methods.

### Compound Validation Rules

Registration validation rules support composite rules, that is, multiple rules are combined and registered as one.

For example, if several fields have the same validation logic, you can define them as new validation rules and use them in combination.

``` view
<template>
<u-form gap="large">
    <u-form-item label="Name1" required rules="nameBase | rangeLength(4,12) | unique(...existingList)">
        <u-input size="huge medium" maxlength="12" placeholder="4-12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Name2" required rules="nameBase | rangeLength(8,24)">
        <u-input size="huge medium" maxlength="24" placeholder="8-24个字符"></u-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    rules: {
        nameBase: 'required | ^is THAT | ^azAZ09-$ | azAZ09$',
    },
    data() {
        return {
            existingList: ['abcd', 'aaaa', 'ABCD'],
        };
    },
};
</script>
```

## Nested Validation

Nested validation is a function that allows leaf-level validation (MField validation) status, information, and events to be passed layer by layer through parent validators and eventually to `<u-form>`. At any level, you can get information such as whether the nested layer has passed (valid), whether it has been triggered (touched), whether it has been modified (dirty), and the first error (firstError). At the same time, you can also validate all child validation items by calling the validate method of `<u-form>`.

### Single Row Nesting

For input boxes arranged horizontally in the same row, if you want their error prompts to appear only at the end of the row, you need to use the nested validation function to achieve this.

Nested validation, the internal validator will throw the validation result (whether the validation is successful, error prompt) outward.

Setting the `muted` property to `message` can hide the internal validator prompt, but will not hide the red box style of the input box.

``` html
<u-validator>
    <u-linear-layout gap="small">
        <u-validator label="Container Port" rules="required | integer | range(1,65535) @i" muted="message">
            <u-input size="huge normal" placeholder="Container port, integer between 1-65535"></u-input>
        </u-validator>
        <u-validator label="Service Port" rules="required | integer | range(1,65535) @i" muted="message">
            <u-input size="huge normal" placeholder="Service port, integer between 1-65535"></u-input>
        </u-validator>
    </u-linear-layout>
</u-validator>
```

Of course, if the space is small, you can also use the placement hint below.

``` html
<u-linear-layout gap="small">
    <u-validator label="Container Port" rules="required | integer | range(1,65535) @i" placement="bottom">
        <u-input size="huge normal" placeholder="Container port, integer between 1-65535"></u-input>
    </u-validator>
    <u-validator label="Service Port" rules="required | integer | range(1,65535) @i" placement="bottom">
        <u-input size="huge normal" placeholder="Service port, integer between 1-65535"></u-input>
    </u-validator>
</u-linear-layout>
```

Complex Case

The following components have integrated the nested validation function of UValidator. You can refer to the corresponding documents for details [UFormTableView](../u-form-table-view), [UDynamicCards](../u-dynamic-cards).

## Other

### Too Long Prompt

By setting the maxlength-message attribute on a form control, you can give the user a prompt message when they continue to enter the text after reaching the maximum length.

``` html
<u-form ref="form">
    <u-form-item label="Username">
        <u-input maxlength="4" maxlength-message="No more than 4 characters" placeholder="No more than 4 characters"></u-input>
    </u-form-item>
</u-form>
```