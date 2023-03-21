import { CalledDBRepository } from '../../repositories/implementations/CalledDBRepository'
import { AnswerCallController } from './AnswerCallController'
import { AnswerCallUseCase } from './AnswerCallUseCase'

const mongoCallRepository = new CalledDBRepository()
const answerCallUseCase = new AnswerCallUseCase(mongoCallRepository)
const answerCallController = new AnswerCallController(answerCallUseCase)

export { answerCallUseCase, answerCallController }
