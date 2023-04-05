import { Document } from 'mongoose'

export interface UserInterface extends Document {
  name: string
  cpf: string
  address: string
  phone: string
  email: string
  permission: string
  birthDate: Date
  hash: string
  salt: string
  refreshJWT: Object
  isVerified: Boolean
}
