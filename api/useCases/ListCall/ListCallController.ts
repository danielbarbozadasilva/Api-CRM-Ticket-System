import { Request, Response } from 'express'
import { ListCallUseCase } from './ListCallUseCase'

export class ListCallController {
  constructor(private listCallUseCase: ListCallUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const data = await this.listCallUseCase.execute()

      return response
        .status(201)
        .send({ message: 'Call successfully listed!', data })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
