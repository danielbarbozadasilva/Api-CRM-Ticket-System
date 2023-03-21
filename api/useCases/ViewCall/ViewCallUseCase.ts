import { ICalledRepository } from '../../repositories/ICalledRepository'
import { ICallRequestDTO } from './ViewCallDTO'

export class ViewCallUseCase {
  constructor(private iCalledRepository: ICalledRepository) {}

  async execute(data: ICallRequestDTO) {
    return this.iCalledRepository.findByIdCalled(data.id)
  }
}
