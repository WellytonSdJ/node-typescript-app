import express from 'express'
import mongoose from 'mongoose'
import router from './routers';
require('dotenv').config();

const mongoURL = process.env.MONGO_URL || ''

const app = express()
app.use(express.json())

mongoose.connect(mongoURL, {
  dbName: 'node-typescript-app',
}).then(() => {
  console.log('Database connected')
}).catch(console.error)

app.use('/', router)

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000')
})
