# v-ellipsis-title Text Omission Prompt

Sometimes text takes the form of ellipses that are too long. However, the omitted text is often not visible to users and requires a title prompt.

This command will automatically determine the status of ellipsis and omit text.

## Example

### Basic Usage

``` html
<u-text display="block" wrap="ellipsis" v-ellipsis-title style="width: 120px; background: #f2f3f8;">Heaven will entrust a great responsibility to this people, and they must first work hard and work hard for them. The muscles and bones are starved of their body skin, and their body is depleted, and their behavior is disturbed by their actions. Therefore, if they move their minds and forbearance, they will gain what they cannot. </u-text>
```

### Manually Specify Text

``` html
<u-text display="block" wrap="ellipsis" v-ellipsis-title="'From "Born in Sorrow, Die in Peace" by Mencius during the Warring States Period'" style="width: 120px; background: #f2f3f8;" >Heaven is about to entrust this person with a great responsibility, but he must first strain his mind and will, strain his muscles and bones, starve his body and skin, deplete his body, and mess up his actions. Therefore, he must stir up his heart and forbearance and gain what he cannot. </u-text>
```

## API

### Usage

| Params | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | String | | Defaults to the innerText of the element, you can also specify the text manually |
