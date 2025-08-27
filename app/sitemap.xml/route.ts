import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // optional if using dynamic content

const BASE_URL = "http://localhost:3000";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const staticPages = [
    "",
    "/attorney",
    "/services",
    "/deals",
    "/blogs",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const pagesXml = staticPages
    .map(
      (page) => `
    <url>
      <loc>${BASE_URL}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pagesXml}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
