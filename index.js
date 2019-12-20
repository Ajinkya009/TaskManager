const config = require('./config/keys.js');
const mongoose = require('mongoose');
const express = require('express');
const helmet  = require('helmet');
const path = require('path');

if(process.env.NODE_ENV!='ci'){
  // Connect to database
  mongoose.connect(config.mongoURI,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});

  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on('connected', async() => {
    console.log('Mongoose default connection open to ' + config.mongoURI);
  });

  // If the connection throws an error
  mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });

  const gracefulExit = function() {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection with DB :' + config.mongoURI + ' is disconnected through app termination');
      process.exit(0);
    });
  }

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
}

// Setup server
const app = express();

// use helmet to protect app from some well known web vulnerabilities
app.use(helmet());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
if(process.env.NODE_ENV!='ci'){
  const server = require('http').createServer(app);
  // Start server
  server.listen(process.env.PORT || config.port, process.env.IP || config.ip, function () {
    console.log('Express server listening on %d, in %s mode', process.env.PORT || config.port, app.get('env'));
    //console.log(mongoose.connection.readyState);
  });
}
require('./config/setup')(app);
require('./routes/index')(app);

// Expose app
exports = module.exports = app;