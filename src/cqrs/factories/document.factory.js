const errors = require('../../utils/errors')

/** business logic for read operations */
class DocumentFactory {
  /** @param {import('mongoose').Model} model */
  constructor(model) {
    this.model = model
  }

  async get(id) {
    const document = await this.model.findById(id).lean()
    if (!document) throw errors.create('user', 'not-found', id)
    return document
  }

  async findByUserId(userId) {
    return (await this.model.find({ userId })) || null

    // if (!user) {
    //   throw errors.create(errors.codes.login.invalid_email, email)
    // }
  }
}

module.exports = DocumentFactory
