<template>
    <div>
        <div :class="$style.side">
            <u-sidebar :class="$style.sidebar">
                <u-sidebar-group title="Specification">
                    <u-sidebar-item to="/components/u-base" disabled>Event Design</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base" disabled>API Design</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Mode">
                    <u-sidebar-item to="/components/u-base" disabled>Parent-Child Mode</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base" disabled>Parent Group Child Mode</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base" disabled>Root Node Mode</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Series">
                    <u-sidebar-item to="/components/u-base" disabled>List Series</u-sidebar-item>
                    <u-sidebar-item to="/components/u-link" disabled>Routing Series</u-sidebar-item>
                    <u-sidebar-item to="/ui-design/form">Form Series</u-sidebar-item>
                    <u-sidebar-item to="/components/u-badge" disabled>Recursive Series</u-sidebar-item>
                    <u-sidebar-item to="/ui-design/popper">Pop-up Layer Series</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag" disabled>Layout Series</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag" disabled>Chart Series</u-sidebar-item>
                    <!-- <u-sidebar-item to="/components/u-label">Value Range Series</u-sidebar-item> -->
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const advanced = !!JSON.parse(localStorage.getItem('advanced'));

        return {
            advanced,
        };
    },
    methods: {
        onCheck($event) {
            localStorage.setItem('advanced', this.advanced);
        },
    },
};
</script>

<style module>
.side {
    position: fixed;
    width: var(--sidebar-width);
    Top: var(--navbar-height);
    Bottom: 0;
    overflow: hidden;
}

.sidebar {
    padding: 36px 0;
    height: 100%;
    overflow: auto;
    /* width: calc(--var(sidebar-width) + 8px); */
}

/* .sidebar > * {
    width: var(--sidebar-width);
} */

.main {
    margin-left: var(--sidebar-width);
    max-width: 1000px;
    padding: 50px;
    padding-top: 30px;
}
</style>
