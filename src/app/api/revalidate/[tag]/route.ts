import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(
  req: Request,
  { params }: { params: { tag: string } },
) {
  const tag = params.tag;

  if (!tag) {
    return NextResponse.json({ error: "Missing tag" }, { status: 400 });
  }
  console.log(tag);
  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, tag });
}
