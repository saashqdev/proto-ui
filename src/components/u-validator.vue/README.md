<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# UValidator Validator

**UI Components**, **Form Validators**, **Block-Level Display**

## Basic Example
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

``` vue
<template>
<u-form-item label="Port" required rules="required | integer | range(80, 65535) | unique(...existingPortList)">
    <u-input v-model.number="model.port" maxlength="5" placeholder="Integer between 80-65535"></u-input>
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

``` vue
<template>
<u-form gap="large">
    <u-form-item label="Password" required rules="required | ^azAZ09_$ | minLength(4)">
        <u-input size="huge medium" type="password" v-model="model.password" maxlength="8" placeholder="Consists of letters, numbers or '_'"></u-input>
    </u-form-item>
    <u-form-item label="Confirm password" required rules="required | confirmed(model.password)">
        <u-input size="huge medium" type="password" v-model="model.confirmedPassword" maxlength="8" placeholder="Enter password again"></u-input>
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

```ts
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

```ts
type Validator = (value: any, ...args: any[]) => boolean | Promise<boolean>;
```

See the built-in validators.

ValidateFunc is a function that needs to be called immediately to validate the rules. It is often used to handle synchronous or asynchronous methods. Different from the validator, its structure is as follows:

```ts
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

``` vue
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
                'required | ^azAZ | ^azAZ09-$ | azAZ09$ | minLength(4)',
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

``` vue
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
                '^azAZ',
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

``` vue
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
        <u-input size="huge medium" v-model.number="model.port" maxlength="5" :placeholder="model.protocol === 'HTTP' ? 'Integer between 80-65535' : 'Integer between 443-65535'"></u-input>
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

``` vue
<template>
<u-form ref="form">
    <u-form-item>
        <u-radios v-model="model.protocol">
            <u-radio label="HTTP">HTTP</u-radio>
            <u-radio label="HTTPS">HTTPS</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="Port" required :rules="portRules">
        <u-input size="huge medium" v-model.number="model.port" maxlength="5" :placeholder="model.protocol === 'HTTP' ? '80 or integer between 1025-65535' : '443 or integer between 1025-65535'"></u-input>
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
            portRules:
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
    watch:
        'model.protocol'() {
            this.$nextTick(() => this.$refs.form.validate().catch(() => undefined));
        },
    },
};
</script>
```

### Registration Validation Rules

You can register rules yourself in the `rules` field of the Vue component options.

``` vue
<template>
<u-form-item label="Color" rules="hexColor">
    <u-input placeholder="Please enter the hexadecimal color value"></u-input>
</u-form-item>
</template>
<script>
export default {
    rules:
        hexColor: { validate: 'pattern', args: /^#([0-9a-f]{3}|[0-9a-f]{6})$/i, message: 'The color value format is incorrect', trigger: 'blur' },
    },
};
</script>
```

In the above example, you can also register the validator in the `validators` field of the Vue component options first, and then register the rules.

``` vue
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
    rules:
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

``` vue
<template>
<u-form gap="large">
    <u-form-item label="Name1" required rules="nameBase | rangeLength(4,12) | unique(...existingList)">
        <u-input size="huge medium" maxlength="12" placeholder="4-12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Name2" required rules="nameBase | rangeLength(8,24)">
        <u-input size="huge medium" maxlength="24" placeholder="8-24 characters"></u-input>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    rules:
        nameBase: 'required | ^azAZ | ^azAZ09-$ | azAZ09$',
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

## Built-In Rules
### Null Value Judgment

#### required <u-label>blur</u-label>

Required. If it is empty, an error message will be displayed. Empty values   refer to `''`, `undefined`, and `null`. No parameters.

In the case of an empty value, if none of the required rules, `required`, `filled`, or `notEmpty`, are used, the other rules will automatically pass.

``` html
<u-validator label="Username" rules="required">
    <u-input placeholder="Please enter your username"></u-input>
</u-validator>
```

#### filled <u-label>blur</u-label>

Required. On the basis of `required`, the string cannot be all blank (i.e. the `trim` method is called). No parameters.

For example, if you enter multiple spaces, an error message will be displayed.

``` html
<u-validator label="Description" rules="filled">
    <u-input placeholder="Please enter a description"></u-input>
</u-validator>
```

#### notEmpty <u-label>input+blur</u-label>

Arrays cannot be empty. Strings can also be compared.

``` html
<u-validator label="List" rules="notEmpty">
    <u-checkboxes>
        <u-checkbox label="Water cup">Water cup</u-checkbox>
        <u-checkbox label="Nuts">Nuts</u-checkbox>
        <u-checkbox label="Towel">Towel</u-checkbox>
        <u-checkbox label="Sofa">Sofa</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### empty <u-label>input+blur</u-label>

Must be empty. The opposite of `notEmpty`. Strings can also be compared.

``` html
<u-validator label="List" rules="empty">
    <u-checkboxes>
        <u-checkbox label="Water cup">Water cup</u-checkbox>
        <u-checkbox label="Nuts">Nuts</u-checkbox>
        <u-checkbox label="Towel">Towel</u-checkbox>
        <u-checkbox label="Sofa">Sofa</u-checkbox>
    </u-checkboxes>
</u-validator>
```

### Range Judgment

#### minLength(min: number) <u-label>blur</u-label>

Must not be less than the specified number of characters. Both string and array lengths can be compared.

- `min`: minimum length

``` html
<u-validator label="Username" rules="minLength(4)">
    <u-input placeholder="must be less than 4 characters"></u-input>
</u-validator>
```

#### maxLength(min: number) <u-label>blur</u-label>

The length of the string and array can be compared.

- `max`: maximum length

``` html
<u-validator label="Username" rules="maxLength(12)">
    <u-input placeholder="No more than 12 characters"></u-input>
</u-validator>
```

#### rangeLength(min: number, max: number) <u-label>blur</u-label>

The number of characters must be within the specified range. Both characters and array lengths can be compared.

- `min`: minimum length
- `max`: maximum length

``` html
<u-validator label="Username" rules="rangeLength(4,12)">
    <u-input placeholder="Please enter 4-12 characters"></u-input>
</u-validator>
```

#### min(min: any) <u-label>blur</u-label>

Must not be less than the specified value. Comparisons can be made with numbers, strings, or dates.

- `min`: minimum value

``` html
<u-validator label="Port" rules="min(10)">
    <u-input placeholder="must not be less than 10"></u-input>
</u-validator>
```

#### max(min: any) <u-label>blur</u-label>

Must not be greater than the specified value. Comparisons can be made with numbers, strings, or dates.

- `max`: maximum value

``` html
<u-validator label="Port" rules="max(65535)">
    <u-input placeholder="No more than 65535"></u-input>
</u-validator>
```

#### range(min: any, max: any) <u-label>blur</u-label>

Must not be greater than the specified value. Comparisons can be made with numbers, strings, or dates.

- `min`: minimum value
- `max`: maximum value

``` html
<u-validator label="Port" rules="range(80,8000)">
    <u-input placeholder="Between 80-8000"></u-input>
</u-validator>
```

### Customization

#### pattern(re: RegExp) <u-label>input+blur</u-label>

Determine based on regular expressions.

- `re`: Regular expressions

``` html
<u-validator label="Nickname" rules="pattern(/^[az][a-zA-Z0-9]*$/)">
    <u-input size="normal medium" placeholder="Consists of letters and numbers, must start with a lowercase letter"></u-input>
</u-validator>
```

### Equality or Inclusion Judgment

#### is(arg: any) <u-label>blur</u-label>

Must be equal to the argument, compared using === .

- `arg`: value used for judgment

``` html
<u-validator label="Guess" rules="is('abc')">
    <u-input placeholder="Must be the same as 'abc'"></u-input>
</u-validator>
```

``` html
<u-validator label="Number" rules="is(3) @bi">
    <u-number-input placeholder="Must be equal to 3"></u-number-input>
</u-validator>
```

#### isNot(arg: any) <u-label>blur</u-label>

Must be different from the argument, compared using === .

- `arg`: value used for judgment

``` html
<u-validator label="Guess" rules="isNot('abc')">
    <u-input placeholder="Must be different from 'abc'"></u-input>
</u-validator>
```

``` html
<u-validator label="Number" rules="isNot(3) @bi">
    <u-number-input placeholder="Must not equal to 3"></u-number-input>
</u-validator>
```

#### equals(arg: any) <u-label>blur</u-label>

Must be equal to the parameter. In addition to numeric values, arrays and objects can also be compared using [lodash.isEqual](https://www.lodashjs.com/docs/latest#_isequalvalue-other).

- `arg`: value used for judgment

``` html
<u-validator label="Guess" rules="equals('abc')">
    <u-input placeholder="Must be equal to 'abc'"></u-input>
</u-validator>
```

``` html
<u-validator label="List" rules="equals(['cup', 'nuts']) @bi">
    <u-checkboxes>
        <u-checkbox label="Water cup">Water cup</u-checkbox>
        <u-checkbox label="Nuts">Nuts</u-checkbox>
        <u-checkbox label="Towel">Towel</u-checkbox>
        <u-checkbox label="Sofa">Sofa</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### notEquals(arg: any) <u-label>blur</u-label>

Must be unequal to the parameter. In addition to numeric values, arrays and objects can also be compared using lodash.isEqual .

- `arg`: value used for judgment

``` html
<u-validator label="Guess" rules="notEquals('abc')">
    <u-input placeholder="Must not equal to 'abc'"></u-input>
</u-validator>
```

``` html
<u-validator label="List" rules="notEquals(['cup', 'nuts']) @bi">
    <u-checkboxes>
        <u-checkbox label="Water cup">Water cup</u-checkbox>
        <u-checkbox label="Nuts">Nuts</u-checkbox>
        <u-checkbox label="Towel">Towel</u-checkbox>
        <u-checkbox label="Sofa">Sofa</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### confirmed(arg: any) <u-label>blur</u-label>

The validation logic is the same as `equals`, and the error message is dedicated to the second confirmation of the password.

``` vue
<template>
<u-form gap="large">
    <u-form-item label="Password" required rules="required | ^azAZ09_$ | minLength(4)">
        <u-input size="huge medium" type="password" v-model="model.password" maxlength="8" placeholder="Consists of letters, numbers or '_'"></u-input>
    </u-form-item>
    <u-form-item label="Confirm password" required rules="required | confirmed(model.password)">
        <u-input size="huge medium" type="password" v-model="model.confirmedPassword" maxlength="8" placeholder="Enter password again"></u-input>
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

#### includes(...args: any[]) <u-label>input+blur</u-label>

The value to be validated is an array and must contain the items in the parameter.

``` html
<u-validator label="List" rules="includes('cup', 'nuts')">
    <u-checkboxes>
        <u-checkbox label="Water cup">Water cup</u-checkbox>
        <u-checkbox label="Nuts">Nuts</u-checkbox>
        <u-checkbox label="Towel">Towel</u-checkbox>
        <u-checkbox label="Sofa">Sofa</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### excludes(...args: any[]) <u-label>input+blur</u-label>

The validation value is an array and cannot contain the items in the parameter.

``` html
<u-validator label="List" rules="excludes('cup', 'nuts')">
    <u-checkboxes>
        <u-checkbox label="Water cup">Water cup</u-checkbox>
        <u-checkbox label="Nuts">Nuts</u-checkbox>
        <u-checkbox label="Towel">Towel</u-checkbox>
        <u-checkbox label="Sofa">Sofa</u-checkbox>
    </u-checkboxes>
</u-validator>
```

#### included(...args: any[]) <u-label>input+blur</u-label>

Must be one of the values   in the parameters.

``` html
<u-validator label="List" rules="included('cup', 'nuts')">
    <u-select>
        <u-select-item value="Water cup">Water cup</u-select-item>
        <u-select-item value="Nuts">Nuts</u-select-item>
        <u-select-item value="Towel">Towel</u-select-item>
        <u-select-item value="Sofa">Sofa</u-select-item>
    </u-select>
</u-validator>
```

#### excluded(...args: any[]) <u-label>input+blur</u-label>

Cannot be any of the values   in the parameters.

``` html
<u-validator label="List" rules="excluded('cup', 'nuts')">
    <u-select>
        <u-select-item value="Water cup">Water cup</u-select-item>
        <u-select-item value="Nuts">Nuts</u-select-item>
        <u-select-item value="Towel">Towel</u-select-item>
        <u-select-item value="Sofa">Sofa</u-select-item>
    </u-select>
</u-validator>
```

#### unique(...args: any[]) <u-label>blur</u-label>

The validation logic is the same as `excluded`, and the error message is specific to determining whether it is a duplicate.

``` vue
<template>
<u-form-item label="Port" required rules="required | integer | unique(...existingPortList)">
    <u-input v-model.number="model.port" maxlength="5" placeholder="Please enter the port"></u-input>
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

#### noDuplicates(arg: any[]) <u-label>input</u-label>

Accepts an array as a parameter and verifies if there are duplicate items in the array.

``` html
<u-validator label="Options" rules="noDuplicates">
    <u-select multiple>
        <u-select-item value="cup">Water cup</u-select-item>
        <u-select-item value="coffee">coffee</u-select-item>
        <u-select-item value="cup">Water cup</u-select-item>
        <u-select-item value="coffee">coffee</u-select-item>
        <u-select-item value="towel">Towel</u-select-item>
    </u-select>
</u-validator>
```

### Type Judgment

#### string <u-label>input+blur</u-label>

Must be a string type.

``` html
<u-validator label="Options" rules="string">
    <u-radios>
        <u-radio label="1">String</u-radio>
        <u-radio :label="2">Number</u-radio>
        <u-radio :label="[]">Array</u-radio>
    </u-radios>
</u-validator>
```

#### number <u-label>input+blur</u-label>

Must be a numeric type.

When using `v-model`, be sure to add the `.number` modifier.

For example, `'12'` will result in an error.

``` vue
<template>
<u-validator label="Port" rules="number">
    <u-input v-model="value" placeholder="Must be a numeric type"></u-input>
</u-validator>
</template>
<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>
```

#### numerical(noSymbols?: boolean) <u-label>input+blur</u-label>

Must be a number. Unlike the `number` rule, it does not matter whether it is a string or a number, as long as it is a number.

For example, both `12` and `'12'` are acceptable.

- `noSymbols`: If `true`, symbols such as `+`, `-`, `.` cannot be included

``` vue
<template>
<u-validator label="Port" rules="numeric">
    <u-input v-model="value" placeholder="Must be a number"></u-input>
</u-validator>
</template>
<script>
export default {
    data() {
        return {
            value: '',
        };
    },
};
</script>
```

#### integer <u-label>input+blur</u-label>

Must be an integer. Doesn't matter if it's a string or a number.

``` html
<u-validator label="Timeout" rules="integer">
    <u-input placeholder="Must be an integer"></u-input>
</u-validator>
```

#### decimal(force?: boolean, digits?: string) <u-label>blur</u-label>

Integer or decimal. Doesn't matter if it's string or number type.

- `force`: whether to allow only decimals
- `digits`: the decimal place range, format like `1,3`. Default is `1,`

``` html
<u-validator label="Amount" rules="decimal(true, '2,2')">
    <u-input placeholder="Must have two decimal places"></u-input>
</u-validator>
```

#### boolean <u-label>input+blur</u-label>

Must be a Boolean type.

``` html
<u-validator label="Options" rules="boolean">
    <u-radios>
        <u-radio label="abc">String</u-radio>
        <u-radio :label="true">true</u-radio>
        <u-radio :label="123">Numbers</u-radio>
    </u-radios>
</u-validator>
```

#### function <u-label>input+blur</u-label>

Must be a function.

``` html
<u-validator label="Options" rules="function">
    <u-radios>
        <u-radio label="abc">String</u-radio>
        <u-radio :label="{}">Object</u-radio>
        <u-radio :label="() => true">Function</u-radio>
    </u-radios>
</u-validator>
```

#### object <u-label>input+blur</u-label>

Must be an object.

``` html
<u-validator label="Options" rules="object">
    <u-radios>
        <u-radio label="abc">String</u-radio>
        <u-radio :label="{}">Object</u-radio>
        <u-radio :label="[]">Array</u-radio>
    </u-radios>
</u-validator>
```

#### plainObject <u-label>input+blur</u-label>

Must be a simple object.

``` html
<u-validator label="Options" rules="plainObject">
    <u-radios>
        <u-radio label="abc">String</u-radio>
        <u-radio :label="{}">Simple object</u-radio>
        <u-radio :label="new Date()">Date</u-radio>
        <u-radio :label="[]">Array</u-radio>
    </u-radios>
</u-validator>
```

### Letters, Numbers, Hyphens, and Underscores

#### alpha

Whether it can only be letters (a-zA-Z).

``` html
<u-validator label="Name" rules="alpha">
    <u-input placeholder="Must be a letter"></u-input>
</u-validator>
```

#### alphaNum

Can it only be letters or numbers (a-zA-Z0-9).

``` html
<u-validator label="Name" rules="alphaNum">
    <u-input placeholder="Must be a letter or number"></u-input>
</u-validator>
```


#### alphaDash <u-label>input+blur</u-label>

Must consist of letters or underscores.

``` html
<u-validator label="Name" rules="alphaDash">
    <u-input placeholder="composed of letters and underscores"></u-input>
</u-validator>
```

#### alphaNumDash <u-label>input+blur</u-label>

Must consist of letters, numbers, or underscores.

``` html
<u-validator label="Name" rules="alphaNumDash">
    <u-input placeholder="Letters, numbers or underscores"></u-input>
</u-validator>
```

#### alphaSpaces <u-label>input+blur</u-label>

Must consist of letters or spaces.

``` html
<u-validator label="Name" rules="alphaSpaces">
    <u-input placeholder="composed of letters or spaces"></u-input>
</u-validator>
```

#### lowerCase <u-label>input+blur</u-label>

No uppercase letters are allowed.

``` html
<u-validator label="Name" rules="lowerCase">
    <u-input placeholder="No uppercase letters"></u-input>
</u-validator>
```

#### upperCase <u-label>input+blur</u-label>

No lowercase letters are allowed.

``` html
<u-validator label="Name" rules="upperCase">
    <u-input placeholder="No lowercase letters"></u-input>
</u-validator>
```

#### ^az <u-label>input+blur</u-label>

Starts with a lowercase letter.

``` html
<u-validator label="Name" rules="^az">
    <u-input placeholder="starts with a lowercase letter"></u-input>
</u-validator>
```

#### ^az09 <u-label>input+blur</u-label>

Start with a lowercase letter or number.

``` html
<u-validator label="Name" rules="^az09">
    <u-input placeholder="starts with a lowercase letter or number"></u-input>
</u-validator>
```

#### ^az09_ <u-label>input+blur</u-label>

Start with a lowercase letter, number, or underscore.

``` html
<u-validator label="Name" rules="^az09_">
    <u-input placeholder="starts with a lowercase letter, number or underscore"></u-input>
</u-validator>
```

#### ^azAZ <u-label>input+blur</u-label>

Begins with a letter.

``` html
<u-validator label="Name" rules="^azAZ">
    <u-input placeholder="starts with a letter"></u-input>
</u-validator>
```

#### ^azAZ09 <u-label>input+blur</u-label>

Starts with a letter or number.

``` html
<u-validator label="Name" rules="^azAZ09">
    <u-input placeholder="starts with a letter or number"></u-input>
</u-validator>
```

#### ^azAZ09_ <u-label>input+blur</u-label>

Starts with a letter, number, or underscore.

``` html
<u-validator label="Name" rules="^azAZ09_">
    <u-input placeholder="starts with a letter, number or underscore"></u-input>
</u-validator>
```

#### az09$ <u-label>blur</u-label>

End with a lowercase letter or number.

``` html
<u-validator label="Name" rules="az09$">
    <u-input placeholder="ends with a lowercase letter or number"></u-input>
</u-validator>
```

#### azAZ09$ <u-label>blur</u-label>

Ends with a letter or number.

``` html
<u-validator label="Name" rules="azAZ09$">
    <u-input placeholder="ends with a letter or number"></u-input>
</u-validator>
```

#### ^09$ <u-label>input+blur</u-label>

Made up of numbers.

``` html
<u-validator label="Name" rules="^09$">
    <u-input placeholder="consisting of numbers"></u-input>
</u-validator>
```

#### ^az09$ <u-label>input+blur</u-label>

It consists of lowercase letters or numbers.

``` html
<u-validator label="Name" rules="^az09$">
    <u-input placeholder="Use lowercase letters or numbers"></u-input>
</u-validator>
```

#### ^az09-$ <u-label>input+blur</u-label>

It can be composed of lowercase letters, numbers or hyphens.

``` html
<u-validator label="Name" rules="^az09-$">
    <u-input placeholder="Use lowercase letters, numbers or hyphens"></u-input>
</u-validator>
```

#### ^az09-.$ <u-label>input+blur</u-label>

It consists of lowercase letters, numbers, "-" or ".".

``` html
<u-validator label="Name" rules="^az09-.$">
    <u-input placeholder="Use lowercase letters, numbers, '-' or '.'"></u-input>
</u-validator>
```

#### ^azAZ09$ <u-label>input+blur</u-label>

Consists of letters or numbers.

``` html
<u-validator label="Name" rules="^azAZ09$">
    <u-input placeholder="Letters or numbers"></u-input>
</u-validator>
```

#### ^azAZ09-$ <u-label>input+blur</u-label>

It consists of letters, numbers or "_".

``` html
<u-validator label="Name" rules="^azAZ09-$">
    <u-input placeholder="Letters, numbers or '-'"></u-input>
</u-validator>
```

#### ^azAZ09_$ <u-label>input+blur</u-label>

It consists of letters, numbers or "_".

``` html
<u-validator label="Name" rules="^azAZ09_$">
    <u-input placeholder="Letters, numbers or '_'"></u-input>
</u-validator>
```

#### ^azAZ09-_$ <u-label>input+blur</u-label>

It consists of letters, numbers, "-" or "_".

``` html
<u-validator label="Name" rules="^azAZ09-_$">
    <u-input placeholder="Letters, numbers, '-' or '_'"></u-input>
</u-validator>
```

#### without-- <u-label>input+blur</u-label>

There cannot be consecutive dashes.

``` html
<u-validator label="Name" rules="without--">
    <u-input placeholder="No continuous hyphens"></u-input>
</u-validator>
```

#### without__ <u-label>input+blur</u-label>

Consecutive underscores are not allowed.

``` html
<u-validator label="Name" rules="without__">
    <u-input placeholder="Underlines cannot appear continuously"></u-input>
</u-validator>
```

### Specific Scenario Judgment

#### email <u-label>blur</u-label>

Must be a valid email address.

``` html
<u-validator label="Email" rules="email">
    <u-input placeholder="Please enter a valid email address"></u-input>
</u-validator>
```

#### ip <u-label>blur</u-label>

It must be a correct IP.

``` html
<u-validator label="IP" rules="ip">
    <u-input placeholder="Please enter the correct IP"></u-input>
</u-validator>
```

#### port <u-label>blur</u-label>

The port must be correct.

``` html
<u-validator label="Port" rules="port">
    <u-input placeholder="Please enter the correct port"></u-input>
</u-validator>
```

#### halfWidth <u-label>input+blur</u-label>

Half-width characters are required.

``` html
<u-validator label="Name" rules="halfWidth">
    <u-input placeholder="Need to enter half-width characters"></u-input>
</u-validator>
```

#### fullWidth <u-label>input+blur</u-label>

Full-width characters must be entered.

``` html
<u-validator label="Name" rules="fullWidth">
    <u-input placeholder="Please enter full-width characters"></u-input>
</u-validator>
```

#### ascii <u-label>input+blur</u-label>

ASCII characters must be entered.

``` html
<u-validator label="Name" rules="ascii">
    <u-input placeholder="Please enter ascii characters"></u-input>
</u-validator>
```

#### base64 <u-label>blur</u-label>

The base64 encoding must be entered.

``` html
<u-validator label="Name" rules="base64">
    <u-input placeholder="Please enter base64 encoding"></u-input>
</u-validator>
```

#### byteLength(min: number, max: number) <u-label>input+blur</u-label>

The byte length range of the input string is limited.

- `min`: minimum byte length
- `max`: Maximum length in bytes

``` html
<u-validator label="Name" rules="byteLength(0, 21)">
    <u-input placeholder="Please enter eight Chinese characters"></u-input>
</u-validator>
```

#### dataURI <u-label>blur</u-label>

The dataURI must be encoded.

``` html
<u-validator label="encoding" rules="dataURI">
    <u-input placeholder="Please enter the dataURI code"></u-input>
</u-validator>
```

#### divisibleBy(divisor: number) <u-label>blur</u-label>

Whether the input number is divisible by the corresponding divisor.

- `divisor`: the divisor

``` html
<u-validator label="Name" rules="divisibleBy(3)">
    <u-input placeholder="Please enter a multiple of 3"></u-input>
</u-validator>
```

#### hash(algorithm: string) <u-label>blur</u-label>

Whether the input encoding complies with the specified hash algorithm.

- `algorithm`: algorithm name, supports `md4`, `md5`, `sha1`, `sha256`, `sha384`, `sha512`, `ripemd128`, `ripemd160`, `tiger128`, `tiger160`, `tiger192`, `crc32` and `crc32b`

``` html
<u-validator label="Encoding" rules="hash('md4')">
    <u-input placeholder="Please enter the hash code"></u-input>
</u-validator>
```

#### md5 <u-label>blur</u-label>

Whether the input code conforms to the md5 algorithm.

``` html
<u-validator label="Encoding" rules="md5">
    <u-input placeholder="Please enter the md5 code"></u-input>
</u-validator>
```

#### hex <u-label>blur</u-label>

Whether the input number is hexadecimal.

``` html
<u-validator label="Hexadecimal number" rules="hex">
    <u-input placeholder="Please enter a hexadecimal number"></u-input>
</u-validator>
```

#### hexColor <u-label>blur</u-label>

Whether the input string is a hexadecimal color code.

``` html
<u-validator label="Color" rules="hexColor">
    <u-input placeholder="Please enter color"></u-input>
</u-validator>
```

#### creditCard <u-label>blur</u-label>

Is the credit card number you entered legal?

``` html
<u-validator label="Credit Card Number" rules="creditCard">
    <u-input placeholder="Please enter your credit card number"></u-input>
</u-validator>
```

#### fqdn <u-label>blur</u-label>

Enter a legal fully qualified domain name.

``` html
<u-validator label="FQDN" rules="fqdn">
    <u-input placeholder="Please enter the fully qualified domain name"></u-input>
</u-validator>
```

#### ipOrFQDN <u-label>blur</u-label>

Check whether the input is a valid IP or fully qualified domain name.

``` html
<u-validator label="IP or FQDN" rules="ipOrFQDN">
    <u-input placeholder="Please enter IP or fully qualified domain name"></u-input>
</u-validator>
```

#### isbn(version: number) <u-label>blur</u-label>

Whether the input content is a valid International Standard Book Number (ISBN).

- `version`: ISBN version, accepts `10` or `13`

``` html
<u-validator label="ISBN" rules="isbn(10)">
    <u-input placeholder="Please enter the ISBN number"></u-input>
</u-validator>
```

#### issn <u-label>blur</u-label>

Whether the input content is a valid International Standard Serial Number (ISSN).

``` html
<u-validator label="ISSN" rules="issn">
    <u-input placeholder="Please enter the ISSN number"></u-input>
</u-validator>
```

#### isin <u-label>blur</u-label>

Whether the input is a valid International Securities Identification Number (ISIN).

``` html
<u-validator label="ISIN" rules="isin">
    <u-input placeholder="Please enter the ISIN number"></u-input>
</u-validator>
```

#### iso8601(strict: boolean) <u-label>blur</u-label>

Whether the input content is a valid ISO8601 date.

- `strict`: Whether to detect leap year dates. If the value of `strict` is `true`, dates like `2019-02-29` are illegal dates

``` html
<u-validator label="Date" rules="iso8601(true)">
    <u-input placeholder="Please enter the date"></u-input>
</u-validator>
```

#### iso31661Alpha2 <u-label>blur</u-label>

Whether the input is a valid ISO 3166-1 Alpha-2 country code.

``` html
<u-validator label="Code" rules="iso31661Alpha2">
    <u-input placeholder="Please enter the country code"></u-input>
</u-validator>
```

#### iso31661Alpha3 <u-label>blur</u-label>

Whether the input is a valid ISO 3166-1 Alpha-3 country code.

``` html
<u-validator label="Code" rules="iso31661Alpha3">
    <u-input placeholder="Please enter the country code"></u-input>
</u-validator>
```

#### json <u-label>input+blur</u-label>

Whether the input string can be parsed as JSON.

``` html
<u-validator label="JSON" rules="json">
    <u-input placeholder="Please enter a JSON string"></u-input>
</u-validator>
```

#### jwt <u-label>blur</u-label>

Whether the input string is a valid JSON Web Token.

``` html
<u-validator label="JWT"   rules="jwt">
    <u-input placeholder="Please enter JWT"></u-input>
</u-validator>
```

#### latLong <u-label>blur</u-label>

Whether the input string is a valid longitude and latitude coordinate.

``` html
<u-validator label="Longitude and Latitude" rules="latLong">
    <u-input placeholder="Please enter coordinates"></u-input>
</u-validator>
```

#### mobile (locale?: any[], strict?: boolean) <u-label>blur</u-label>

Check whether the input content is a legal mobile phone number.

- `locale`: the region, such as `en-US`, `en-CA`, etc. It can be a string or an array. If left blank, it will try to automatically match all regions.

- `strict`: Whether to check the country code. If `true`, it must start with `+` and the country code.

``` html
<u-validator label="mobile" rules="mobile('en-US')">
    <u-input placeholder="Please enter your mobile number"></u-input>
</u-validator>
```

#### mongoId <u-label>blur</u-label>

Whether the input string is a valid MongoDB object ID.

``` html
<u-validator label="ID" rules="mongoId">
    <u-input placeholder="Please enter the mongoDB object ID"></u-input>
</u-validator>
```

#### postalCode(locale: string) <u-label>blur</u-label>

Whether the input string is a valid postal code.

- `locale`: the region. For example, `CH`, `JP`, etc.

``` html
<u-validator label="postalID" rules="postalCode('JP')">
    <u-input placeholder="Please enter your postal code"></u-input>
</u-validator>
```

#### uuid(version?: number) <u-label>blur</u-label>

Whether the input string is a valid UUID.

- `version`: The UUID version to use. Accepts `3`, `4`, and `5`. If left blank, attempts to automatically match all versions.

``` html
<u-validator label="UUID" rules="uuid(3)">
    <u-input placeholder="Please enter UUID"></u-input>
</u-validator>
```

#### chinese <u-label>input+blur</u-label>

Whether the input string is legal Chinese content.

``` html
<u-validator label="Name" rules="chinese">
    <u-input placeholder="Please enter your name"></u-input>
</u-validator>
```

## API
Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| name | string | | | The form item name. Deprecated |
| label | string | | | Label. Used to synthesize prompt messages in UValidator and to display labels in other components such as UFormItem. |
| rules | string, Array | | | Validation rules. The shorthand format is string type, and the full or mixed format is array type |
| message | string | | | Default prompt message |
| muted | string | | | Whether to mute during verification. Optional values: `'message'` means only muting the message prompt, `'all'` means muting both the message prompt and the red box prompt |
| ignore-validation | boolean | | `false` | Ignore validation |
| ignore-rules | boolean | | `false` | Ignore validation rules. Deprecated, same as `ignore-validation` |
| validating-options | object | | | Validation helper object. Used in `validate` method of Rule |
| validating-value | any | | | Temporarily modify the validation value |
| validating-process | Function | | | Preprocess the value before validation |
| manual | boolean | | `false` | Whether to use manual validation. If `true`, UValidator will not perform corresponding validation after listening to the `input`, `change` and `blur` events of the child components. |

Computed

| Computed | Type | Description |
| -------- | ---- | ----------- |
| touched | boolean | Whether the user touched it |
| dirty | boolean | Whether the user modified the value |
| valid | boolean | Verification passed |
| firstError | string | The first error message |

### Slots

#### (default)

Insert a component that inherits MField, or a child UValidator, or other HTML and text.

### Events

#### @validate

For the first Field or all sub-UValidators:

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.valid | boolean | Whether the verification passed |
| $event.touched | boolean | Whether the user touched |
| $event.dirty | boolean | Whether the user modified the value |
| $event.firstError | string | The first error message |
| senderVM | UValidator | Sending event instance |

### Methods

#### validate(trigger, muted)

Manual verification.

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | string | `'submit'` | Trigger method, optional value: one of `submit`, `blur` and `input`, or any combination of them. |
| muted | boolean | `false` | No prompt after verification |