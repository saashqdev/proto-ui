### Basic Usage

``` html
<u-table>
    <thead>
        <tr>
            <th width="15%">Username</th>
            <th width="15%">Mobile Phone Number</th>
            <th>Address</th>
            <th width="18%">Last Login Time</th>
            <th width="12%">Operation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Homer Simpson</td>
            <td>18612917895</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Marge Simpson</td>
            <td>13727160283</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>18897127809</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Bart Simpson</td>
            <td>18749261214</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Dave Cork</td>
            <td>13579340020</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
    </tbody>
</u-table>
```

### Table Lines

Set the `line="both"` attribute so that table cells are separated by lines.

``` html
<u-table line="both">
    <thead>
        <tr>
            <th width="15%">Username</th>
            <th width="15%">Mobile Phone Number</th>
            <th>Address</th>
            <th width="18%">Last Login Time</th>
            <th width="12%">Operation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Homer Simpson</td>
            <td>18612917895</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Marge Simpson</td>
            <td>13727160283</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>18897127809</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Bart Simpson</td>
            <td>18749261214</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Dave Cork</td>
            <td>13579340020</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
    </tbody>
</u-table>
```

It can also be set to `"horizontal"` to display only horizontal lines.

``` html
<u-table line="horizontal">
    <thead>
        <tr>
            <th width="15%">Username</th>
            <th width="15%">Mobile Phone Number</th>
            <th>Address</th>
            <th width="18%">Last Login Time</th>
            <th width="12%">Operation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Homer Simpson</td>
            <td>18612917895</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Marge Simpson</td>
            <td>13727160283</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>18897127809</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Bart Simpson</td>
            <td>18749261214</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Dave Cork</td>
            <td>13579340020</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
    </tbody>
</u-table>
```

### Stripe Display

Add the `striped` attribute to give the table a zebra stripe style.

``` html
<u-table striped>
    <thead>
        <tr>
            <th width="15%">Username</th>
            <th width="15%">Mobile Phone Number</th>
            <th>Address</th>
            <th width="18%">Last Login Time</th>
            <th width="12%">Operation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Homer Simpson</td>
            <td>18612917895</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Marge Simpson</td>
            <td>13727160283</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>18897127809</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Bart Simpson</td>
            <td>18749261214</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Dave Cork</td>
            <td>13579340020</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
    </tbody>
</u-table>
```

### Floating Highlight

Add the `hover` attribute so that table rows can be highlighted when hovering.

``` html
<u-table hover>
    <thead>
        <tr>
            <th width="15%">Username</th>
            <th width="15%">Mobile Phone Number</th>
            <th>Address</th>
            <th width="18%">Last Login Time</th>
            <th width="12%">Operation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Homer Simpson</td>
            <td>18612917895</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Marge Simpson</td>
            <td>13727160283</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>18897127809</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Bart Simpson</td>
            <td>18749261214</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Dave Cork</td>
            <td>13579340020</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
    </tbody>
</u-table>
```

### Single Row Color

You can add color to a line individually by using the `color` attribute on `<tr>`.

``` html
<u-table>
    <thead>
        <tr>
            <th width="15%">Username</th>
            <th width="15%">Mobile Phone Number</th>
            <th>Address</th>
            <th width="18%">Last Login Time</th>
            <th width="12%">Operation</th>
        </tr>
    </thead>
    <tbody>
        <tr color="light">
            <td>Homer Simpson</td>
            <td>18612917895</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr color="normal">
            <td>Marge Simpson</td>
            <td>13727160283</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr color="dark">
            <td>John Doe</td>
            <td>18897127809</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr color="primary">
            <td>Bart Simpson</td>
            <td>18749261214</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr color="error">
            <td>Dave Cork</td>
            <td>13579340020</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
    </tbody>
</u-table>
```

### Combination Modification

Modification properties of table components can be used in combination.

``` html
<u-table line="both" striped hover>
    <thead>
        <tr>
            <th width="15%">Username</th>
            <th width="15%">Mobile Phone Number</th>
            <th>Address</th>
            <th width="18%">Last Login Time</th>
            <th width="12%">Operation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Homer Simpson</td>
            <td>18612917895</td>
            <td>Kubeworkz, 1931 Norris Avenue, Fort Erie, Ontario</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Marge Simpson</td>
            <td>13727160283</td>
            <td>Skunkhollow Technology Park, 1901 Norris Avenue, Fort Erie, Ontario</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>18897127809</td>
            <td>Camden Science and Technology Park, 29 Barclay Street, Hamilton, Ontario</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Bart Simpson</td>
            <td>18749261214</td>
            <td>Kubeworkz Phase II, Kubeworkz Building, 666 Mockingbird Lane, Fort Erie, Ontario</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
        <tr>
            <td>Dave Cork</td>
            <td>13579340020</td>
            <td>Springfield Technology Park, 29 Camden Street, Toronto, Ontario</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>Details</u-link>&nbsp;<u-link>Settings</u-link></td>
        </tr>
    </tbody>
</u-table>
```
