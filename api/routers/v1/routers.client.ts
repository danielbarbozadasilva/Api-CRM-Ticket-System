import { Router } from 'express'
import { listCallClientController } from '../../useCases/ListCallClient'

export default (router: Router): void => {
  router.route('/client').post((request, response) => {
    //signInController.handle(request, response)
  })

  router.route('/client/:id/call').get((request, response) => {
    listCallClientController.handle(request, response)
  })
}
