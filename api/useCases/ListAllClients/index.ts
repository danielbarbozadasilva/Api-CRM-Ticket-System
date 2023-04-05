import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { ListAllClientController } from './ListAllClientsController'
import { ListAllClientUseCase } from './ListAllClientsUseCase'

const mongoRepository = new UserDBRepository()
const listAllClientUseCase = new ListAllClientUseCase(mongoRepository)
const listAllClientController = new ListAllClientController(
  listAllClientUseCase
)

export { listAllClientUseCase, listAllClientController }
