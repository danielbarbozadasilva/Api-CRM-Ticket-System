import { Called } from '../entities/Called'

export interface ICalledRepository {
  save(called: Called): Promise<boolean>
  findAllCalled(): Promise<Object>
}
