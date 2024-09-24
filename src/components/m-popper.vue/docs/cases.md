### Popper

``` html
<u-button>Click
    <m-popper>
        <a href="/" target="_blank">Popper</a>
    </m-popper>
</u-button>
<u-button><a href="/" target="_blank">ABC</a></u-button>
<u-button><div><a href="/" target="_blank">ABC</a></div></u-button>
<a><div><a href="/" target="_blank">ABC</a></div></a>
```

### Follow the Mouse Test

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            Click
            <m-popper trigger="click" placement="top-start" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Top
            <m-popper trigger="double-click" placement="top-start" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            Right-Click
            <m-popper trigger="right-click" placement="top-start" follow-cursor>
                <u-block>Popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```
