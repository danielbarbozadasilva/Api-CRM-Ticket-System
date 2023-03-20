import { Client } from '../../entities/Client'
import { IUserRepository } from '../../repositories/IUsersRepository'
import { IRegisterRequestDTO } from './RegisterDTO'

export class RegisterUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IRegisterRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }
    const userCreate = new Client(data)
    return this.userRepository.save(userCreate)
  }
}
