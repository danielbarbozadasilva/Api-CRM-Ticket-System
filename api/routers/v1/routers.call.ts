import { Router } from 'express'
import { createCallController } from '../../useCases/CreateCall'
import fileUpload from '../../utils/utils.file'

export default (router: Router): void => {
  router
    .route('/call')
    .post(fileUpload.array('files', 1), (request, response) => {
      createCallController.handle(request, response)
    })
}
