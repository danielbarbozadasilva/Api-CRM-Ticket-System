import { model, Schema } from 'mongoose'
import { CalledInterface } from './types/called'

const calledSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId
    },
    number: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      maxlength: 100,
      required: true,
      default: ''
    },
    openedDate: {
      type: Date,
      required: true,
      default: Date.now()
    },
    closedDate: {
      type: Date,
      required: false
    },
    status: {
      type: String,
      maxlength: 30,
      required: true,
      default: 'Pendente'
    },
    category: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    evaluation: {
      type: Number,
      required: true
    },
    conversations: [
      {
        sender: {
          type: String,
          maxlength: 50,
          required: true,
          default: ''
        },
        message: {
          type: String,
          maxlength: 1000,
          required: true,
          default: ''
        },
        msgAt: {
          type: Date,
          required: true,
          default: Date.now()
        }
      }
    ]
  },
  { timestamps: true }
)

export default model<CalledInterface>('CalledSchema', calledSchema)
