import { Request, Response } from 'express'
import Cryptography from '../../utils/cryptography'
import { CreateUserUseCase } from './CreateUserCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const salt = Cryptography.createSalt()

      await this.createUserUseCase.execute({
        name: request.body.name,
        cpf: request.body.cpf,
        address: request.body.address,
        phone: request.body.phone,
        email: request.body.email,
        birthDate: request.body.birthDate,
        hash: Cryptography.createHash(request.body.password, salt),
        salt: salt,
        refreshJWT: request.body.refreshJWT,
        isVerified: false
      })

      return response
        .status(201)
        .send({ message: 'User successfully created!' })
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
