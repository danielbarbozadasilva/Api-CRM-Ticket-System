import { Request, Response } from 'express'
import { CreateCallUseCase } from './CreateCallUseCase'

export class CreateCallController {
  constructor(private createCallUseCase: CreateCallUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      await this.createCallUseCase.execute({
        clientId: request.body.clientId,
        number: request.body.number,
        subject: request.body.subject,
        openedDate: new Date(),
        closedDate: request.body.closedDate,
        status: 'Pendente',
        category: request.body.category,
        image: request.files?.length ? request.files[0].filename : '',
        evaluation: request.body.evaluation,
        conversations: [
          {
            sender: request.body.sender,
            message: request.body.message,
            msgAt: new Date()
          }
        ]
      })

      return response
        .status(201)
        .send({ message: 'Call successfully created!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
