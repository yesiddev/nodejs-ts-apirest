import  mongoose from 'mongoose'
import { mongodb } from './keys'

// i don´t know
mongoose.set('useFindAndModify', true)

// Connecting to mongodb
mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('DB Conectada'))
    .catch(err => console.log('DB No Conectada'))