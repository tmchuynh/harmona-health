import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const url = req.url;

  if (
    url.includes("/api/wellness-library/digital-products/wellness-dictionary")
  ) {
    console.debug(`Request to ${url} suppressed in middleware.`);
    return NextResponse.next();
  }

  // Allow other requests to proceed as usual
  return NextResponse.next();
}
