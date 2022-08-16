
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./peoples-sdk.cjs.production.min.js')
} else {
  module.exports = require('./peoples-sdk.cjs.development.js')
}
