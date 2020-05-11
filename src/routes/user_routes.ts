import { Router } from 'express'
import { usersController } from '../controllers/users_controller'

const user_router = Router()

// Rutas de para los metodos de las publicaciones
user_router.get('/', usersController.showAll)

user_router.get('/:username', usersController.showOne)

user_router.post('/', usersController.add)

user_router.delete('/:username', usersController.delete)

user_router.put('/:username', usersController.update)


export default user_router