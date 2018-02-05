const express = require('express');
const fs = require('fs');
const app = express();


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {

  res.send('Hello World!')
});
app.get('/pdf', function (req, res, next) {

  let filePath = './server/11.pdf';

  let data = fs.readFileSync(filePath);

  let base64Data = new Buffer(data).toString('base64');

  res.end(base64Data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

function b64toBlob(b64Data, contentType) {
  contentType = contentType || '';
  var sliceSize = 512;
  b64Data = b64Data.replace(/^[^,]+,/, '');
  b64Data = b64Data.replace(/\s/g, '');
  let byteCharacters = window.atob(b64Data);
  let byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    let slice = byteCharacters.slice(offset, offset + sliceSize);

    let byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    let byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  let blob = new Blob(byteArrays, {type: contentType});
  return blob;
}
