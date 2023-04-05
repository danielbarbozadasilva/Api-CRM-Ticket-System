import { CalledDBRepository } from '../../repositories/implementations/CalledDBRepository'
import { ListCallClientController } from './ListCallClientController'
import { ListCallClientUseCase } from './ListCallClientUseCase'

const mongoCallRepository = new CalledDBRepository()
const listCallClientUseCase = new ListCallClientUseCase(mongoCallRepository)
const listCallClientController = new ListCallClientController(listCallClientUseCase)

export { listCallClientUseCase, listCallClientController }
