import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserCase'

const mongoUserRepository = new UserDBRepository()
const createUserUseCase = new CreateUserUseCase(mongoUserRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
