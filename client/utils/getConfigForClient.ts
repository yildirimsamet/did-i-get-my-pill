import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'

export const getConfigForClient = () => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const token:string = Cookies.get('token')

  const decodedToken = jwt.decode(token, {
    complete: true,
  })

  if (!decodedToken) {
    return config
  }

  const expTime = decodedToken.payload.exp * 1000
  const nowTime = new Date().getTime()

  if (expTime > nowTime) {
    // If token, add to headers
    if (token) {
      config.headers['token'] = token
    }

    return config
  } else {
    Cookies.remove('token')
  }

  return config
}
