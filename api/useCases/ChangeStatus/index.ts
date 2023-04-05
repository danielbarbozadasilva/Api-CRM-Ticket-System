import { CalledDBRepository } from '../../repositories/implementations/CalledDBRepository'
import { ChangeStatusController } from './ChangeStatusController'
import { ChangeStatusUseCase } from './ChangeStatusUseCase'

const mongoCallRepository = new CalledDBRepository()
const changeStatusUseCase = new ChangeStatusUseCase(mongoCallRepository)
const changeStatusController = new ChangeStatusController(changeStatusUseCase)

export { changeStatusUseCase, changeStatusController }
