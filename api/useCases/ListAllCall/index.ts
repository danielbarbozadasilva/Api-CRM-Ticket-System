import { CalledDBRepository } from '../../repositories/implementations/CalledDBRepository'
import { ListCallController } from './ListCallController'
import { ListCallUseCase } from './ListCallUseCase'

const mongoCallRepository = new CalledDBRepository()
const listCallUseCase = new ListCallUseCase(mongoCallRepository)
const listCallController = new ListCallController(listCallUseCase)

export { listCallUseCase, listCallController }
