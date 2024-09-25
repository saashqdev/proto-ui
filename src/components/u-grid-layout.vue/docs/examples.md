### Basic Usage

Define the grid system, use the `repeat` attribute to define the number of raster columns, and use the `span` attribute to set the number of rasters that the columns span.

``` html
<u-grid-layout>
	<u-grid-layout-row :repeat="6">
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="24">
		<u-grid-layout-column :span="2"><u-block>2/24</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="4"><u-block>4/24</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="8"><u-block>8/24</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="10"><u-block>10/24</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="3">
		<u-grid-layout-column :span="1"><u-block>1/3</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2"><u-block>2/3</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### Gap

```html
<u-grid-layout gap="none">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>None</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>None</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>None</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>None</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>None</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>None</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>None</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>None</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout gap="small">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout gap="normal">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>Normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Normal</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>Normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Normal</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout gap="large">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>Large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Large</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>Large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Large</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout gap="small normal">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Small</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### Column Offset

```html
<u-grid-layout>
	<u-grid-layout-row :repeat="12">
		<u-grid-layout-column :span="4"><u-block>4/12</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="4" :offset="4"><u-block>4/12 offset=4</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="12">
		<u-grid-layout-column :span="3" :offset="3"><u-block>3/12 offset=3</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="3" :offset="3"><u-block>3/12 offset=3</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### Column Sort

``` html
<u-grid-layout>
	<u-grid-layout-row :repeat="10">
		<u-grid-layout-column :span="4" :push="6"><u-block>4/10 push=6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="6" :pull="4"><u-block>6/10 pull=4</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="10">
		<u-grid-layout-column :span="2" :push="8"><u-block>2/10 push=8</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="3" :push="3"><u-block>3/10 push=5</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="5" :pull="5"><u-block>5/10 push=5</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### Flex Mode
#### Horizontal Distribution Method

``` html
<u-grid-layout>
	<u-grid-layout-row :repeat="6" type="flex" justify="start">
		<u-grid-layout-column :span="1"><u-block>Start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Start</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" justify="center">
		<u-grid-layout-column :span="1"><u-block>Center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Center</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" justify="end">
		<u-grid-layout-column :span="1"><u-block>End</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>End</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>End</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" justify="space-between">
		<u-grid-layout-column :span="1"><u-block>Space-between</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Space-between</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Space-between</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" justify="space-around">
		<u-grid-layout-column :span="1"><u-block>Space-around</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Space-around</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>Space-around</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

#### Vertical Alignment

``` html
<u-grid-layout gap="large small">
	<u-grid-layout-row :repeat="6" type="flex" alignment="start">
		<u-grid-layout-column :span="1"><u-block>start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">Start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">Start</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" alignment="center">
		<u-grid-layout-column :span="1"><u-block>center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">Center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">Center</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" alignment="end">
		<u-grid-layout-column :span="1"><u-block>end</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">End</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">End</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" alignment="baseline">
		<u-grid-layout-column :span="1"><u-block>baseline</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">Baseline</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">Baseline</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" alignment="stretch">
		<u-grid-layout-column :span="1"><u-block style="height: 100%">stretch</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto" style="height: 100%">stretch</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto" style="height: 100%">stretch</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### Responsive

Referring to the responsive design of [Bootstrap](https://getbootstrap.com), five responsive sizes are preset: `mini`, `small`, `medium`, `large` and `huge`.

``` html
<u-grid-layout>
	<u-grid-layout-row>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```
