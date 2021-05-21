const { DocumentAggregate } = require('../cqrs/aggregates')
const { DocumentFactory } = require('../cqrs/factories')
const { DocumentProjection } = require('../cqrs/projections')
const { DocumentRepository } = require('../cqrs/repositories')

class CQRS {
  /**
   * @typedef {import('mongoose').Model} Model
   * @param {Object} models mongoose's models
   * @param {Model} models.document
   */
  constructor({ document }) {
    this.document = {
      projection: new DocumentProjection(new DocumentFactory(document)),
      aggregate: new DocumentAggregate(new DocumentRepository(document))
    }
  }
}
module.exports = CQRS
