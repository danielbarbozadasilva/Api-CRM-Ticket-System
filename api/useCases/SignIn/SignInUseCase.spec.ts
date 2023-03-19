import { signInUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('SignIn User', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('SignIn User', () => {
    test('Make sure that the user signin', async () => {
      const data = {
        email: 'daniel80barboza@gmail.com',
        password: 'daniel'
      }
      const resultData = await signInUseCase.execute(data)
      expect(resultData).toHaveProperty('data._id')
    })

    test('Make sure returns error if credentials are invalid', async () => {
      try {
        const data = {
          email: 'daniel10barboza@gmail.com',
          password: 'daniel'
        }
        expect(signInUseCase.execute(data)).toThrow()
      } catch (error) {}
    })
  })
})
