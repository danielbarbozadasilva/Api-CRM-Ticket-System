import { model, Schema } from 'mongoose'
import { ClientInterface } from './types/client'

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true
    },
    address: {
      type: String,
      maxlength: 100
    },
    phone: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      maxlength: 50,
      required: true
    },
    birthDate: {
      type: Date,
      required: true
    },
    hash: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    },
    refreshJWT: {
      token: {
        type: String,
        maxlength: 500,
        default: ''
      },
      addedAt: {
        type: Date,
        required: true,
        default: Date.now()
      }
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
)

export default model<ClientInterface>('ClientSchema', clientSchema)
