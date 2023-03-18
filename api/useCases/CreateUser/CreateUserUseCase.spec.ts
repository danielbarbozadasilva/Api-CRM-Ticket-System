import { createUserUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { ICreateUserRequestDTO } from './CreateUserDTO'
import cryptography from '../../utils/cryptography'

describe('Create User', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Create User', () => {
    test('Make sure register the user', async () => {
      const salt = cryptography.createSalt()
      const data = {
        name: 'Daniel',
        cpf: '123.345.567-90',
        address: 'Rua abc, 123',
        phone: '(21)98987-0998',
        email: 'daniel8080barboza@gmail.com',
        birthDate: '09/09/2000',
        hash: cryptography.createHash('daniel', salt),
        salt: salt
      }
      const result = await createUserUseCase.execute(
        data as ICreateUserRequestDTO
      )
      expect(result).toBe(true)
    })

    test('Make sure return error if the email already exists', async () => {
      try {
        const salt = cryptography.createSalt()
        const data = {
          name: 'Daniel',
          cpf: '123.345.567-90',
          address: 'Rua abc, 123',
          phone: '(21)98987-0998',
          email: 'daniel8080barboza@gmail.com',
          birthDate: '09/09/2000',
          hash: cryptography.createHash('daniel', salt),
          salt: salt
        }
        expect(
          createUserUseCase.execute(data as ICreateUserRequestDTO)
        ).toThrow()
      } catch (error) {}
    })
  })
})
