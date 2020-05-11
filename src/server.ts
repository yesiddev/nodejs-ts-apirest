// Importing Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'

// Importing Routes
import index_router from './routes/index_routes'
import posts_router from './routes/posts_routes'
import user_router from './routes/user_routes'

// Importing database
import './database'

// Initializing express framework
const app = express()

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(compression())
app.use(cors())

// Routes
app.use(index_router)
app.use('/api/posts', posts_router)
app.use('/api/users', user_router)

// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server en puerto 3000');
})