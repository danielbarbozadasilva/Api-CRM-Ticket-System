import { Called } from '../../entities/Called'
import { ICalledRepository } from '../ICalledRepository'
import calledSchema from '../../database/schemas/schemas.called'

export class CalledDBRepository implements ICalledRepository {
  async save(data: Called): Promise<boolean> {
    const resultDB = await calledSchema.create({
      clientId: data.clientId,
      number: data.number,
      subject: data.subject,
      description: data.description,
      openedDate: data.openedDate,
      closedDate: data.closedDate,
      status: data.status,
      category: data.category,
      image: data.image,
      evaluation: data.evaluation,
      conversations: data.conversations
    })
    return !!resultDB
  }

  async findAllCalled(): Promise<Object> {
    const result = await calledSchema.find()
    return result
  }
}
