import express from 'express'
import { signJwtToken } from '../jwt.js'
import { auth } from '../middleware/auth.js'
import { User } from '../schema/userSchema.js'

const router = express.Router()

router.post('/signup', async (req, res) => {
  const foundUser = await User.findOne({ email: req.body.email })
  if (foundUser) {
    return res.status(400).send({
      msg: 'This email is already registered',
    })
  }
  const { username, email, password, age, weight, height } = req.body
  if (!username || !email || !password || !age || !weight || !height) {
    return res.status(401).send({ msg: 'details missing' })
  }
  try{

    const newUser = await new User({
      username,
      email,
      password,
      age,
      weight,
      height,
    }).save()
  
    res.status(200).send({ msg: 'user successfully registered' })
  } catch(err){
    res.status(501).send({msg:'internal server error'})
  }
})

router.post('/login', async (req, res) => {
  const foundUser = await User.findOne({ email: req.body.email })
  if (!foundUser) {
    return res.status(400).send({ msg: 'Email is not registered with us' })
  }
  const id = foundUser._id
  if (foundUser.password === req.body.password) {
    res.status(200).send({
      msg: 'User successfully authenticated',
      jwtToken: signJwtToken(id),
    })
  } else {
    res.status(400).send({ msg: 'Invalid password' })
  }
})

export const authRouter = router
