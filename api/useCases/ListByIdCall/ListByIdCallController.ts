import { Request, Response } from 'express'
import { ListByIdCallUseCase } from './ListByIdCallUseCase'

export class ListByIdCallController {
  constructor(private listByIdCallUseCase: ListByIdCallUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const data = await this.listByIdCallUseCase.execute({
        id: request.params.id
      })

      return response
        .status(201)
        .send({ message: 'Called successfully listed!', data })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
