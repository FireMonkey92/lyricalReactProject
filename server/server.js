const express = require('express');

const models = require('./models');

const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const app = express();

// Replace with your mongoLab URI   firemonkey12345
const MONGO_URI = 'mongodb://tanesh:fire123456@ds237196.mlab.com:37196/lyricaldb'
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
// mongoose.connection
//   .once('openUri', () => console.log('Connected to MongoLab instance.'))
//   .on('error', error => console.log('Error connecting to MongoLab:', error));

// changing the code to connect to mangodb
mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Mango Db Connected')).catch(err => console.log(err))

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;