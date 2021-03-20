var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
var url = 'mongo?retryWrites=true&w=majority';

var Posts = require('./routes/Posts')
app.use('/posts', Posts);

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//sudo npm -s install express; sudo npm -s install body-parser; sudo npm install cors; sudo npm install mongodb; sudo npm install mongoose;

mongoose
     .connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => app.listen(2000, console.log('Connected to database....'), console.log('Server started at porst 2000...')))
     .catch(err => console.log(err));
