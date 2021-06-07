const { Schema, Types } = require('mongoose')

/**
 * @param {import('mongoose').Connection} mongoose
 */

const eventSchema = new Schema(
    {
      eventType: {
        type: Schema.Types.String,
        required: true,
      },
      payload: {
        type: Schema.Types.Mixed,
        required: true,
      },
      sourceId: {
        type: Schema.Types.ObjectId,
        default: Types.ObjectId,
      },
      version: {
          type: Number,
      default: 1
      },
      updatedBy: {
          type: String,
          required: true
      }
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    }
  )
eventSchema.index({version: 1, sourceId: 1 }, { unique: true})

module.exports = function (mongoose) {
  return mongoose.model(
    'Event',
    eventSchema)
}
