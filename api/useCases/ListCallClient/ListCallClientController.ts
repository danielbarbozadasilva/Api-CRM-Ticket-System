import { Request, Response } from 'express'
import { ListCallClientUseCase } from './ListCallClientUseCase'

export class ListCallClientController {
  constructor(private listCallClientUseCase: ListCallClientUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const result = await this.listCallClientUseCase.execute({
        id: request.params.id
      })
      response
        .status(200)
        .json({ message: 'calls successfully listed', data: result })
    } catch (error) {
      response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
