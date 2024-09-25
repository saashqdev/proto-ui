### Basic Usage

Can be combined with Popup or Popper popup menus.

``` html
<u-linear-layout>
    <u-button>
        Popup Menu
        <u-popup>
            <u-menu slot="root">
                <u-menu-item to="/guides/">Guidelines</u-menu-item>
                <u-menu-item to="/api/">API</u-menu-item>
                <u-menu-item to="/components/">Prototype Components</u-menu-item>
                <u-menu-item href="https://github.com/saashqdev">GitHub</u-menu-item>
            </u-menu>
        </u-popup>
    </u-button>
    <u-button>
        Popper Menu
        <m-popper>
            <u-menu value="3" :router="false" style="width: 128px;">
                <u-menu-item to="/guides/">Guidelines</u-menu-item>
                <u-menu-item to="/api/">API</u-menu-item>
                <u-menu-item to="/components/">Prototype Components</u-menu-item>
                <u-menu-item href="https://github.com/saashqdev">GitHub</u-menu-item>
            </u-menu>
        </m-popper>
    </u-button>
</u-linear-layout>
```

### Multi-Level Menu

``` html
<u-linear-layout direction="vertical">
    <u-menu style="width: 200px;">
        <u-menu-item>Guidelines</u-menu-item>
        <u-menu-item>API
            <u-menu slot="sub">
                <u-menu-item to="/api/cli">Command Line Tool (CLI)</u-menu-item>
                <u-menu-item to="/api/config">Configuration</u-menu-item>
            </u-menu>
        </u-menu-item>
        <u-menu-item> Component
            <u-menu slot="sub">
                <u-menu-item>Prototype Component
                    <u-menu slot="sub">
                        <u-menu-item>Basic
                            <u-menu slot="sub">
                                <u-menu-item to="/components/u-link">Link</u-menu-item>
                                <u-menu-item to="/components/u-button">Button</u-menu-item>
                                <u-menu-item to="/components/u-badge">Badge</u-menu-item>
                            </u-menu>
                        </u-menu-item>
                        <u-menu-item>Navigation
                            <u-menu slot="sub">
                                <u-menu-item to="/components/u-navbar">Navigation Bar</u-menu-item>
                                <u-menu-item to="/components/u-sidebar">Sidebar</u-menu-item>
                                <u-menu-item to="/components/u-menu">Menu</u-menu-item>
                            </u-menu>
                        </u-menu-item>
                        <u-menu-item>Popper
                            <u-menu slot="sub">
                                <u-menu-item to="/components/m-popper">Pop-up Layer</u-menu-item>
                                <u-menu-item to="/components/u-tooltip">Tooltip</u-menu-item>
                                <u-menu-item to="/components/u-popup">Popup Box</u-menu-item>
                            </u-menu>
                        </u-menu-item>
                    </u-menu>
                </u-menu-item>
                <u-menu-item to="/ui-design">Component design plan</u-menu-item>
            </u-menu>
        </u-menu-item>
        <u-menu-item target="_blank" href="https://github.com/saashqdev">GitHub</u-menu-item>
    </u-menu>
    <div>
        <u-button>
            Multi-Level Menu
            <u-popup>
                <u-menu slot="root" style="width: 200px;">
                    <u-menu-item>Multi-Level Menu</u-menu-item>
                    <u-menu-item>API
                        <u-menu slot="sub">
                            <u-menu-item to="/api/cli">Command Line Tools (CLI)</u-menu-item>
                            <u-menu-item to="/api/config">Configuration</u-menu-item>
                        </u-menu>
                    </u-menu-item>
                    <u-menu-item>Components
                        <u-menu slot="sub">
                            <u-menu-item>Prototype Component
                                <u-menu slot="sub">
                                    <u-menu-item>Basic
                                        <u-menu slot="sub">
                                            <u-menu-item to="/components/u-link">Link</u-menu-item>
                                            <u-menu-item to="/components/u-button">Button</u-menu-item>
                                            <u-menu-item to="/components/u-badge">Badge</u-menu-item>
                                        </u-menu>
                                    </u-menu-item>
                                    <u-menu-item>Navigation
                                        <u-menu slot="sub">
                                            <u-menu-item to="/components/u-navbar">Navbar</u-menu-item>
                                            <u-menu-item to="/components/u-sidebar">Sidebar</u-menu-item>
                                            <u-menu-item to="/components/u-menu">Menu</u-menu-item>
                                        </u-menu>
                                    </u-menu-item>
                                    <u-menu-item>Popper
                                        <u-menu slot="sub">
                                            <u-menu-item to="/components/m-popper">Popper</u-menu-item>
                                            <u-menu-item to="/components/u-tooltip">Tooltip</u-menu-item>
                                            <u-menu-item to="/components/u-popup">Popup</u-menu-item>
                                        </u-menu>
                                    </u-menu-item>
                                </u-menu>
                            </u-menu-item>
                            <u-menu-item to="/ui-design">Component Design Plan</u-menu-item>
                        </u-menu>
                    </u-menu-item>
                    <u-menu-item target="_blank" href="https://github.com/saashqdev">GitHub</u-menu-item>
                </u-menu>
            </u-popup>
        </u-button>
    </div>
</u-linear-layout>
```

### Disable、Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-menu disabled>
            <u-menu-item>Multi-Level Menu</u-menu-item>
            <u-menu-item>Concept</u-menu-item>
            <u-menu-item to="/proto-ui">Components</u-menu-item>
        </u-menu>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-menu>
            <u-menu-item>Multi-Level Menu</u-menu-item>
            <u-menu-item disabled>Concept</u-menu-item>
            <u-menu-item to="/proto-ui">Components</u-menu-item>
        </u-menu>
    </u-grid-layout-column>
</u-grid-layout>
```

### Separator

``` html
<u-menu style="width: 200px;">
    <u-menu-item>Multi-Level Menu</u-menu-item>
    <u-menu-item>Concept</u-menu-item>
    <u-menu-item>Configuration</u-menu-item>
    <u-menu-divider></u-menu-divider>
    <u-menu-item to="/proto-ui">Components</u-menu-item>
    <u-menu-item to="/libraries">Component Library</u-menu-item>
</u-menu>
```

### Group

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Default, No Folding Function</p>
            <u-menu>
                <u-menu-group title="Basic">
                    <u-menu-item>Link</u-menu-item>
                    <u-menu-item>Button</u-menu-item>
                    <u-menu-item>Label</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Navigation">
                    <u-menu-item>Navigation Bar</u-menu-item>
                    <u-menu-item to="/components/u-menu">Sidebar</u-menu-item>
                    <u-menu-item>Label</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Form">
                    <u-menu-item>Single Line Input</u-menu-item>
                    <u-menu-item>Muli-Line Input</u-menu-item>
                    <u-menu-item>Select Box</u-menu-item>
                    <u-menu-item>Form</u-menu-item>
                </u-menu-group>
            </u-menu>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```
