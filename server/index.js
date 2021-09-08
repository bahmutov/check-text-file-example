const greeting = () => 'Welcome to Micro!'

// using https://github.com/dotcypress/micro-route
// to route different requests to their own handlers
const dispatch = require('micro-route/dispatch')

const textFile = require('./text-file')

module.exports = dispatch()
  .dispatch('/text-file', 'GET', textFile)
  .otherwise(greeting)
