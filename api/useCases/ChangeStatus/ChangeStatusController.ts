import { Request, Response } from 'express'
import { ChangeStatusUseCase } from './ChangeStatusUseCase'

export class ChangeStatusController {
  constructor(private changeStatusUseCase: ChangeStatusUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      await this.changeStatusUseCase.execute({
        _id: request.params.id,
        status: request.body.status
      })
      return response
        .status(200)
        .send({ message: 'Successfully changed status' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
