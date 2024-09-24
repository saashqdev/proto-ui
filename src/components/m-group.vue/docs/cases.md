
### Group

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Default, No Folding Function</p>
            <m-parent>
                <m-group title="Washing Utensils">
                    <m-child>Towel</m-child>
                    <m-child>Toothbrush</m-child>
                </m-group>
                <m-group title="Cups">
                    <m-child>Dental Cylinder</m-child>
                    <m-child>Water Cup</m-child>
                </m-group>
                <m-group title="Tableware">
                    <m-child>Chopsticks</m-child>
                    <m-child>Bowl</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Turn On the Folding Function</p>
            <m-parent collapsible>
                <m-group title="Washing Utensils">
                    <m-child>Towel</m-child>
                    <m-child>Toothbrush</m-child>
                </m-group>
                <m-group title="Cups" expanded disabled>
                    <m-child>Dental Cylinder</m-child>
                    <m-child>Water Cup</m-child>
                </m-group>
                <m-group title="Tableware" :collapsible="false">
                    <m-child>Chopsticks</m-child>
                    <m-child>Bowl</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Accordian Mode</p>
            <m-parent collapsible accordion value="cup">
                <m-group title="Washing Utensils">
                    <m-child value="towel">Towel</m-child>
                    <m-child value="toothbrush">Toothbrush</m-child>
                </m-group>
                <m-group title="Cups">
                    <m-child value="toothcup">Dental Cylinder</m-child>
                    <m-child value="cup">Water Cup</m-child>
                </m-group>
                <m-group title="Tableware">
                    <m-child value="chopsticks">Chopsticks</m-child>
                    <m-child value="bowl">Bowl</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Click on the Entire Row can Trigger (default)</p>
            <m-parent collapsible expand-trigger="click">
                <m-group title="Washing Utensils">
                    <m-child>Towel</m-child>
                    <m-child>Toothbrush</m-child>
                </m-group>
                <m-group title="Cups">
                    <m-child>Dental Cylinder</m-child>
                    <m-child>Water Cup</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>Trigger Method: Only Triggered when the Small Arrow is Clicked</p>
            <m-parent collapsible expand-trigger="click-expander">
                <m-group title="Washing Utensils">
                    <m-child>Towel</m-child>
                    <m-child>Toothbrush</m-child>
                </m-group>
                <m-group title="Cups">
                    <m-child>Dental Cylinder</m-child>
                    <m-child>Water Cup</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```
