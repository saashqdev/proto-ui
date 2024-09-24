# Form Series

Generally speaking, forms are one of the most common, important, and complex forms of interaction in Web applications. The quality of the design of the form series components largely determines the quality of the entire application implementation.

The layout style of the form is relatively uniform, but there will be many complex common logics such as rule validation, data comparison, data caching, etc. Since the native form elements are simple in style and thin in function, they are not friendly to SPA and do not have the ability to handle these complex problems, so a layer of encapsulation must be made based on the native elements.

## Related Components

### Example

For example, the following example is a simple form for filling in personal information:

``` html
<u-form>
    <u-form-item label="Gender">
        <u-radios value="Male">
            <u-radio label="Male">Male</u-radio>
            <u-radio label="female">Female</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="Nickname" required>
        <u-input maxlength="20" placeholder="No more than 20 characters"></u-input>
    </u-form-item>
    <u-form-item label="Mobile phone" required>
        <u-input maxlength="11" placeholder="Please enter your phone number"></u-input>
    </u-form-item>
    <u-form-item label="Self-introduction">
        <u-textarea></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">Submit</u-button>
    </u-form-item>
</u-form>
```

Based on daily experience, we can summarize the following components related to forms:

#### Form [Form](/proto-ui/u-form)

Used for overall layout, centralized property setting, and uniform exposure of events and methods.

#### FormGroup

Group form items. This is mainly used for layout. It may have the folding function common to grouped components.

#### FormItem

Used to arrange the positions of form labels and controls, required prompts, rule validation, etc.

#### Form Fields (form controls) Field

As the base class of various form fields (form controls), it is used to trigger FormItem validation and other functions.

For example, common ones are: `<u-input>`, `<u-select>`, `<u-radios>`, `<u-date-picker>`, etc.

There are many components on the page, usually we can think of:

> If a component can read and write backend data through a form, then it is a **form control**.

## Functional Design

### Layout

In addition to the general vertical layout above, forms may also have inline layout in some cases.

``` html
<u-form layout="inline" label-size="auto">
    <u-form-item label="status">
        <u-select>
            <u-select-item>Creating</u-select-item>
            <u-select-item>Success</u-select-item>
            <u-select-item>Failed</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="Username">
        <u-input maxlength="20" placeholder="Please enter your username"></u-input>
    </u-form-item>
    <u-form-item label="Mobile">
        <u-input maxlength="11" placeholder="Please enter your phone number"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">Query</u-button>
    </u-form-item>
</u-form>
```

`<u-form>` provides a `layout` property, which has two possible values: `block` and `inline`, and other values   may be added in the future.

### Verify

Form validation is the core function of a form. We hope that each form control can follow the form validation process in a unified way, rather than writing additional code. Therefore, when designing a component, it should be as general and comprehensive as possible, and it should at least include the following functions:

- Rules List
- Rules expansion
- Asynchronous Validation
- Trigger method

Let’s expand on them one by one below.

#### Rule List

It is not enough to represent the validation rules of a form item with one object, because different validation situations often have different prompt messages and different triggering methods.

For example, the following example shows the validation rules for a username input box:

1. Username is required, out of focus verification
2. Start with a letter, real-time verification
3. Letters, numbers or hyphens, real-time verification
4. Ending with letters or numbers, out of focus verification
5. 4~12 characters, out-of-focus verification

We must use an ordered list `rules` to represent it, which contains several validation rule objects. The structure is as follows:

```javascript
[{ type: 'string', required: true, ... }, { type: 'email', ... }, { type: 'string', pattern: ... }, ...]
```

Each rule object usually has the following parameters:
- `type`: data type
- `trigger`: trigger method
- `message`: message prompt when verification fails
- ...

The example mentioned above can be expressed using the following list of rules:

``` html
<u-form-item label="Username" :rules="[
    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your username' },
    { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: 'Starts with a letter' },
    { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: 'Letters, numbers or hyphens' },
    { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: 'Ends with a letter or number' },
    { type: 'string', min: 4, trigger: 'blur', message: 'Must contain at least 4 characters' },
]">
    <u-input maxlength="112" placeholder="4 to 12 letters, numbers or hyphens"></u-input>
</u-form-item>
```

##### Multi-Field Rule List

A form often needs to add a list of rules for multiple fields. For convenience, we support summarizing and passing them in `<u-form>`, and distinguishing them by the `name` attribute of `<u-form-item>`.

``` vue
<template>
<u-form :rules="rules">
    <u-form-item label="Username" name="username">
        <u-input maxlength="12" placeholder="4~12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Email" name="email">
        <u-input maxlength="24" placeholder="Please enter your email address"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules:
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your username' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: 'Please enter 4 to 12 characters' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your email address' },
                    { type: 'email', trigger: 'blur', message: 'The email format is incorrect' },
                ],
            },
        };
    },
};
</script>
```

#### Rule Expansion and Asynchronous Validation

We used the [async-validator](https://github.com/yiminghe/async-validator) library, which can basically meet these two functions.

For example, the following example is about custom rules, which determines whether the passwords entered twice are consistent:

``` vue
<template>
<u-form :rules="rules">
    <u-form-item label="Password" name="password">
        <u-input type="password" v-model="model.password" maxlength="12" placeholder="6~12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Confirm Password" name="confirm">
        <u-input type="password" v-model="model.confirm" maxlength="12" placeholder="6~12 characters"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button>Settings</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                password: '',
                confirm: '',
            },
            rules:
                password: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your password' },
                    { type: 'string', min: 6, max: 12, trigger: 'blur', message: '6~12 characters' },
                ],
                confirm: [
                    { type: 'string', required: true, trigger: 'blur', message: 'The two entered passwords are inconsistent', validator: (rule, value, callback) => {
                        value === this.model.password ? callback() : callback(new Error());
                    } },
                ],
            },
        };
    },
};
</script>
```

The following example is about asynchronous verification. It determines whether the username has been used and tries to enter "aaaa":

``` vue
<template>
<u-form :rules="rules">
    <u-form-item label="Username" name="username">
        <u-input maxlength="12" placeholder="4~12 characters"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
const checkUsername = function (username) {
    return new Promise((resolve, reject) => {
        if (['aaaa', 'abcd', '1234'].includes(username))
            reject('This user name has been used');
        else
            resolve();
    });
};

export default {
    data() {
        return {
            rules:
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your username' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: 'Please enter 4 to 12 characters' },
                    { type: 'string', required: true, trigger: 'blur', message: 'This username has been used', validator: (rule, value, callback) => {
                        checkUsername(value)
                            .then(() => callback())
                            .catch((err) => callback(new Error(err)));
                    } },
                ],
            },
        };
    },
};
</script>
```

#### Trigger Method

Form validation behaviors can usually be divided into three types according to real-time performance: submission validation, out-of-focus validation, and real-time validation, which correspond to the three triggering methods of the validation rule `trigger`: `submit`, `blur`, `input`. The default in the rule is `submit`.

There is another behavior called form restriction, which is not part of form validation but is usually used in conjunction with it.


##### Submit Verification

All controls in the form are validated only when the form submit button is clicked, which usually corresponds to the `click` event of the submit button. The following is an example:

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="Username" name="username">
        <u-input maxlength="12" placeholder="4~12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Email" name="email">
        <u-input maxlength="24" placeholder="Please enter your email address"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit()">Submit</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules:
                username: [
                    { type: 'string', required: true, message: 'Please enter your username' },
                    { type: 'string', min: 4, max: 12, message: 'Please enter 4 to 12 characters' },
                ],
                email: [
                    { type: 'string', required: true, message: 'Please enter your email address' },
                    { type: 'email', message: 'The email format is incorrect' },
                ],
            },
        };
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

###### Loss of Focus Verification

Validate the form control when it loses focus, usually corresponding to the `blur` event of the form control. The following is an example:

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="Username" name="username">
        <u-input maxlength="12" placeholder="4~12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Email" name="email">
        <u-input maxlength="24" placeholder="Please enter your email address"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules:
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your username' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: 'Please enter 4 to 12 characters' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your email address' },
                    { type: 'email', trigger: 'blur', message: 'The email format is incorrect' },
                ],
            },
        };
    },
};
</script>
```

##### Real-Time Verification

When the value of a form control changes in real-time input, the control is validated, usually corresponding to the form's `input` event. When only real-time validation is activated, out-of-focus validation will skip this rule and overwrite the original result, so we usually need to use the real-time and out-of-focus superposition method `input+blur`.

In the following example, the username length and email format are verified in real time. The email verification does not use the real-time and out-of-focus superposition method, which is not very reasonable.

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="Username" name="username">
        <u-input maxlength="12" placeholder="4~12 characters"></u-input>
    </u-form-item>
    <u-form-item label="Email" name="email">
        <u-input maxlength="24" placeholder="Please enter your email address"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules:
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your username' },
                    { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: 'Please enter 4 to 12 characters' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: 'Please enter your email address' },
                    { type: 'email', trigger: 'input', message: 'The email format is incorrect' },
                ],
            },
        };
    },
};
</script>
```

##### Form Restrictions

When the value of a form control changes, the value is restricted to a specified length, range, or format, such as the partial `type` and `maxlength` restrictions of the `<input>` control:

``` html
<u-form>
    <u-form-item label="Username">
        <u-input maxlength="4" placeholder="No more than 4 characters"></u-input>
    </u-form-item>
</u-form>
```

Regarding format constraints, we plan to implement a `format` attribute for `<u-input>` in the future.


### Data Comparison

### Data Cache

## Expand Controls

The three components of `<u-form>`, `<u-form-group>`, and `<u-form>` constitute a basic form system, which can be used directly in most scenarios without expansion. However, form controls are diverse in business, and the prototype component library cannot fully cover them, and many need to be designed by yourself.

The following will describe how to design form controls and connect them to Vusion's form system, so that the form's rule validation, event handling and other channels can be unified without additional processing.

### Simple Example

Let's take the simplest form control - checkbox `<e-checkbox>` as an example.

#### Structure and Style

First of all, its structure and style can be achieved quickly.

``` vue
<template>
<div :class="$style.root">✓</div>
</template>

<script>
export default {
    name: 'e-checkbox',
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

#### Properties

Each form control always has a core property, which is usually used to bind data, such as:

- `<u-checkbox>` can have a `checked` attribute to indicate the selected state
- `<u-date-picker>` can have a `date` attribute representing a date
- `<u-number-input>` can have a `number` attribute representing a number

But in Vusion, we recommend using the `value` attribute uniformly because:

- There are often situations where form controls need to be processed uniformly. For example, sometimes you may need to traverse: `form.fields.map((field) => field.value)`
- To be consistent with Vue's `v-model` (although it also supports customization)
- Sometimes you can't think of a good name, so it's better to just use `value` without being confusing.

So, we add the following properties to the example above:

``` vue
<template>
<div :class="$style.root" @click="value = !value">{{ value ? '✓' : ' ' }}</div>
</template>

<script>
export default {
    name: 'e-checkbox',
    props: {
        value: { type: Boolean, default: true },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

#### One-Way Flow and Two-Way Binding

Those who are familiar with Vue know that Vue2.x abandons the two-way binding mechanism of 1.x to ensure one-way data flow. This is a good thing, because there is no need to worry about internal components quietly changing the state of the parent component.

But at the same time, it also brings a little inconvenience to our component design: for one attribute, we often need two variables to maintain.

For example, in the example above, we only have one prop, but Vue does not allow us to modify this property when the checkbox is clicked. So we also need a data variable to maintain the actual internal state.

##### Naming Conventions

This involves a naming convention. There is a `value` in prop and a `value` in data. How should we define it better?

```javascript
{
    props: {
        value: { type: Boolean, default: true },
    },
    data() {
        return { value: true };
    },
}
```

First of all, `value` and `_value` are not acceptable, because Vue does not manage dependencies for variables starting with `_`. Then, some component libraries use `initValue` or `defaultValue` to represent props, and `value` to represent data. I think this is not reasonable either, because props can also change, and are not necessarily a default value or initial value.

We prefer the API exposed by the component to be concise and friendly, so we decided to start with data. Vusion stipulates that the data variable related to prop is prefixed with `current` to indicate the current state. For example, the `currentValue` variable corresponds to the `value` attribute, the `currentPage` variable corresponds to the `page` attribute, the `currentExpanded` variable corresponds to the `expanded` attribute, etc.

###### Monitoring Properties

It should be noted here that when it becomes two variables, the external state is separated from the internal state, which means that the internal state will not respond to changes in the external state. At this time, an additional watcher is needed to handle it.

Taking these points into consideration, the example is modified to the following form:

``` vue
<template>
<div :class="$style.root" @click="currentValue = !currentValue">{{ currentValue ? '✓' : ' ' }}</div>
</template>

<script>
export default {
    name: 'e-checkbox',
    props: {
        value: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch:
        value(value) {
            this.currentValue = value;
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

##### Two-Way Binding

Finally, in order to make components more convenient to use, Vue2 provides two two-way binding syntax sugars, `v-model` and `.sync`. You only need to add two events.

*In order to let you better observe the two-way binding, the following example puts the code of the `<e-checkbox>` component into components. *

``` vue
<template>
<div>
    <div>Checkbox: <e-checkbox :class="$style.checkbox" v-model="checked"></e-checkbox></div>
    <div>Binding value: {{ checked }}</div>
</div>
</template>

<script>
export default {
    components:
        'e-checkbox': {
            template: `<div @click="check()">{{ currentValue ? '✓' : ' ' }}</div>`,
            props: {
                value: { type: Boolean, default: false },
            },
            data() {
                return {
                    currentValue: this.value,
                };
            },
            watch:
                value(value) {
                    this.currentValue = value;
                },
            },
            methods: {
                check() {
                    const currentValue = this.currentValue = !this.currentValue;
                    this.$emit('input', currentValue);
                    this.$emit('update:value', currentValue);
                },
            },
        },
    },
    data() {
        return { checked: false };
    },
};
</script>

<style module>
.checkbox {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

#### Inheriting MField

So far, we have only described how to implement a form control according to the specification, but have not yet connected it with the Vusion form system.

The functions related to triggering validation have been encapsulated in the base class component (or Mixin) `<m-field>`. All we have to do is inherit it.

Below is a very simple example of checkboxes and form validation - verifying whether the terms of service are agreed.

``` vue
<template>
<u-form ref="form">
    <u-form-item label="Checkbox" required :rules="rules">
        <e-checkbox :class="$style.checkbox"></e-checkbox> Agree and abide by the terms of service
    </u-form-item>
    <u-form-item><u-button color="primary" @click="$refs.form.validate()">Submit</u-button></u-form-item>
</u-form>
</template>

<script>
import { MField } from '@@';

export default {
    components:
        'e-checkbox': {
            mixins: [MField],
            template: `<div @click="check()">{{ currentValue ? '✓' : ' ' }}</div>`,
            props: {
                value: { type: Boolean, default: false },
            },
            data() {
                return {
                    currentValue: this.value,
                };
            },
            watch:
                value(value) {
                    this.currentValue = value;
                },
            },
            methods: {
                check() {
                    const currentValue = this.currentValue = !this.currentValue;
                    this.$emit('input', currentValue);
                    this.$emit('update:value', currentValue);
                },
            },
        },
    },
    data() {
        return {
            rules:
                { type: 'boolean', required: true, trigger: 'input', message: 'You have not accepted the terms of service', validator(rule, value, callback) {
                    value ? callback() : callback(new Error(false));
                } },
            ],
        };
    },
};
</script>

<style module>
.checkbox {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

#### Event

In the above, we only throw an `input` event. In order to ensure the completeness and consistency of the function implementation, for a form control, we'd better expose these four events: `input`, `change`, `focus` and `blur`.

For focusable elements in the component, we just throw them out; if not, we can use `tabindex` to set them.

``` vue
<template>
<div :class="$style.root"
    @click="check()"
    tabindex="0" @keydown.space.prevent @keyup.space.prevent="check()"
    @focus="onFocus" @blur="onBlur">
    {{ currentValue ? '✓' : ' ' }}</div>
</template>

<script>
import { MField } from '@@';

export default {
    name: 'e-checkbox',
    mixins: [MField],
    props: {
        value: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch:
        value(value) {
            this.currentValue = value;
        },
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        check() {
            const currentValue = this.currentValue = !this.currentValue;
            this.$emit('input', currentValue);
            this.$emit('update:value', currentValue);
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: --var(brand-primary);
}
</style>
```

### Complex Example

To give a more complex example, suppose we need a form control `<e-ip-input>` for users to fill in their IP addresses, and when the form is submitted, we need to verify the correctness of the IP format.

#### Structure and Style

Similarly, the structure and style of this component can be quickly generated.

``` vue
<template>
<div :class="$style.root">
    <u-input :class="$style.input" maxlength="3"></u-input> .
    <u-input :class="$style.input" maxlength="3"></u-input> .
    <u-input :class="$style.input" maxlength="3"></u-input> .
    <u-input :class="$style.input" maxlength="3"></u-input>
</div>
</template>

<script>
export default {
    name: 'e-ip-input',
};
</script>

<style module>
.root {}

.input {
    width: 60px;
}
</style>
```

#### Properties

According to the previous agreement, we use `value` instead of `ip` for the core attribute.

``` vue
<template>
<div :class="$style.root">
    <u-input :class="$style.input" maxlength="3" v-model="parts[0]"></u-input> .
    <u-input :class="$style.input" maxlength="3" v-model="parts[1]"></u-input> .
    <u-input :class="$style.input" maxlength="3" v-model="parts[2]"></u-input> .
    <u-input :class="$style.input" maxlength="3" v-model="parts[3]"></u-input>
</div>
</template>

<script>
export default {
    name: 'e-ip-input',
    props: {
        value: String,
    },
    data() {
        return {
            parts: [],
        };
    },
    watch:
        value(value) {
            this.parts = value.split('.');
        },
    },
};
</script>

<style module>
.root {}

.input {
    width: 60px;
}
</style>
```

#### One-Way Flow and Two-Way Binding

*In order to let you better observe the two-way binding, the following example puts the code of the `<e-checkbox>` component into components. *

``` vue
<template>
<div>
    <div>IP box: <e-ip-input v-model="ip"></e-ip-input></div>
    <div>Binding value: {{ ip }}</div>
</div>
</template>

<script>
export default {
    components:
        'e-ip-input': {
            template: `<div style="display: inline-block">
                <u-input maxlength="3" v-model="parts[0]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[1]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[2]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[3]" @input="onInput()" style="width: 60px"></u-input>
            </div>`,
            props: {
                value: String,
            },
            data() {
                return {
                    parts: [],
                };
            },
            watch:
                value(value) {
                    this.parts = value.split('.');
                },
            },
            methods: {
                onInput() {
                    const value = this.parts.join('.');

                    this.$emit('input', value);
                    this.$emit('update:value', value);
                },
            },
        },
    },
    data() {
        return { ip: undefined };
    },
};
</script>
```

#### Inherit Field and Complete Events

``` vue
<template>
<u-form ref="form">
    <u-form-item label="IP address" required :rules="rules">
        <e-ip-input v-model="model.ip"></e-ip-input>
    </u-form-item>
    <u-form-item><u-button color="primary" @click="$refs.form.validate().catch(() => { /* noop */ })">Submit</u- button></u-form-item>
</u-form>
</template>

<script>
import { MField } from '@@';

export default {
    components:
        'e-ip-input': {
            mixins: [MField],
            template: `<div style="display: inline-block">
                <u-input maxlength="3" v-model="parts[0]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[1]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[2]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[3]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input>
            </div>`,
            props: {
                value: String,
            },
            data() {
                return {
                    parts: [],
                };
            },
            watch:
                value(value) {
                    this.parts = value.split('.');
                },
            },
            methods: {
                onInput(partValue, index) {
                    const value = this.parts.join('.');

                    this.$emit('input', value);
                    this.$emit('update:value', value);
                },
                onChange() {
                    const value = this.parts.join('.');
                    this.$emit('change', {
                        value,
                    });
                },
                onFocus(e) {
                    this.$emit('focus', e);
                },
                onBlur(e) {
                    this.$emit('blur', e);
                },
            },
        },
    },
    data() {
        return {
            model: {
                ip: undefined,
            },
            rules:
                { type: 'string', required: true, trigger: 'blur', message: 'Please fill in the IP' },
                { type: 'string', required: true, message: 'Please fill in the complete IP', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.length === 4 ? callback() : callback(new Error(''));
                } },
                { type: 'string', required: true, trigger: 'input+blur', message: 'Please fill in the number', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.every((part) => !isNaN(part) && part !== '') ? callback() : callback(new Error());
                } },
                { type: 'string', required: true, trigger: 'input+blur', message: 'Please fill in a number between 0 and 255', validator(rule, value, callback) {
                    const parts = value.split('.');
                    /* eslint-disable-next-line */
                    parts.every((part) => 0 <= part && part < 256) ? callback() : callback(new Error());
                } },
            ],
        };
    },
};
</script>
```

## FAQ

#### Why Put Validation Logic in `<u-form-item>` Instead of `<m-field>`?

Part of the validation function is about message prompts, which involves the implementation of templates. If the validation logic is placed in `<m-field>`, then each subclass template is required to implement this part of the function. A component is best to do only one thing, so we put it in `<u-form-item>`. Although some communication logic between components needs to be added, these are all necessary.