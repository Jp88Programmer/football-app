import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json(
      { error: "Date parameter is required" },
      { status: 400 }
    );
  }

  const API_KEY = process.env.SPORTSMONK_API_KEY;
  const response = await fetch(
    `https://api.sportmonks.com/v3/football/fixtures/date/${date}?api_token=${API_KEY}`,
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch fixtures" },
      { status: response.status }
    );
  }

  const data = await response.json();
  console.log("🚀 ~ GET ~ data: 32", data)
  return NextResponse.json(data);
}
