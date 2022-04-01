import { NextRequest, NextResponse } from 'next/server';

// https://stackoverflow.com/a/69929441/14477325
const Middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  if (pathname === pathname.toLowerCase()) return NextResponse.next();

  console.log(`Redirecting from ${pathname} to ${pathname.toLowerCase()}`);
  return NextResponse.redirect(
    `${req.nextUrl.origin}${pathname.toLowerCase()}`
  );
};

export default Middleware;
