### Null Value Judgment

#### Required <u-label>blur</u-label>

Required. If it is empty, an error message will be displayed. Empty values   refer to `''`, `undefined`, and `null`. No parameters.

In the case of an empty value, if none of the required rules, `required`, `filled`, or `notEmpty`, are used, the other rules will automatically pass.

``` html
<u-validator label="Username" rules="required">
    <u-input placeholder="Please enter your username"></u-input>
</u-validator>
```

#### Filled <u-label>blur</u-label>

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
<u-validator label="options" rules="string">
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
<u-validator label="Encoding" rules="dataURI">
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
<u-validator label="Mobile" rules="mobile('en-US')">
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

- `locale`: the region. For example, `US`, `CA`, etc.

``` html
<u-validator label="PostalID" rules="postalCode('JP')">
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