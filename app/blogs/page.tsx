import type { Metadata } from "next";
import BlogPost from "../components/Blogs/BlogPost";
import Script from "next/script";

export const generateMetadata = (): Metadata => {
  return {
    title: "Blogs | ELS",
    description:
      "DNR Business Solutions, a private retail software start-up in California, in its substantially all asset sale to SurgePays, a fintech public company.",
    openGraph: {
      title: "Blogs | ELS",
      description:
        "DNR Business Solutions, a private retail software start-up in California, in its substantially all asset sale to SurgePays, a fintech public company.",
      url: "https://empowering.legal/blogs",
      images: [
        {
          url: "/ELS.webp", // adjust path if needed
          width: 1200,
          height: 630,
          alt: "Empowering Legal Solutions",
        },
      ],
      siteName: "Empowering Legal Solutions",
      type: "website",
    },
    alternates: {
      canonical: "https://empowering.legal/blogs",
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
