import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '../pages/api/auth/tokens'
import { MiddlewareFactory } from '../types/Middleware'
import { ACCESS_TOKEN_COOKIE } from '../utils/constants'

export const privateRouteMiddleware: MiddlewareFactory = next => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname
    const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)

    if (['/home']?.some(path => pathname.startsWith(path))) {
      if (accessToken === undefined) {
        const url = new URL(`/`, request.url)
        return NextResponse.redirect(url)
      }
      try {
        console.log('Verifying token')
        await verifyToken(accessToken.value)
      } catch (error) {
        console.log(error)
        const url = new URL(`/`, request.url)
        const response = NextResponse.redirect(url)
        response.cookies.delete(ACCESS_TOKEN_COOKIE)
        return response
      }
    }

    return await next(request, _next)
  }
}
