# Convert JSON

[![Build Status](https://travis-ci.org/DataGarage/convert-json.png?branch=master)](https://travis-ci.org/DataGarage/convert-json)

Auto detect different type of file format and convert it into JSON.

## Support

- csv
- xlsx
- xls
- xml
- tsv

## Install

```
npm install convert-json
```

## Sample

```javascript
var cv_json = require('..');

cv_json({
    // now supporting csv, xls, xlsx, tsv, xml format
    input: __dirname + '/number_format.xls',
    output: null
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  
  }
  );
```

In config object, you have to enter an input path. But If you don't want to output any file you can set to `null`.

#### input buffer or string
if you input with `buffer` or `string`, we convert it with csv-converter

## License

MIT [@chiljung](http://github.com/chilijung)
