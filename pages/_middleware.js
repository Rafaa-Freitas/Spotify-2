import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  //Token vai existir se o usuário estiver logado
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // if user is already signedin, but goes to login page, redirect to home page
  if (token && pathname === '/login') {
    return NextResponse.redirect('/');
  }

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
