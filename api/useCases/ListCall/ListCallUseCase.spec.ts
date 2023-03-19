import { listCallUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List Called', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('list Called', () => {
    test('Make sure list called', async () => {
      const result = await listCallUseCase.execute()
      expect(result[0]).toHaveProperty('_id')
    })
  })
})
