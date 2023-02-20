import { NextRequest, userAgent, NextResponse } from "next/server"

export default async function middleware(req : NextRequest) {
  const { nextUrl}  = req;
  const { browser, engine, os} = userAgent(req);

  if (nextUrl.pathname !== '/check') {
    return;
  }

  return NextResponse.redirect(new URL(`/${browser.name}-${browser.version}/${engine.name}-${engine.version}/${os.name}-${os.version}`, req.url))
}