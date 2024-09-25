### Basic Usage

``` html
<u-list-view>
    <u-list-view-item>Water Cup</u-list-view-item>
    <u-list-view-item>Nut</u-list-view-item>
    <u-list-view-item>Towel</u-list-view-item>
    <u-list-view-item>Sofa</u-list-view-item>
</u-list-view>
```

### Option Value

``` html
<u-list-view value="towel">
    <u-list-view-item value="cup">Water Cup</u-list-view-item>
    <u-list-view-item value="nut">Nut</u-list-view-item>
    <u-list-view-item value="towel">Towel</u-list-view-item>
    <u-list-view-item value="sofa">Sofa</u-list-view-item>
</u-list-view>
```

### Read Only, Disable, Disable an Item

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel" readonly>
            <u-list-view-item value="cup">Water Cup</u-list-view-item>
            <u-list-view-item value="nut">Nut</u-list-view-item>
            <u-list-view-item value="towel">Towel</u-list-view-item>
            <u-list-view-item value="sofa">Sofa</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel" disabled>
            <u-list-view-item value="cup">Water Cup</u-list-view-item>
            <u-list-view-item value="nut">Nut</u-list-view-item>
            <u-list-view-item value="towel">Towel</u-list-view-item>
            <u-list-view-item value="sofa">Sofa</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel">
            <u-list-view-item value="cup">Water Cup</u-list-view-item>
            <u-list-view-item value="nut" disabled>Nut</u-list-view-item>
            <u-list-view-item value="towel">Towel</u-list-view-item>
            <u-list-view-item value="sofa">Sofa</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
```

### Separator

``` html
<u-list-view value="nut">
    <u-list-view-item value="cup">Water Cup</u-list-view-item>
    <u-list-view-item value="toothbrush">Toothbrush</u-list-view-item>
    <u-list-view-divider></u-list-view-divider>
    <u-list-view-item value="nut">Nut</u-list-view-item>
    <u-list-view-item value="towel">Towel</u-list-view-item>
    <u-list-view-item value="sofa">Sofa</u-list-view-item>
</u-list-view>
```

### Group

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Default, No Folding Function</p>
            <u-list-view>
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item>Towel</u-list-view-item>
                    <u-list-view-item>Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups">
                    <u-list-view-item>Dental Cylinder</u-list-view-item>
                    <u-list-view-item>Water Cup</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Tableware">
                    <u-list-view-item>Chopsticks</u-list-view-item>
                    <u-list-view-item>Bowl</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Turn On the Folding Function</p>
            <u-list-view collapsible>
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item>Towel</u-list-view-item>
                    <u-list-view-item>Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups" expanded disabled>
                    <u-list-view-item>Dental Cylinder</u-list-view-item>
                    <u-list-view-item>Water Cup</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Tableware" :collapsible="false">
                    <u-list-view-item>Chopsticks</u-list-view-item>
                    <u-list-view-item>Bowl</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Accordian Mode</p>
            <u-list-view collapsible accordion value="cup">
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item value="towel">Towel</u-list-view-item>
                    <u-list-view-item value="toothbrush">Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups">
                    <u-list-view-item value="toothcup">Dental Cylinder</u-list-view-item>
                    <u-list-view-item value="cup">Water Cup</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Tableware">
                    <u-list-view-item value="chopsticks">Chopsticks</u-list-view-item>
                    <u-list-view-item value="bowl">Bowl</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Click on the Entire Row can Trigger (default)</p>
            <u-list-view collapsible expand-trigger="click">
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item>Towel</u-list-view-item>
                    <u-list-view-item>Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups">
                    <u-list-view-item>Dental Cylinder</u-list-view-item>
                    <u-list-view-item>Water Cup</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Only Triggered when the Small Arrow is Clicked</p>
            <u-list-view collapsible expand-trigger="click-expander">
                <u-list-view-group title="Washing Utensils">
                    <u-list-view-item>Towel</u-list-view-item>
                    <u-list-view-item>Toothbrush</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="Cups">
                    <u-list-view-item>Dental Cylinder</u-list-view-item>
                    <u-list-view-item>Water Cup</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### Cancel

Try clicking twice on the same option.

``` html
<u-list-view value="towel" cancelable>
    <u-list-view-item value="cup">Water Cup</u-list-view-item>
    <u-list-view-item value="nut">Nut</u-list-view-item>
    <u-list-view-item value="towel">Towel</u-list-view-item>
    <u-list-view-item value="sofa">Sofa</u-list-view-item>
</u-list-view>
```

### Multiple Choice

Two-Way Binding can be performed using `v-model` or `:value.sync`.

``` vue
<template>
<u-list-view multiple v-model="values">
    <u-list-view-item value="cup">Water Cup</u-list-view-item>
    <u-list-view-item value="nut">Nut</u-list-view-item>
    <u-list-view-item value="towel">Towel</u-list-view-item>
    <u-list-view-item value="sofa">Sofa</u-list-view-item>
</u-list-view>
</template>

<script>
export default {
    data() {
        return { values: ['nut', 'towel'] };
    },
};
</script>
```
