import { registerUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IRegisterRequestDTO } from './RegisterDTO'
import cryptography from '../../utils/cryptography'

describe('Register User', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Register User', () => {
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
      const result = await registerUseCase.execute(data as IRegisterRequestDTO)
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
        expect(registerUseCase.execute(data as IRegisterRequestDTO)).toThrow()
      } catch (error) {}
    })
  })
})
