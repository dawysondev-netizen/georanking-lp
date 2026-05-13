import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse("ok\n", {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
