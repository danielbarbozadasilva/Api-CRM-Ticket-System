import { Router } from 'express'
import { listCallClientController } from '../../useCases/ListCallClient'
import { listAllClientController } from '../../useCases/ListAllClients'

export default (router: Router): void => {
  router.route('/client').get((request, response) => {
    listAllClientController.handle(request, response)
  })

  router.route('/client/:id/call').get((request, response) => {
    listCallClientController.handle(request, response)
  })
}
