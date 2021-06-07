/** business logic for write operations */
class DocumentRepository {
  /**
   * @param {import('mongoose').Model} model mongoose auth model
   */
  constructor(model) {
    this.model = model
  }

  async createDocument({ url, fileName, userId }) {
    const eventData = {
      eventType: 'DOCUMENT-CREATED',
      payload: {
        url,
        fileName,
        userId
      },
      updatedBy: userId
    }
    return await this.model.create(eventData)
  }
}

module.exports = DocumentRepository
