import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { MiddlewareFactory } from '../types/Middleware'
import { ACCESS_TOKEN_COOKIE } from '../utils/constants'

export const publicRouteMiddleware: MiddlewareFactory = next => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname
    const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)
    const url = new URL(`/home`, request.url)
    if (pathname === '/' && accessToken !== undefined) {
      return NextResponse.redirect(url)
    }

    return await next(request, _next)
  }
}
