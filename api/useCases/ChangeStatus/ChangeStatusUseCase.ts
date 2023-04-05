import { ICalledRepository } from '../../repositories/ICalledRepository'
import { ICallRequestDTO } from './ChangeStatusDTO'

export class ChangeStatusUseCase {
  constructor(private iCalledRepository: ICalledRepository) {}

  async execute(data: ICallRequestDTO) {
    return this.iCalledRepository.changeStatus(data)
  }
}
