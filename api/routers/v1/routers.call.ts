import { Router } from 'express'
import fileUpload from '../../utils/utils.file'
import { createCallController } from '../../useCases/CreateCall'
import { listCallController } from '../../useCases/ListAllCall'
import { viewCallController } from '../../useCases/ViewCall'
import { changeStatusController } from '../../useCases/ChangeStatus'
import { answerCallController } from '../../useCases/AnswerCall'
import { evaluateCallController } from '../../useCases/EvaluateCall'

export default (router: Router): void => {
  router.route('/call').get((request, response) => {
    listCallController.handle(request, response)
  })
  router
    .route('/call')
    .post(fileUpload.array('files', 1), (request, response) => {
      createCallController.handle(request, response)
    })
  router.route('/call/:id').get((request, response) => {
    viewCallController.handle(request, response)
  })
  router.route('/call/:id/status').put((request, response) => {
    changeStatusController.handle(request, response)
  })
  router.route('/call/:id/reply').post((request, response) => {
    answerCallController.handle(request, response)
  })
  router.route('/call/:id/evaluate').put((request, response) => {
    evaluateCallController.handle(request, response)
  })
}
