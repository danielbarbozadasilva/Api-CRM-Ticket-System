import { Called } from '../../entities/Called'
import { ICalledRepository } from '../ICalledRepository'
import calledSchema from '../../database/schemas/schemas.called'

export class CalledDBRepository implements ICalledRepository {
  async save(data: Called): Promise<boolean> {
    const resultDB = await calledSchema.create({
      clientId: data.clientId,
      number: data.number,
      subject: data.subject,
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

  async findCallByClientId(id: String): Promise<Object> {
    const result = await calledSchema.find({ clientId: id })
    return result
  }

  async findByIdCalled(id: String): Promise<Object> {
    const result = await calledSchema.findById(id)
    return result
  }

  async changeStatus(data: Called): Promise<boolean> {
    const result = await calledSchema.findByIdAndUpdate(data._id, {
      $set: {
        status: data.status
      }
    })
    return !!result
  }

  async answerCall(data: Called): Promise<boolean> {
    const result = await calledSchema.findByIdAndUpdate(data._id, {
      $push: {
        conversations: data.conversations
      }
    })
    return !!result
  }

  async evalueteCall(data: Called): Promise<boolean> {
    const result = await calledSchema.findByIdAndUpdate(data._id, {
      $set: {
        evaluation: data.evaluation
      }
    })
    return !!result
  }
}
