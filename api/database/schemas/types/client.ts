import { Document } from 'mongoose'

export interface ClientInterface extends Document {
  name: string
  cpf: string
  address: Date
  phone: Date
  email: Date
  birthDate: Boolean
  hash: string
  salt: string
  refreshJWT: Object
  isVerified: Boolean
}
