import { Router } from 'express'
import { postsController } from '../controllers/posts_controller'

const posts_router = Router()

// Rutas de para los metodos de las publicaciones
posts_router.get('/', postsController.showAll)

posts_router.get('/:url', postsController.showOne)

posts_router.post('/', postsController.add)

posts_router.delete('/:url', postsController.delete)

posts_router.put('/:url', postsController.update)


export default posts_router