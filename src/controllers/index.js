const DocumentModel = require('../database/document.model')(global.mongoose)
const CQRS = require('../cqrs')

const cqrs = new CQRS({ document: DocumentModel })

module.exports = {
  document: require('./document.controller')(cqrs)
}
