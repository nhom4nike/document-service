const DocumentModel = require('../database/document.model')(global.mongoose)
const EventModel = require('../database/event.model')(global.mongoose)
const CQRS = require('../cqrs')
const { Denormalizer } = require('../woker')

const cqrs = new CQRS({ document: DocumentModel, event: EventModel })
const denormalizer = new Denormalizer({ documentModel: DocumentModel, eventModel: EventModel })

denormalizer.run()

module.exports = {
  document: require('./document.controller')(cqrs),
}
