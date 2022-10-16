import { getUserId } from '../jwt.js'

export const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    console.log('token not found')
    return res.status(401).send({ err: 'unauthorized request' })
  }
  try {
    const userId = getUserId(token)
    req.userId = userId
    next()
  } catch (err) {
    return res.status(500).send(err)
  }
}
