import { NextResponse } from "next/server";

export async function GET() {
  const authorizationUrl = "https://auth.atlassian.com/authorize";
  return NextResponse.json({ redirectTo: authorizationUrl, note: "OAuth flow is stubbed for MVP scaffold." });
}
