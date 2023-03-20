export interface IRegisterRequestDTO {
  id?: string
  name: string
  cpf: string
  address: string
  phone: string
  email: string
  birthDate: string | Date
  salt?: string
  hash?: string
  refreshJWT?: Object
  isVerified?: boolean
}
