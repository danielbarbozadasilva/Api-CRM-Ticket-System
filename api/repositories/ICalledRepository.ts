import { Called } from '../entities/Called'

export interface ICalledRepository {
  save(called: Called): Promise<boolean>
  findByIdCalled(id: String): Promise<Object>
  findAllCalled(): Promise<Object>
  changeStatus(data: Object): Promise<boolean>
}
