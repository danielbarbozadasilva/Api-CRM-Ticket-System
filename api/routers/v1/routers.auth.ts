import { Router } from 'express'
import { createUserController } from '../../useCases/CreateUser'
import { signInController } from '../../useCases/SignIn'

export default (router: Router): void => {
  router.route('/auth').post((request, response) => {
    signInController.handle(request, response)
  })

  router.route('/register').post((request, response) => {
    createUserController.handle(request, response)
  })
}
