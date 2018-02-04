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
app.post('/pdf', function (req, res, next) {

  var filePath = './server/p.pdf';

  var data = fs.readFileSync(filePath);

  var headers = {
    'Content-type': 'application/octet-stream',
    'Content-Disposition': 'attachment; filename=sample'
  };
  res.writeHead(200, headers);
  res.end(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
