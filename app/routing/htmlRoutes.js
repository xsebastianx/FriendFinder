console.log('HTML Route Connected Successfully');

var path = require('path');

function htmlRoutes(app) {
  app.get('/survey.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}

module.exports = htmlRoutes;