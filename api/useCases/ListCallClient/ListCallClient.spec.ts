import { listCallClientUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List Called', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('list Called By Client Id', () => {
    test('Make sure list called', async () => {
      const data = { id: '64208560d0a5728a6bffe6b8' }
      const result = await listCallClientUseCase.execute(data)
      expect(result[0]).toHaveProperty('_id')
    })
  })
})
