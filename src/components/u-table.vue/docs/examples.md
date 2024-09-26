### Basic Usage

``` html
<u-table>
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
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

设置`line="both"`属性，使表格单元格之间由线条隔开。

``` html
<u-table line="both">
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
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

也可以设置为`"horizontal"`，只显示水平线条。

``` html
<u-table line="horizontal">
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
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

添加`striped`属性，使表格具有斑马线条纹样式。

``` html
<u-table striped>
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
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

### 悬浮高亮

添加`hover`属性，使表格行在悬浮时能够高亮显示。

``` html
<u-table hover>
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
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

在`<tr>`上用`color`属性，可以单独给某一行添加颜色。

``` html
<u-table>
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
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

### 组合修饰

表格组件的修饰属性可以组合使用。

``` html
<u-table line="both" striped hover>
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
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
