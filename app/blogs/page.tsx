import type { Metadata } from "next";
import BlogPost from "../components/Blogs/BlogPost";
import Script from "next/script";
import { apiPath, frontPath, canonicalPath } from "../utils/api-path";
import { fetchCmsPagesBySlug } from "../utils/api";

export const generateMetadata = async (): Promise<Metadata> => {
  const blogsPageData = await fetchCmsPagesBySlug("blogs");

  return {
    title: blogsPageData?.meta_title,
    description: blogsPageData?.meta_description,
    openGraph: {
      title: blogsPageData?.meta_title,
      description: blogsPageData?.meta_description,
      url: `${frontPath}${blogsPageData?.slug}`,
      images: [
        {
          url: `${apiPath}/storage/${blogsPageData?.feature_image}`,
          width: 1200,
          height: 630,
          alt: blogsPageData?.meta_title,
        },
      ],
      siteName: "Empowering Legal Solutions",
      type: "website",
    },
    alternates: {
      canonical: `${canonicalPath}${blogsPageData?.slug}`,
    },
    other: {
      keywords: blogsPageData?.meta_keywords,
    },
  };
};

const Blogs: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Empowering Legal Solutions Blog",
    url: "https://empowering.legal/blogs",
    description:
      "Insights on corporate legal transactions, M&A, startup law, and business strategy from Empowering Legal Solutions.",
    publisher: {
      "@type": "Organization",
      name: "Empowering Legal Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://empowering.legal/ELS.webp",
      },
    },
  };

  return (
    <>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogPost />
    </>
  );
};

export default Blogs;
