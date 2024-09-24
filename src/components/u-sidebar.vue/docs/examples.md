### Basic Usage

#### 路由模式

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item>指南</u-sidebar-item>
    <u-sidebar-item>概念</u-sidebar-item>
    <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
</u-sidebar>
```

#### value模式

``` html
<u-sidebar value="3" :router="false" style="width: 200px;">
    <u-sidebar-item value="1">指南</u-sidebar-item>
    <u-sidebar-item value="2">概念</u-sidebar-item>
    <u-sidebar-item value="3">组件</u-sidebar-item>
</u-sidebar>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-sidebar disabled>
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item>概念</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-sidebar>
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item disabled>概念</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-item>指南</u-sidebar-item>
    <u-sidebar-item>概念</u-sidebar-item>
    <u-sidebar-item>配置</u-sidebar-item>
    <u-sidebar-divider></u-sidebar-divider>
    <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
    <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
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
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Turn On the Folding Function</p>
            <u-sidebar collapsible>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation" expanded disabled>
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form" :collapsible="false">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Accordian Mode</p>
            <u-sidebar collapsible accordion>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Click on the Entire Row can Trigger (default)</p>
            <u-sidebar collapsible expand-trigger="click">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Only Triggered when the Small Arrow is Clicked</p>
            <u-sidebar collapsible expand-trigger="click-expander">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item>导航栏</u-sidebar-item>
                    <u-sidebar-item to="/proto-ui/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item>标签页</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 颜色扩展

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;">
                <u-sidebar-item>指南</u-sidebar-item>
                <u-sidebar-item>概念</u-sidebar-item>
                <u-sidebar-item>配置</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
                <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <u-sidebar style="width: 200px;" color="inverse">
                <u-sidebar-item>指南</u-sidebar-item>
                <u-sidebar-item>概念</u-sidebar-item>
                <u-sidebar-item>配置</u-sidebar-item>
                <u-sidebar-divider></u-sidebar-divider>
                <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
                <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```
