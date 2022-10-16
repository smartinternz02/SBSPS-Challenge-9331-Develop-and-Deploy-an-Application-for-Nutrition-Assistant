import jwt from 'jsonwebtoken'

export const signJwtToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_KEY, { expiresIn: '1 days' })
}

export const getUserId = (token) => {
  return jwt.verify(token, process.env.JWT_KEY).userId
}
