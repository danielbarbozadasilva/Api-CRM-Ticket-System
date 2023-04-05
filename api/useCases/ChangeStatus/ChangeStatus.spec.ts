import { changeStatusUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('View Call', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('View Call', () => {
    test('Make sure status change', async () => {
      const data = {
        _id: '6417736a9b99fa1eb4b6395f',
        status: 'Finalizada'
      }
      const result = await changeStatusUseCase.execute(data)
      expect(result).toBe(true)
    })

    test('Make sure return error if the status change', async () => {
      try {
        const data = {
          _id: '6417736a9b99fa1eb4b6395e',
          status: 'Finalizada'
        }
        expect(changeStatusUseCase.execute(data)).toThrow()
      } catch (error) {}
    })
  })
})
