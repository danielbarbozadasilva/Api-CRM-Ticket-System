import { listAllClientUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List Clients', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('list all Clients', () => {
    test('Make sure list all clients', async () => {
      const result = await listAllClientUseCase.execute()
      expect(result[0]).toHaveProperty('_id')
    })
  })
})
