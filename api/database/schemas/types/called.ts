import { Document } from 'mongoose'

export interface CalledInterface extends Document {
  clientId: string
  number: string
  subject: string
  openedDate: Date
  closedDate: Date
  status: string
  category: string
  image: string
  evaluation: number
  conversations: Array<Object>
}
