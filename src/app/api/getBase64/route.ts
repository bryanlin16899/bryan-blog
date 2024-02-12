import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function  POST(req: any, res: any) {
  const body = await req.json();
  const url = body.url;

  if (!url) return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  
  try {
    const file = await fs.readFile(`public/${url}`)
    const { base64 } = await getPlaiceholder(file)
    return NextResponse.json({ base64 });
  } catch (error: unknown) {
    //error handling
    return NextResponse.json({ error: "Unexpected error!" }, { status: 500 });
  }
};