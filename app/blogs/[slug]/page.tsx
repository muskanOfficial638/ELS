// app/blogs/[slug]/page.tsx
import { Metadata } from "next";
import { apiPath, frontPath, canonicalPath } from "@/app/utils/api-path";
import BlogPageClient from "./BlogPageClient";
import { fetchBlogBySlug } from "@/app/utils/api";

export async function generateMetadata(context: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await context.params; // ✅ Await it
  const slug = resolvedParams.slug;
  try {
    const res = await fetchBlogBySlug(slug);
    const post = res[0];
    return {
      title: post?.title,
      description: post?.short_description,
      openGraph: {
        title: post?.title,
        description: post?.short_description,
        url: `${frontPath}blogs/${post?.slug}`,
        images: [
          {
            url: `${apiPath}/storage/${post?.feature_image}`,
            width: 1200,
            height: 630,
            alt: post?.meta_title,
          },
        ],
        siteName: "Empowering Legal Solutions",
        type: "website",
      },
      alternates: {
        canonical: `${canonicalPath}${post?.slug}`,
      },
      other: {
        keywords: post?.keywords,
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return {
      title: "Blog Post",
      description: "Could not load blog post.",
    };
  }
}

export default async function BlogPage(context: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await context.params; // ✅ Await it
  const slug = resolvedParams.slug;
  return <BlogPageClient slug={slug} />;
}
