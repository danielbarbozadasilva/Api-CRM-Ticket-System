import { ICalledRepository } from '../../repositories/ICalledRepository'
import { ICallRequestDTO } from './ListCallClientDTO'

export class ListCallClientUseCase {
  constructor(private iCalledRepository: ICalledRepository) {}

  async execute(data: ICallRequestDTO) {
    return this.iCalledRepository.findCallByClientId(data.id)
  }
}
