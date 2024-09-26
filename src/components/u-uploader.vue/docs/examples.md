### Basic Usage

``` html
<u-uploader url="/api/upload">
    <u-button>Upload</u-button>
</u-uploader>
```

> Note: When implementing the upload function in IE, you need to set the `Content-Type` of the response header to `text/plain` or `text/html`, not `application/json`, otherwise IE will prompt the user to download The data returned.

### File Type Restrictions

``` html
<u-uploader url="/api/upload" extensions="jpg,gif,png">
    <u-button>Upload</u-button>
</u-uploader>
```

### File Size Limit

``` html
<u-uploader url="/api/upload" max-size="10kB">
    <u-button>Upload</u-button>
</u-uploader>
```

### Disable

``` html
<u-uploader url="/api/upload" disabled>
    <u-button disabled>Upload</u-button>
</u-uploader>
```
