import { Metadata } from "next";
import { apiPath, frontPath, canonicalPath } from "@/app/utils/api-path";
import BlogPageClient from "./BlogPageClient";
import { fetchBlogBySlug } from "@/app/utils/api";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const res = await fetchBlogBySlug(params?.slug);
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

export default function BlogPage({ params }: Props) {
  return <BlogPageClient slug={params.slug} />;
}
