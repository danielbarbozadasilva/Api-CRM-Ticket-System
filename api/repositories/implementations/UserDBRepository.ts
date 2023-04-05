import { User } from '../../entities/User'
import { IUserRepository } from '../IUsersRepository'
import clientSchema from '../../database/schemas/schemas.user'

export class UserDBRepository implements IUserRepository {
  async save(dataUser: User): Promise<boolean> {
    const resultDB = await clientSchema.create({
      name: dataUser.name,
      cpf: dataUser.cpf,
      address: dataUser.address,
      phone: dataUser.phone,
      email: dataUser.email,
      permission: 'client',
      birthDate: dataUser.birthDate,
      hash: dataUser.hash,
      salt: dataUser.salt,
      refreshJWT: dataUser.refreshJWT,
      isVerified: dataUser.isVerified
    })

    return !!resultDB
  }

  async findByEmail(email: string): Promise<boolean> {
    const result = await clientSchema.find({ email })
    return !!result.length
  }
}
