import { NextResponse } from "next/server";

export async function GET() {
  const authorizationUrl = "https://gitlab.com/oauth/authorize";
  return NextResponse.json({ redirectTo: authorizationUrl, note: "OAuth flow is stubbed for MVP scaffold." });
}
