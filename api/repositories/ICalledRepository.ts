import { Called } from '../entities/Called'

export interface ICalledRepository {
  save(called: Called): Promise<boolean>
  findByIdCalled(id: String): Promise<Object>
  findAllCalled(): Promise<Object>
  findCallByClientId(clientid: String): Promise<Object>
  changeStatus(data: Object): Promise<boolean>
  answerCall(data: Object): Promise<boolean>
  evalueteCall(data: Object): Promise<boolean>
}
