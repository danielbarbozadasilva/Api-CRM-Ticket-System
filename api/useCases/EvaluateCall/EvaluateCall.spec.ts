import { evaluateCallUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('Evaluate Call', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Evaluate Call', () => {
    test('Make sure evaluate call', async () => {
      const data = {
        _id: '6417736a9b99fa1eb4b6395f',
        evaluation: 3
      }
      const result = await evaluateCallUseCase.execute(data)
      expect(result).toBe(true)
    })

    test('Make sure return error if the evaluate call', async () => {
      try {
        const data = {
          _id: '6417736a9b99fa1eb4b6395e',
          evaluation: 3
        }
        expect(evaluateCallUseCase.execute(data)).toThrow()
      } catch (error) {}
    })
  })
})
