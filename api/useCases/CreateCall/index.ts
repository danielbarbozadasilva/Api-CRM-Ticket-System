import { CalledDBRepository } from '../../repositories/implementations/CalledDBRepository'
import { CreateCallController } from './CreateCallController'
import { CreateCallUseCase } from './CreateCallUseCase'

const mongoCallRepository = new CalledDBRepository()
const createCallUseCase = new CreateCallUseCase(mongoCallRepository)
const createCallController = new CreateCallController(createCallUseCase)

export { createCallUseCase, createCallController }
