/** business logic for write operations */
class DocumentRepository {
  /**
   * @param {import('mongoose').Model} model mongoose auth model
   */
  constructor(model) {
    this.model = model
  }

  async createDocument({ url, fileName, userId }) {
    return await this.model.create({ url, fileName, userId })
  }
}

module.exports = DocumentRepository
