import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: String,
  },
  weight: {
    type: String,
  },
  height: {
    type: String,
  },
})

export const User = mongoose.model('User', userSchema)
