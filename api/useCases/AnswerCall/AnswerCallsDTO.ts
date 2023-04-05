export interface ICallRequestDTO {
  _id?: string
  conversations: {
    sender: string
    message: string
    msgAt?: Date
  }
}
