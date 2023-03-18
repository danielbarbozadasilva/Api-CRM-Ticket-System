export interface ICreateUserRequestDTO {
  id?: string
  name: string
  cpf: string
  address: string
  phone: string
  email: string
  birthDate: Date
  salt: string
  hash: string
  refreshJWT: Object
  isVerified: boolean
}
