import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    let nextUrl = request.nextUrl
    if(!request.nextUrl.searchParams.get('skill')){
        request.nextUrl.searchParams.set('skill','react');
        return NextResponse.redirect(nextUrl)
    }
    else return NextResponse.next()
    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/developer',
}