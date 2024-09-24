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
