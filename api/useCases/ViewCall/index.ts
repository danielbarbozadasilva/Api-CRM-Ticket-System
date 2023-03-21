import { CalledDBRepository } from '../../repositories/implementations/CalledDBRepository'
import { ViewCallController } from './ViewCallController'
import { ViewCallUseCase } from './ViewCallUseCase'

const mongoCallRepository = new CalledDBRepository()
const viewCallUseCase = new ViewCallUseCase(mongoCallRepository)
const viewCallController = new ViewCallController(viewCallUseCase)

export { viewCallUseCase, viewCallController }
