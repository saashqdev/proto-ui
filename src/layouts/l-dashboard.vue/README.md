<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LDashboard Dashboard Layout

The top bar and left bar are fixed dashboard layouts in common mid- and back-end systems.

## Example
The scrolling area is set in the main content area, has a minimum width, and can be scrolled horizontally.

``` html
<div style="position: relative; z-index: 1; height: 500px; overflow: auto;">
    <l-dashboard demo>
        <u-navbar slot="head">
            <u-logo slot="left">Demo</u-logo>
            <u-navbar-item href="/">Homepage</u-navbar-item>
            <u-navbar-item href="https://kubevue.github.io" target="_blank">kubevue</u-navbar-item>
            <u-navbar-item href="https://github.com/saashqdev/cloud-ui" target="_blank">Components Library</u-navbar-item>
            <u-navbar-item href="https://github.com/saashqdev-templates/admin-cloud-fs" target="_blank">GitHub</u-navbar-item>
            <div slot="right">
                <u-navbar-dropdown style="width: 100px; margin-right: 10px;">
                    <div slot="title">User</div>
                    <u-navbar-menu>
                        <u-navbar-menu-item to="/account/info">Personal Information</u-navbar-menu-item>
                        <u-navbar-menu-item>Logout</u-navbar-menu-item>
                    </u-navbar-menu>
                </u-navbar-dropdown>
            </div>
        </u-navbar>
        <u-sidebar slot="side">
            <u-sidebar-item>Overview</u-sidebar-item>
            <u-sidebar-group title="List Page">
                <u-sidebar-item>Basic List</u-sidebar-item>
                <u-sidebar-item>Search List</u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="Form Page">
                <u-sidebar-item>Basic Form</u-sidebar-item>
                <u-sidebar-item>Step Form</u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="Personal Page">
                <u-sidebar-item>Personal Information</u-sidebar-item>
            </u-sidebar-group>
        </u-sidebar>
        <u-linear-layout direction="vertical">
            <u-crumb>
                <u-crumb-item to="/">Home</u-crumb-item>
                <u-crumb-item to="/proto-ui">Prototype Component</u-crumb-item>
                <u-crumb-item disabled>Navigation</u-crumb-item>
                <u-crumb-item to="/proto-ui/u-crumb" current>Breadcrumbs</u-crumb-item>
            </u-crumb>
            <!--router-view></router-view-->
            <u-form layout="inline">
                <u-grid-layout>
                    <u-grid-layout-row :repeat="3">
                        <u-grid-layout-column>
                            <u-form-item label="Status">
                                <u-select auto-select>
                                    <u-select-item>Authenticating</u-select-item>
                                </u-select>
                            </u-form-item>
                        </u-grid-layout-column>
                        <u-grid-layout-column>
                            <u-form-item label="Record Type">
                                <u-select auto-select>
                                    <u-select-item>All</u-select-item>
                                </u-select>
                            </u-form-item>
                        </u-grid-layout-column>
                        <u-grid-layout-column>
                            <u-form-item label="Registration Number">
                                <u-input maxlength="63"></u-input>
                            </u-form-item>
                        </u-grid-layout-column>
                    </u-grid-layout-row>
                    <u-grid-layout-row :repeat="3">
                        <u-grid-layout-column>
                            <u-form-item label="Username">
                                <u-input maxlength="63"></u-input>
                            </u-form-item>
                        </u-grid-layout-column>
                        <u-grid-layout-column>
                            <u-form-item label="Organization Name">
                                <u-input maxlength="63"></u-input>
                            </u-form-item>
                        </u-grid-layout-column>
                        <u-grid-layout-column>
                            <u-form-item>
                                <u-button color="primary">Query</u-button>
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

Main content area.

#### Head

Set top content.

#### Side

Set the left column content.

#### Main

Reset the middle area content. Wrapped outside the main content area.
