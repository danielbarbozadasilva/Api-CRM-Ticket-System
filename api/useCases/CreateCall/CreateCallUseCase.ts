import { Called } from '../../entities/Called'
import { ICalledRepository } from '../../repositories/ICalledRepository'
import { ICallRequestDTO } from './CreateCallDTO'

export class CreateCallUseCase {
  constructor(private iCalledRepository: ICalledRepository) {}

  async execute(data: ICallRequestDTO) {
    const createCall = new Called(data)
    return this.iCalledRepository.save(createCall)
  }
}
