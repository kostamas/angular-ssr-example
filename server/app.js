const express = require('express');
const app = express();

const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
const zone = require('zone.js');
const fs = require('fs');

const AppServerModuleNgFactory = require(__dirname + '/dist-server/main.bundle').AppServerModuleNgFactory;

function serverRouteHandler(htmlFileName) {
  const document = fs.readFileSync(__dirname + `/${htmlFileName}`, 'utf8');

  return function (req, res) {
    const url = req.path;
    renderModuleFactory(AppServerModuleNgFactory, {document, url}).then(html => {
      res.set('Cache-Control', 'public', 'max-age=600', 's-maxage=1200');
      res.send(html)
    })
  }
}

app.get('', serverRouteHandler('index.html'));
app.get('/a', serverRouteHandler('a.html'));
app.get('/b', serverRouteHandler('b.html'));

app.listen(3000, function () {
  console.log('listening on port 3000!')
});
