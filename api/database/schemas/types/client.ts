import { Document } from 'mongoose'

export interface ClientInterface extends Document {
  name: string
  cpf: string
  address: string
  phone: string
  email: string
  birthDate: Date
  hash: string
  salt: string
  refreshJWT: Object
  isVerified: Boolean
}
