import { ICalledRepository } from '../../repositories/ICalledRepository'
import { ICallRequestDTO } from './EvaluateCallDTO'

export class EvaluateCallUseCase {
  constructor(private iCalledRepository: ICalledRepository) {}

  async execute(data: ICallRequestDTO) {
    return this.iCalledRepository.evalueteCall(data)
  }
}
