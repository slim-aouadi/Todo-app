import { NextRequest, NextResponse } from "next/server";
import { ACCESS_TOKEN_COOKIE } from "./utils/constants";
import { verifyToken } from "./pages/api/auth/tokens";

export async function middleware(request: NextRequest) {
  try {
    console.log("middleware", request.url);
    const reqCookie = request.cookies.get(ACCESS_TOKEN_COOKIE);

    if (!reqCookie) {
      throw new Error("no acces token cookie");
    }
    await verifyToken(reqCookie.value);

    return NextResponse.next();
  } catch (err) {
    console.log(err);

    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ["/protected"],
};
