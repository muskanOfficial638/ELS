import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import TOS from "../components/TermsConditions";
import { apiPath, frontPath, canonicalPath } from "../utils/api-path";
import { fetchCmsPagesBySlug } from "../utils/api";

export const generateMetadata = async (): Promise<Metadata> => {
  const termsPageData = await fetchCmsPagesBySlug("terms-and-conditions");

  return {
    title: termsPageData?.meta_title,
    // "Terms and conditions | ELS",
    description: termsPageData?.meta_description,
    // "At Empowering Legal Solutions, we provide comprehensive corporate legal services designed to support founders, business owners, investors, and stakeholders across the U.S. ",
    openGraph: {
      title: termsPageData?.meta_title,
      description: termsPageData?.meta_description,
      url: `${frontPath}${termsPageData?.slug}`,
      images: [
        {
          url: `${apiPath}/storage/${termsPageData?.feature_image}`,
          width: 1200,
          height: 630,
          alt: termsPageData?.meta_title,
        },
      ],
      siteName: "Empowering Legal Solutions",
      type: "website",
    },
    alternates: {
      canonical: `${canonicalPath}${termsPageData?.slug}`,
    },
    other: {
      keywords: termsPageData?.meta_keywords,
    },
  };
};

const TermsPage: React.FC = async () => {
  const termsPageData = await fetchCmsPagesBySlug("terms-and-conditions");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: `${frontPath}${termsPageData?.slug}`,
    description: termsPageData?.meta_description,
    mainEntity: {
      "@type": "CreativeWork",
      name: "Terms and Conditions",
      creator: {
        "@type": "Organization",
        name: "Empowering Legal Solutions",
        url: frontPath,
      },
      inLanguage: "en",
      url: `${frontPath}${termsPageData?.slug}`,
      datePublished: "2024-01-01", // Update to actual publish date
      license: `${frontPath}${termsPageData?.slug}`,
    },
  };

  if (
    termsPageData?.content?.[0]?.page_content &&
    typeof termsPageData.content[0].page_content === "string"
  ) {
    termsPageData.content[0].page_content =
      termsPageData.content[0].page_content.replace(
        /src="\/storage/g,
        `src="${apiPath}/storage`
      );
  }

  return (
    <>
      <Script
        id="terms-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <TOS data={termsPageData} />
      {/* <TOS /> */}
    </>
  );
};

export default TermsPage;
