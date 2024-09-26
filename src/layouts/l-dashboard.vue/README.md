<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# LDashboard 仪表盘布局

常见中后台系统中的顶部栏和左侧栏固定的仪表盘布局。

## Example
滚动区域设置在了主内容区，有最小宽度，可以进行横向滚动。

``` html
<div style="position: relative; z-index: 1; height: 500px; overflow: auto;">
    <l-dashboard demo>
        <u-navbar slot="head">
            <u-logo slot="left">演示</u-logo>
            <u-navbar-item href="/">首页</u-navbar-item>
            <u-navbar-item href="https://kubevue.github.io" target="_blank">kubevue</u-navbar-item>
            <u-navbar-item href="https://github.com/saashqdev/cloud-ui" target="_blank">Components库</u-navbar-item>
            <u-navbar-item href="https://github.com/saashqdev-templates/admin-cloud-fs" target="_blank">GitHub</u-navbar-item>
            <div slot="right">
                <u-navbar-dropdown style="width: 100px; margin-right: 10px;">
                    <div slot="title">user</div>
                    <u-navbar-menu>
                        <u-navbar-menu-item to="/account/info">个人信息</u-navbar-menu-item>
                        <u-navbar-menu-item>安全退出</u-navbar-menu-item>
                    </u-navbar-menu>
                </u-navbar-dropdown>
            </div>
        </u-navbar>
        <u-sidebar slot="side">
            <u-sidebar-item>总览</u-sidebar-item>
            <u-sidebar-group title="列表页">
                <u-sidebar-item>基础列表</u-sidebar-item>
                <u-sidebar-item>搜索列表</u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="表单页">
                <u-sidebar-item>基础表单</u-sidebar-item>
                <u-sidebar-item>步骤表单</u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="个人页">
                <u-sidebar-item>个人信息</u-sidebar-item>
            </u-sidebar-group>
        </u-sidebar>
        <u-linear-layout direction="vertical">
            <u-crumb>
                <u-crumb-item to="/">首页</u-crumb-item>
                <u-crumb-item to="/proto-ui">Prototype Component</u-crumb-item>
                <u-crumb-item disabled>Navigation</u-crumb-item>
                <u-crumb-item to="/proto-ui/u-crumb" current>面包屑</u-crumb-item>
            </u-crumb>
            <!--router-view></router-view-->
            <u-form layout="inline">
                <u-grid-layout>
                    <u-grid-layout-row :repeat="3">
                        <u-grid-layout-column>
                            <u-form-item label="状态">
                                <u-select auto-select>
                                    <u-select-item>认证中</u-select-item>
                                </u-select>
                            </u-form-item>
                        </u-grid-layout-column>
                        <u-grid-layout-column>
                            <u-form-item label="备案类型">
                                <u-select auto-select>
                                    <u-select-item>全部</u-select-item>
                                </u-select>
                            </u-form-item>
                        </u-grid-layout-column>
                        <u-grid-layout-column>
                            <u-form-item label="备案号">
                                <u-input maxlength="63"></u-input>
                            </u-form-item>
                        </u-grid-layout-column>
                    </u-grid-layout-row>
                    <u-grid-layout-row :repeat="3">
                        <u-grid-layout-column>
                            <u-form-item label="用户名">
                                <u-input maxlength="63"></u-input>
                            </u-form-item>
                        </u-grid-layout-column>
                        <u-grid-layout-column>
                            <u-form-item label="单位名称">
                                <u-input maxlength="63"></u-input>
                            </u-form-item>
                        </u-grid-layout-column>
                        <u-grid-layout-column>
                            <u-form-item>
                                <u-button color="primary">查询</u-button>
                            </u-form-item>
                        </u-grid-layout-column>
                    </u-grid-layout-row>
                </u-grid-layout>
            </u-form>
            <u-table-view :data="[
                { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
                { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
                { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
                { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
                { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
                { name: 'Homer Simpson', phone: '18612917895', email: 'hsimpson@gmail.com', address: 'Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario', createdTime: 1464421931000, loginTime: 1527515531000 },
                { name: 'Marge Simpson', phone: '13727160283', email: 'msimpson@gmail.com', address: 'Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario', createdTime: 1520864676000, loginTime: 1552400676000 },
                { name: 'John Doe', phone: '18897127809', email: 'jdoe@gmail.com', address: 'Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario', createdTime: 1494488730000, loginTime: 1558165530000 },
                { name: 'Bart Simpson', phone: '18749261214', email: 'bsimpson@gmail.com', address: 'Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario', createdTime: 1476073921000, loginTime: 1544428081000 },
                { name: 'Dave Cork', phone: '13579340020', email: 'dcork@gmail.com', address: 'Springfield Technology Park, 29 Camden Street, Toronto, Ontario', createdTime: 1468614726000, loginTime: 1531675926000 },
            ]">
                <u-table-view-column title="Username" field="name" width="20%"></u-table-view-column>
                <u-table-view-column title="Mobile Phone Number" field="phone" width="20%"></u-table-view-column>
                <u-table-view-column title="Address" field="address"></u-table-view-column>
                <u-table-view-column title="Last Login Time" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
            </u-table-view>
        </u-linear-layout>
    </l-dashboard>
</div>
```

## API
### Slots

#### (default)

主内容区。

#### head

设置顶部内容。

#### side

设置左侧栏内容。

#### main

重置中间区域内容。包裹在主内容区外。
