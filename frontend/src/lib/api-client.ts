import ky from 'ky'
import { getAccessToken } from '@auth0/nextjs-auth0'

export const apiClient = ky.extend({
  prefixUrl: `http://${process.env.API_HOST}:${process.env.API_PORT}/api/v1/`,
  hooks: {
    beforeRequest: [
      async (request: Request) => {
        const { accessToken } = await getAccessToken()
        request.headers.set('Authorization', `Bearer ${accessToken}`)
      },
    ],
  },
})
