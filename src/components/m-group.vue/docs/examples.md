
### Grouping

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
    </u-grid-layout-row>
</u-grid-layout>
```
