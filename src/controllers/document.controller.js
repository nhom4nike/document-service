// const errors = require('../utils/errors')
const AwsService = require('../aws/index')

/**
 * controller for home.route
 * @param {import('../cqrs')} cqrs
 */

module.exports = function handler({ document }) {
  return {
    create: async function (req) {
      const { aggregate } = document
      return aggregate.command('createDocument', req.query)
    },
    get: async function (req) {
      const { projection } = document
      const { id } = req.params
      return projection.query('get', id)
    },

    getDocumentOfUser: async function (req) {
      const { projection } = document
      const { UserId } = req.params
      return projection.query('findByUserId', UserId)
    },

    createLinkUpload: async function (req) {
      const { urlSaveObject, urlGetObject } = await AwsService.createLinkUpload(
        req.query
      )
      req.query.url = urlGetObject
      this.create(req)
      return { urlSaveObject, urlGetObject }
    }
  }
}
