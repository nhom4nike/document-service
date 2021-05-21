const { Schema } = require('mongoose')

/**
 * @param {import('mongoose').Connection} mongoose
 */
module.exports = function (mongoose) {
  return mongoose.model(
    'documentService',
    new Schema(
      {
        url: {
          type: Schema.Types.String,
          required: true,
          select: true
        },
        fileName: {
          type: Schema.Types.String,
          required: true,
          select: true
        },
        userId: {
          type: Schema.Types.ObjectId,
          required: true,
          select: true
        }
      },
      {
        timestamps: {
          createdAt: 'created_at',
          updatedAt: 'updated_at'
        }
      }
    )
  )
}
