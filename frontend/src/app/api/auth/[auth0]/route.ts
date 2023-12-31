import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

const AUTO0_DOMAIN = process.env.AUTH0_ISSUER_BASE_URL || ''
const AUTO0_CLIENT_ID = process.env.AUTH0_CLIENT_ID || ''

export const GET = handleAuth({
  login(req: NextApiRequest, res: NextApiResponse) {
    return handleLogin(req, res, {
      returnTo: '/',
    })
  },
  logout(req: NextApiRequest, res: NextApiResponse) {
    return handleLogout(req, res, {
      returnTo: `${AUTO0_DOMAIN}/v2/logout?returnTo=&client_id=${AUTO0_CLIENT_ID}`,
    })
  },
})
