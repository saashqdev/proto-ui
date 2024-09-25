<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UCarousel Slideshow

## Example
### Basic Usage

``` html
<u-carousel>
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

### Animation
#### Fade
``` html
<u-carousel animation="fade">
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

### Auto Play and Loop

Use `interval` to set the playback interval.

``` html
<u-carousel :interval="1000">
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

Autoplay can be turned off via `autoplay`.

``` html
<u-carousel :autoplay="false">
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

Loop playback can be turned off through `loop`.

``` html
<u-carousel :autoplay="false" :loop="false">
    <u-carousel-item><img src="../../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

## UCarousel API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync | any | | | Play position |
| autoplay | boolean | | `true` | Whether to play automatically |
| loop | boolean | | `true` | Whether to play in a loop, that is, connect the beginning and the end |
| interval | number | | `4000` | Slide switching time, if the setting value is less than the animation duration, it will switch after the animation is completed |
| direction | string | | `'right'` | Slide show direction |
| animation | string | | | Slide transition animation |

### Slots

#### (default)

Insert `<u-carousel-item>` subcomponent.

### Events

#### @before-select

Triggered before selecting a page

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selected item |
| $event.oldValue | any | Old value |
| $event.itemVM | UCarouselItem | Selected item instance |
| $event.preventDefault | Function | Prevent selection process |
| senderVM | UCarousel | Send event instance |

#### @select

Triggered when a page is selected

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | The value of the selected item |
| $event.oldValue | any | Old value |
| $event.itemVM | UCarouselItem | Selected item instance |
| senderVM | UCarousel | Send event instance |

## UCarouselItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string | | | The title of the item |
| value | any | | | The value of the item |

### Slots

#### (default)

Insert text or HTML.

#### Title

Custom title text.
