import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  console.log('middleware execute');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('middleware redirect');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

export const config = {
  matcher: ['/products/:path*'] // path가 있거나 없거나 둘다 가능
}
