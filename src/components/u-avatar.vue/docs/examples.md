### Basic Usage

``` html
<u-avatar></u-avatar> Marge Simpson
```

### Size expansion

``` html
<u-linear-layout direction="vertical">
    <div><u-avatar size="mini"></u-avatar> Marge Simpson (mini)</div>
    <div><u-avatar size="small"></u-avatar> Marge Simpson (small)</div>
    <div><u-avatar></u-avatar> Marge Simpson (normal)</div>
    <div><u-avatar size="large"></u-avatar> Marge Simpson (large)</div>
    <div><u-avatar size="huge"></u-avatar> Marge Simpson (big)</div>
</u-linear-layout>
```

### Custom Pictures

``` html
<u-avatar><img src="../assets/music.png"></u-avatar> Music
```

### Used with UBadge

```html
<u-badge :value="3" corner dot>
    <u-avatar></u-avatar>
</u-badge>
<br/><br/>
<u-badge :value="3" corner dot>
    <u-avatar shape="square"></u-avatar>
</u-badge>
<br/><br/>
<u-badge :value="120" :max="99" corner>
    <u-avatar></u-avatar>
</u-badge>
<br/><br/>
<u-badge :value="120" :max="99" corner>
    <u-avatar shape="square"></u-avatar>
</u-badge>
```

### Used with UNavbar

``` html
<u-navbar>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-divider></u-navbar-divider>
    <u-navbar-item>Configuration</u-navbar-item>
    <div slot="right">
        <u-navbar-item>
            <u-avatar></u-avatar> Marge Simpson
        </u-navbar-item>
    </div>
</u-navbar>
```

``` html
<u-navbar>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-divider></u-navbar-divider>
    <u-navbar-item>Configuration</u-navbar-item>
    <u-navbar-dropdown slot="right">
        <span slot="title"><u-avatar></u-avatar> Marge Simpson</span>
        <u-navbar-menu>
            <u-navbar-menu-item>Basic</u-navbar-menu-item>
            <u-navbar-menu-item>Layout</u-navbar-menu-item>
            <u-navbar-menu-item>Navigation</u-navbar-menu-item>
        </u-navbar-menu>
    </u-navbar-dropdown>
</u-navbar>
```

``` html
<u-navbar>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-divider></u-navbar-divider>
    <u-navbar-item>Configuration</u-navbar-item>
    <u-navbar-dropdown slot="right">
        <span slot="title"><u-badge :value="120" :max="99" corner><u-avatar></u-avatar></u-badge> Marge Simpson</span>
        <u-navbar-menu>
            <u-navbar-menu-item>Basic</u-navbar-menu-item>
            <u-navbar-menu-item>Layout</u-navbar-menu-item>
            <u-navbar-menu-item>Navigation</u-navbar-menu-item>
        </u-navbar-menu>
    </u-navbar-dropdown>
</u-navbar>
```
