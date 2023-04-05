import { Request, Response } from 'express'
import { ViewCallUseCase } from './ViewCallUseCase'

export class ViewCallController {
  constructor(private viewCallCallUseCase: ViewCallUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const data = await this.viewCallCallUseCase.execute({
        id: request.params.id
      })

      return response
        .status(200)
        .send({ message: 'Called successfully listed!', data })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
