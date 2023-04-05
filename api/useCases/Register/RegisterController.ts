import { Request, Response } from 'express'
import Cryptography from '../../utils/cryptography'
import { RegisterUseCase } from './RegisterUseCase'

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const salt = Cryptography.createSalt()

      await this.registerUseCase.execute({
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
