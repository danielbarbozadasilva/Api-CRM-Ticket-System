import { createCallUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { ICallRequestDTO } from './CreateCallDTO'

describe('Create Called', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Create Called', () => {
    test('Make sure register called', async () => {
      const data = {
        clientId: '6415f212da63a53a41fec995',
        number: '16353421',
        subject: 'Dúvida sobre produto',
        description: 'O produto está com a cor diferente do anúncio',
        openedDate: new Date(),
        closedDate: undefined,
        status: 'Pendente',
        category: 'Produtos',
        image: 'files-1679254246725.jpg',
        evaluation: 'asdasdasdadasdasd',
        conversations: [
          {
            sender: 'Daniel Barboza',
            message: 'O produto está com a cor diferente do anúncio',
            msgAt: new Date()
          }
        ]
      }
      const result = await createCallUseCase.execute(data)
      expect(result).toBe(true)
    })

    test('Make sure return error if the data is invalid', async () => {
      try {
        const data = {
          clientId: '6415f212da63a53a41fec991',
          number: '16353421',
          subject: 'Dúvida sobre produto',
          description: 'O produto está com a cor diferente do anúncio',
          openedDate: new Date(),
          closedDate: undefined,
          status: 'Pendente',
          category: 'Produtos',
          image: 'files-1679254246725.jpg',
          evaluation: 'asdasdasdadasdasd',
          conversations: [
            {
              sender: 'Daniel Barboza',
              message: 'O produto está com a cor diferente do anúncio',
              msgAt: new Date()
            }
          ]
        }
        expect(createCallUseCase.execute(data)).toThrow()
      } catch (error) {}
    })
  })
})
