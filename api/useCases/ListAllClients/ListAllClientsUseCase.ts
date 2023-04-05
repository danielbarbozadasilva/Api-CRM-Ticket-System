import { IUserRepository } from '../../repositories/IUsersRepository'

export class ListAllClientUseCase {
  constructor(private iUserRepository: IUserRepository) {}

  async execute() {
    return this.iUserRepository.listAllClient()
  }
}
