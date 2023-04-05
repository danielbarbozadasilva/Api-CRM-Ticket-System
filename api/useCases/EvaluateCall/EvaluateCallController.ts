import { Request, Response } from 'express'
import { EvaluateCallUseCase } from './EvaluateCallUseCase'

export class EvaluateCallController {
  constructor(private evaluateCallUseCase: EvaluateCallUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      await this.evaluateCallUseCase.execute({
        _id: request.params.id,
        evaluation: request.body.evaluation
      })
      return response
        .status(200)
        .send({ message: 'call evaluated successfully' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
