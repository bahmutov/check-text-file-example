const greeting = () => 'Welcome to Micro!'

// using https://github.com/dotcypress/micro-route
// to route different requests to their own handlers
const dispatch = require('micro-route/dispatch')

const textFile = require('./text-file')
const markdownFile = require('./markdown-file')

module.exports = dispatch()
  .dispatch('/text-file', 'GET', textFile)
  .dispatch('/markdown-file', 'GET', markdownFile)
  .otherwise(greeting)
