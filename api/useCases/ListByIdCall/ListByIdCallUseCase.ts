import { ICalledRepository } from '../../repositories/ICalledRepository'
import { ICallRequestDTO } from './ListByIdCallDTO'

export class ListByIdCallUseCase {
  constructor(private iCalledRepository: ICalledRepository) {}

  async execute(data: ICallRequestDTO) {
    return this.iCalledRepository.findByIdCalled(data.id)
  }
}
