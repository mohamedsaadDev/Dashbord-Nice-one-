import { cookies } from 'next/headers'
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export default function middleware(req:NextRequest){
    const cookieStore = cookies()
    const verify =cookieStore.get('USER')?.value ||false
    if(verify){
        const protectedRoutes = ['/login'];
        if(verify &&protectedRoutes.includes(req.nextUrl.pathname)){
            const abosluteUrl = new URL("/",req.nextUrl.origin)
            return NextResponse.redirect(abosluteUrl.toString())
        }
    }else{
        const protectedRoutes = ['/users','/addproducts','/orders','/'];
        if(!verify &&protectedRoutes.includes(req.nextUrl.pathname)){
        const abosluteUrl = new URL("/login",req.nextUrl.origin)
        return NextResponse.redirect(abosluteUrl.toString())
    }
    }
}
