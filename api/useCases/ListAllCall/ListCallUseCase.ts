import { ICalledRepository } from '../../repositories/ICalledRepository'

export class ListCallUseCase {
  constructor(private iCalledRepository: ICalledRepository) {}

  async execute() {
    return this.iCalledRepository.findAllCalled()
  }
}
