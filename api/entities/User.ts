export class User {
  public _id?: string
  public name: string
  public cpf: string
  public address: string
  public phone: string
  public email: string
  public permission?: string
  public birthDate: Date | string
  public hash?: string
  public salt?: string
  public refreshJWT?: Object
  public isVerified?: Boolean

  constructor(props: User) {
    Object.assign(this, props)
  }
}
