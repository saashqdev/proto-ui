<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# UTabs Tab
s
**UI Components**, **Routing Links**, **Block-Level Display**

## Example
### Basic usage

``` html
<u-tabs>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style">Style Content</u-tab>
    <u-tab title="Logic">Logical Content</u-tab>
</u-tabs>
```

### Value

``` html
<u-tabs value="B">
    <u-tab title="Template" value="A">Template Content</u-tab>
    <u-tab title="Style" value="B">Style Content</u-tab>
    <u-tab title="Logic" value="C">Logical Content</u-tab>
</u-tabs>
```

### Read-only and Disabled

``` html
<u-tabs readonly>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style">Style Content</u-tab>
    <u-tab title="Logic">Logical Content</u-tab>
</u-tabs>
<u-tabs disabled>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style">Style Content</u-tab>
    <u-tab title="Logic">Logical Content</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style" disabled>Style Content</u-tab>
    <u-tab title="Logic">Logical Content</u-tab>
</u-tabs>
```

### Can be Closed

``` html
<u-tabs closable>
    <u-tab title="Template">Template Content</u-tab>
    <u-tab title="Style">Style Content</u-tab>
    <u-tab title="Logic">Logical Content</u-tab>
    <u-tab title="Document">Document Contents</u-tab>
    <u-tab title="Resource">Resource Content</u-tab>
</u-tabs>
```

### Routing

``` html
<u-tabs router>
    <u-tab title="Button" to="/components/u-button"></u-tab>
    <u-tab title="Input" to="/components/u-input"></u-tab>
    <u-tab title="Tabs" to="/components/u-tabs"></u-tab>
</u-tabs>
```

### Slot Expansion

- You can use the `extra` slot on `<u-tabs>` to add extra Content on the right;
- You can use the `title` slot on `<u-tab>` to customize the title of the tab.

<p></p>

``` html
<u-tabs value="1">
    <u-tab value="0">
        <span slot="title">Template <u-label>1</u-label></span>
        Template Contents
    </u-tab>
    <u-tab value="1">
        <span slot="title">Style <u-label>6</u-label></span>
        Style Content
    </u-tab>
    <u-tab value="2">
        <span slot="title">Logic <u-label>3</u-label></span>
        Logical Content
    </u-tab>
    <u-checkbox slot="extra">Select All</u-checkbox>
</u-tabs>
```

## UTabs API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any | | | The value of the selected tab |
| readonly | boolean | | `false` | Read-only |
| disabled | boolean | | `false` | Disabled |
| closable | boolean | | `false` | Can be closed |
| router | boolean | | `false` | Whether to control which tab is selected based on vue-router |

### Slots

#### (default)

Inserts a `<u-tab>` subcomponent.

#### Extra

Additional components can be added to the right side of the tab.

### Events

#### @before-select

Triggered before selecting a page

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selected tab |
| $event.oldValue | any | Old value |
| $event.itemVM | UTab | Selected tab instance |
| $event.oldVM | UTab | Old selected tab instance |
| $event.preventDefault | Function | Prevent the selection process |
| senderVM | UTabs | SendEventInstance |

#### @select

Triggered when a page is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selected tab |
| $event.oldValue | any | Old value |
| $event.itemVM | UTab | Selected tab instance |
| $event.oldVM | UTab | Old selected tab instance |
| senderVM | UTabs | SendEventInstance |

#### @before-close

Triggered before closing a page

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the tab to be closed |
| $event.oldValue | any | Old value |
| $event.itemVM | UTab | The instance of the tab to be closed |
| $event.preventDefault | Function | Prevent the shutdown process |
| senderVM | UTabs | SendEventInstance |

#### @close

Triggered when a page is closed

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the closed tab |
| $event.oldValue | any | Old value |
| $event.itemVM | UTabs | Closed tab instance |
| $event.preventDefault | Function | Prevent the process of automatically selecting a page after closing |
| senderVM | UTabs | SendEventInstance |

## UTab API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | Tab title |
| value | any | | | Value of the tab |
| disabled | boolean | | `false` | Whether to disable this tab |
| href | string | | | Link address |
| target | string | | | Open method |
| to | string, Location | | | Requires vue-router, same as `to` property of `<router-link>`. Can be a string or an object describing the target location. |
| replace | boolean | | `false` | Requires vue-router, same as `replace` property of `<router-link>`. If `true`, when clicked, `router.replace()` will be called instead of `router.push()`, so no `history` record will be left after navigation. |
| exact | boolean | | `false` | Requires vue-router, same as `exact` property of `<router-link>`. Highlights only when it is exactly the same as the route. |

### Slots

#### (default)

Insert text or HTML.

#### Title

Customize the title text.