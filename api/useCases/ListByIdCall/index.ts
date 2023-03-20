import { CalledDBRepository } from '../../repositories/implementations/CalledDBRepository'
import { ListByIdCallController } from './ListByIdCallController'
import { ListByIdCallUseCase } from './ListByIdCallUseCase'

const mongoCallRepository = new CalledDBRepository()
const listByIdCallUseCase = new ListByIdCallUseCase(mongoCallRepository)
const listByIdCallController = new ListByIdCallController(listByIdCallUseCase)

export { listByIdCallUseCase, listByIdCallController }
