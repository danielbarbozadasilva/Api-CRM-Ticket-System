import { Request, Response } from 'express'
import { ListAllClientUseCase } from './ListAllClientsUseCase'

export class ListAllClientController {
  constructor(private listAllClientUseCase: ListAllClientUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const result = await this.listAllClientUseCase.execute()
      response
        .status(200)
        .json({ message: 'successfully listed clients', data: result })
    } catch (error) {
      response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
