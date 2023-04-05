import { CalledDBRepository } from '../../repositories/implementations/CalledDBRepository'
import { EvaluateCallController } from './EvaluateCallController'
import { EvaluateCallUseCase } from './EvaluateCallUseCase'

const mongoCallRepository = new CalledDBRepository()
const evaluateCallUseCase = new EvaluateCallUseCase(mongoCallRepository)
const evaluateCallController = new EvaluateCallController(evaluateCallUseCase)

export { evaluateCallUseCase, evaluateCallController }
