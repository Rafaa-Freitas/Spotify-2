import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  //Token vai existir se o usuário estiver logado
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET,
    secureCookie: process.env.NEXTAUTH_URL?.startsWith('https://') ?? !!process.env.VERCEL_URL,
  });

  const { pathname } = req.nextUrl;

  //Permitir requisições se:
  // 1) For uma requisição para next-auth
  // 2) O token existe.
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  //Redireciona para tela de login caso não tenha token ou esteja tentando acessar uma página protegida
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}
