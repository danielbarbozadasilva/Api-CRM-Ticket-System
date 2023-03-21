import { ICalledRepository } from '../../repositories/ICalledRepository'
import { ICallRequestDTO } from './AnswerCallsDTO'

export class AnswerCallUseCase {
  constructor(private iCalledRepository: ICalledRepository) {}

  async execute(data: ICallRequestDTO) {
    return this.iCalledRepository.answerCall(data)
  }
}
