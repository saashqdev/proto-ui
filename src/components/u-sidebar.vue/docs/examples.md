### Basic Usage

#### Routing Mode

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
    <u-sidebar-item>Concept</u-sidebar-item>
    <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
</u-sidebar>
```

#### Value Mode

``` html
<u-sidebar value="3" :router="false" style="width: 200px;">
    <u-sidebar-item value="1">Multi-Level Menu</u-sidebar-item>
    <u-sidebar-item value="2">Concept</u-sidebar-item>
    <u-sidebar-item value="3">Components</u-sidebar-item>
</u-sidebar>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-sidebar disabled>
            <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
            <u-sidebar-item>Concept</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-sidebar>
            <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
            <u-sidebar-item disabled>Concept</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
</u-grid-layout>
```

### Separator

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
    <u-sidebar-item>Concept</u-sidebar-item>
    <u-sidebar-item>Configuration</u-sidebar-item>
    <u-sidebar-divider></u-sidebar-divider>
    <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
    <u-sidebar-item to="/libraries">Component Library</u-sidebar-item>
</u-sidebar>
```

### Group

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Default, No Folding Function</p>
            <u-sidebar>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>Single Line Input</u-sidebar-item>
                    <u-sidebar-item>Muli-Line Input</u-sidebar-item>
                    <u-sidebar-item>Select Box</u-sidebar-item>
                    <u-sidebar-item>Form</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Turn On the Folding Function</p>
            <u-sidebar collapsible>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation" expanded disabled>
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form" :collapsible="false">
                    <u-sidebar-item>Single Line Input</u-sidebar-item>
                    <u-sidebar-item>Muli-Line Input</u-sidebar-item>
                    <u-sidebar-item>Select Box</u-sidebar-item>
                    <u-sidebar-item>Form</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Accordian Mode</p>
            <u-sidebar collapsible accordion>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>Single Line Input</u-sidebar-item>
                    <u-sidebar-item>Muli-Line Input</u-sidebar-item>
                    <u-sidebar-item>Select Box</u-sidebar-item>
                    <u-sidebar-item>Form</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Click on the Entire Row can Trigger (default)</p>
            <u-sidebar collapsible expand-trigger="click">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Only Triggered when the Small Arrow is Clicked</p>
            <u-sidebar collapsible expand-trigger="click-expander">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>Link</u-sidebar-item>
                    <u-sidebar-item>Button</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>Navigation Bar</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">Sidebar</u-sidebar-item>
                    <u-sidebar-item>Label</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### Color Extension

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;">
                <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
                <u-sidebar-item>Concept</u-sidebar-item>
                <u-sidebar-item>Configuration</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
                <u-sidebar-item to="/libraries">Component Library</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;" color="inverse">
                <u-sidebar-item>Multi-Level Menu</u-sidebar-item>
                <u-sidebar-item>Concept</u-sidebar-item>
                <u-sidebar-item>Configuration</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/proto-ui">Components</u-sidebar-item>
                <u-sidebar-item to="/libraries">Component Library</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```
