var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var playlists = [
        { num:'1', name: 'lofi playlist'},
        { num:'2', name: 'romantic era classical'},
        { num:'3', name: 'contemporary classical'}
      ];
      var tagline = "functionality to be determined";
    
      res.render('pages/index', {
        playlists: playlists,
        tagline: tagline
      });
});

// producer page
app.get('/producer', function(req, res) {
  res.render('pages/producer');
});

// listener page
app.get('/listener', function(req, res) {
    res.render('pages/listener');
  });

app.listen(8080);
console.log('Server is listening on port 8080');