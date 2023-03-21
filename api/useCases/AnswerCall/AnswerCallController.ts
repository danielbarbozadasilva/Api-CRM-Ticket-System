import { Request, Response } from 'express'
import { AnswerCallUseCase } from './AnswerCallUseCase'

export class AnswerCallController {
  constructor(private answerCallUseCase: AnswerCallUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      await this.answerCallUseCase.execute({
        _id: request.params.id,
        conversations: {
          sender: request.body.sender,
          message: request.body.message,
          msgAt: new Date()
        }
      })
      return response
        .status(200)
        .send({ message: 'call answered successfully' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
