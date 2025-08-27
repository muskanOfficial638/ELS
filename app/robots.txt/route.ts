import { type NextRequest } from "next/server";

const BASE_URL = "http://localhost:3000";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const content = `
  User-agent: *
  Allow: /

   Sitemap: ${BASE_URL}/sitemap.xml
  `;

  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
