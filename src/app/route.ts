import { NextResponse } from "next/server";

export const GET = (req: Request) =>
  NextResponse.redirect(new URL(req.url, "/test"));
