
/**
 * @typedef {'get' |
 * 'findByEmail'
 * } CommandNames
 */

/** user's query handler */
class DocumentProjection {
  /**
   * @param {import('../factories/document.factory')} factory
   */
  constructor(factory) {
    this.factory = factory
  }

  /**
   * @param {GetUserQuery} query
   */
  async _get(id) {
    return this.factory.get(id)
  }

  async _findByUserId(userId) {
    return this.factory.findByUserId(userId)
  }

  /**
   * @param {CommandNames} name the name of query command
   * @param {Object} query additional conditions for the query
   */
  async query(name, query) {
    switch (name) {
      case 'get':
        return this._get(query)
      case 'findByUserId':
        return this._findByUserId(query)
      default:
        throw new Error('unknown command: ' + name)
    }
  }
}

module.exports = DocumentProjection
