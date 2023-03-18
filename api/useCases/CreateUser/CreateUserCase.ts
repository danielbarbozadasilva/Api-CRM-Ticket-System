import { Client } from '../../entities/Client'
import { IUserRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }
    const userCreate = new Client(data)
    return this.userRepository.save(userCreate)
  }
}
