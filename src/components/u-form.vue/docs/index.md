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

#### Complex Dynamic Verification Component

Such as: `<u-form-table-view>` and `<u-dynamic-cards>`