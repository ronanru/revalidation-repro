import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) =>
  NextResponse.redirect(new URL("/test", req.nextUrl));
