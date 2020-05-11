import { Router } from 'express'
import { indexController } from '../controllers/index_controller'

// Initialization Router
const index_router: Router = Router()

// Routes´s router
index_router.get('/', indexController.index)

// Exporting Router
export default index_router
