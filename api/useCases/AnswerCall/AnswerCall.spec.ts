import { answerCallUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('Answer Call', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Answer Call', () => {
    test('Make sure answer call', async () => {
      const data = {
        _id: '6417736a9b99fa1eb4b6395f',
        conversations: {
          sender: 'daniel@gmail.com',
          message: 'Boa tarde, prezado cliente...'
        }
      }
      const result = await answerCallUseCase.execute(data)
      expect(result).toBe(true)
    })

    test('Make sure return error if the answer call', async () => {
      try {
        const data = {
          _id: '6417736a9b99fa1eb4b6395e',
          conversations: {
            sender: 'daniel@gmail.com',
            message: 'Boa tarde, prezado cliente...'
          }
        }
        expect(answerCallUseCase.execute(data)).toThrow()
      } catch (error) {}
    })
  })
})
