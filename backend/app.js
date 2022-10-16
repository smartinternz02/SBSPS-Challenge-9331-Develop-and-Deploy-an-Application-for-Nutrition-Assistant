import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { authRouter } from './routers/auth.js'

dotenv.config()
dbConnect()
async function dbConnect() {
  const dbUrl = process.env.MONGO_URI
  await mongoose.connect(dbUrl).then(
    (db) => {
      console.log('Database connection is successful')
    },
    (err) => console.log(err)
  )
}

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running at port 5000')
})

app.use(authRouter)

app.listen(5000, function () {
  console.log('Server started on port 5000...')
})
