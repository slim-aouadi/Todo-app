import { NextRequest, NextResponse } from 'next/server'
import { REFRESH_TOKEN_COOKIE } from './utils/constants'

export function middleware(request: NextRequest) {
  const reqCookie = request.cookies?.[REFRESH_TOKEN_COOKIE]

  if (reqCookie === undefined) {
    console.log('undefined cookie')
    const loginUrl = new URL('/', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/home/:path*']
}
