/**
 * @typedef {Object} AuthToken
 * @property {string} token
 */

/**
 * @typedef {'generateAccessToken'|
 * 'generateRefreshToken'|
 * 'saveToken'|
 * 'deleteToken'
 * } CommandNames
 */

/** auth's commands handler */
class DocumentAggregate {
  /**
   * @param {import('../repositories/document.repository')} repository
   */
  constructor(repository) {
    this.repository = repository
  }

  /**
   * @param {document} document
   */
  async _createDocument(document) {
    return this.repository.createDocument(document)
  }

  /**
   * @param {CommandNames} name the name of command
   * @param {Object} payload command's one or more arguments
   */
  async command(name, payload) {
    switch (name) {
      case 'createDocument':
        return this._createDocument(payload)
      default:
        throw new Error('unknown command: ' + name)
    }
  }
}
module.exports = DocumentAggregate
