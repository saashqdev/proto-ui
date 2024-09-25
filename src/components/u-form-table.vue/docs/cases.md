### Basic Usage

``` html
<u-form-table>
    <thead>
        <tr>
            <th width="20%">Serial number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-form-table>
```

### Table Lines

Set the `line="both"` attribute to separate table cells by lines.

``` html
<u-form-table line="both">
    <thead>
        <tr>
            <th width="20%">Serial Number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-form-table>
```

Can also be set to "horizontal" to show only horizontal lines.

``` html
<u-form-table line="horizontal">
    <thead>
        <tr>
            <th width="20%">Serial Number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-form-table>
```

### Stripe Display

Add the `striped` property to give the table a zebra striped style.

``` html
<u-form-table striped>
    <thead>
        <tr>
            <th width="20%">Serial Number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-form-table>
```

### Floating Highlight

Added `hover` property to highlight table rows when hovered.

``` html
<u-form-table hover>
    <thead>
        <tr>
            <th width="20%">Serial Number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-form-table>
```

### Combination Modifiers

The table component's modifiers can be used in combination.

``` html
<u-form-table line="both" striped hover>
    <thead>
        <tr>
            <th width="20%">Serial Number</th>
            <th width="20%">Name</th>
            <th>Address</th>
            <th width="20%">Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Homer Simpson</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Marge Simpson</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bart Simpson</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Dave Cork</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-form-table>
```