### Basic Usage

``` html
<u-radios value="Towel">
    <u-radio label="Water Cup">Water Cup</u-radio>
    <u-radio label="Nut">Nut</u-radio>
    <u-radio label="Towel">Towel</u-radio>
    <u-radio label="Sofa">Sofa</u-radio>
</u-radios>
```

### Read Only, Disable, Disable an Item

``` html
<u-linear-layout direction="vertical">
    <u-radios value="Towel" readonly>
        <u-radio label="Water Cup">Water Cup</u-radio>
        <u-radio label="Nut">Nut</u-radio>
        <u-radio label="Towel">Towel</u-radio>
        <u-radio label="Sofa">Sofa</u-radio>
    </u-radios>
    <u-radios value="Towel" disabled>
        <u-radio label="Water Cup">Water Cup</u-radio>
        <u-radio label="Nut">Nut</u-radio>
        <u-radio label="Towel">Towel</u-radio>
        <u-radio label="Sofa">Sofa</u-radio>
    </u-radios>
    <u-radios value="Nut">
        <u-radio label="Water Cup">Water Cup</u-radio>
        <u-radio label="Nut">Nut</u-radio>
        <u-radio label="Towel" disabled>Towel</u-radio>
        <u-radio label="Sofa" disabled>Sofa</u-radio>
    </u-radios>
</u-linear-layout>
```
