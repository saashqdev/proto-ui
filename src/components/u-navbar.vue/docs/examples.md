### Basic Usage

The following shows some basic features of the navigation bar, such as configuring links, adding dividers, disabling options, etc.

``` html
<u-navbar>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-divider></u-navbar-divider>
    <u-navbar-item>Configuration</u-navbar-item>
    <u-navbar-item href="https://github.com/saashqdev/proto-ui">GitHub</u-navbar-item>
</u-navbar>
```

### Select Control

Use the `router` attribute switch to decide whether the navigation bar selection is directly bound to the route, or whether it is controlled by the `value` attribute.

#### Routing Mode

The default is this mode, that is, the navigation bar selection is directly bound to the route through the `to` attribute, so there is no need to operate additional variables. In this mode, each `<u-navbar-item>` is similar to VueRouter's `<router-link>`.

``` html
<u-navbar>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-item href="https://github.com/saashqdev/proto-ui">GitHub</u-navbar-item>
</u-navbar>
```

#### Value Mode

When the `router` attribute is set to `false`, the navigation bar selection is controlled by the `value` attribute. Similar to the commonly used `<u-select>` operation, `value` can use `v-model` or `.sync` for Two-Way Binding.

``` html
<u-navbar value="Concepts" :router="false">
    <u-navbar-item value="Components">Components</u-navbar-item>
    <u-navbar-item value="Concepts">Concept</u-navbar-item>
    <u-navbar-item value="Directives" disabled>Instructions</u-navbar-item>
    <u-navbar-item value="GitHub">GitHub</u-navbar-item>
</u-navbar>
```

### Layout
#### Left and Right Slots

The content of the navigation bar has three areas: left, middle and right.

Through the two slots `left` and `right`, layout can be quickly carried out.

``` html
<u-navbar>
    <u-logo slot="left"></u-logo>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item>Concept</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-item slot="right" href="https://github.com/saashqdev/proto-ui" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
</u-navbar>
```

#### Alignment

By setting the `alignment` property, you can adjust the alignment of the middle area.

``` html
<u-linear-layout direction="vertical">
    <u-navbar alignment="left">
        <u-logo slot="left"></u-logo>
        <u-navbar-item>Multi-Level Menu</u-navbar-item>
        <u-navbar-item>Concept</u-navbar-item>
        <u-navbar-item to="/proto-ui">Components</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/saashqdev/proto-ui" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
    </u-navbar>
    <u-navbar alignment="center">
        <u-logo slot="left"></u-logo>
        <u-navbar-item>Multi-Level Menu</u-navbar-item>
        <u-navbar-item>Concept</u-navbar-item>
        <u-navbar-item to="/proto-ui">Components</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/saashqdev/proto-ui" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
    </u-navbar>
    <u-navbar alignment="right">
        <u-logo slot="left"></u-logo>
        <u-navbar-item>Multi-Level Menu</u-navbar-item>
        <u-navbar-item>Concept</u-navbar-item>
        <u-navbar-item to="/proto-ui">Components</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/saashqdev/proto-ui" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
    </u-navbar>
</u-linear-layout>
```

### Dropdown Menus and Selections

Use `<u-navbar-menu>` with `<u-navbar-dropdown>` to implement the drop-down menu, and use `<u-navbar-select>` to implement the drop-down selection.

``` html
<u-navbar>
    <u-navbar-item to="/components">Components</u-navbar-item>
    <u-navbar-item disabled>Command</u-navbar-item>
    <u-navbar-dropdown title="Drop-Down Menu">
        <u-navbar-menu>
            <u-navbar-menu-item>Basic</u-navbar-menu-item>
            <u-navbar-menu-item>Layout</u-navbar-menu-item>
            <u-navbar-menu-item>Navigation
                <u-navbar-menu slot="sub">
                    <u-navbar-menu-item>Navbar</u-navbar-menu-item>
                    <u-navbar-menu-item>Sidebar</u-navbar-menu-item>
                    <u-navbar-menu-item>Menu</u-navbar-menu-item>
                </u-navbar-menu>
            </u-navbar-menu-item>
        </u-navbar-menu>
    </u-navbar-dropdown>
    <u-navbar-select>
        <u-navbar-select-item>Please select</u-navbar-select-item>
        <u-navbar-select-item>Chinese</u-navbar-select-item>
        <u-navbar-select-item>English</u-navbar-select-item>
        <u-navbar-select-item>Français</u-navbar-select-item>
        <u-navbar-select-item>Русский</u-navbar-select-item>
    </u-navbar-select>
</u-navbar>
```

### Color Extension

``` html
<u-linear-layout direction="vertical">
    <u-navbar value="3" :router="false">
        <u-navbar-item value="1">Multi-Level Menu</u-navbar-item>
        <u-navbar-item value="2">Concept</u-navbar-item>
        <u-navbar-item value="3">Components</u-navbar-item>
    </u-navbar>
    <u-navbar value="3" :router="false" color="inverse">
        <u-navbar-item value="1">Multi-Level Menu</u-navbar-item>
        <u-navbar-item value="2">Concept</u-navbar-item>
        <u-navbar-item value="3">Components</u-navbar-item>
    </u-navbar>
</u-linear-layout>
```
