### Other
#### Read Only and Disabled

``` html
<u-linear-layout direction="vertical">
    <u-navbar readonly>
        <u-navbar-item>Multi-Level Menu</u-navbar-item>
        <u-navbar-item to="/proto-ui">Components</u-navbar-item>
        <u-navbar-dropdown title="Drop-down Menu">
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
    <u-navbar disabled>
        <u-navbar-item>Multi-Level Menu</u-navbar-item>
        <u-navbar-item to="/proto-ui">Components</u-navbar-item>
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
</u-linear-layout>
```
