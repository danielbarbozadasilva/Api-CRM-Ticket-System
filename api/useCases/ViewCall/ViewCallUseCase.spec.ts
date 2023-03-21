import { listByIdCallUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List By Id Called', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('list By Id Called', () => {
    test('Make sure list called', async () => {
      const data = { id: '6417736a9b99fa1eb4b6395f' }
      const result = await listByIdCallUseCase.execute(data)
      expect(result).toHaveProperty('_id')
    })
  })
})
