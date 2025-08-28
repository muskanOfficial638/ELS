import React from "react";
import PrivacyPolicyComponent from "../components/PrivacyPolicyComponent";
import type { Metadata } from "next";
import Script from "next/script";
import { apiPath, frontPath, canonicalPath } from "../utils/api-path";
import { fetchCmsPagesBySlug } from "../utils/api";

export const generateMetadata = async (): Promise<Metadata> => {
  const privacyPageData = await fetchCmsPagesBySlug("privacy-policy");

  return {
    title: privacyPageData?.meta_title,
    // "Privacy policy | ELS",
    description: privacyPageData?.meta_description,
    // "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website sellyourstartup.com (“Website”). By using this Website in any way, or by accepting the Terms and Conditions, you agree to comply with this Privacy Policy. If you do not agree with the terms of this policy, please do not access the Website.",
    openGraph: {
      title: privacyPageData?.meta_title,
      description: privacyPageData?.meta_description,
      url: `${frontPath}${privacyPageData?.slug}`,
      images: [
        {
          url: `${apiPath}/storage/${privacyPageData?.feature_image}`,
          width: 1200,
          height: 630,
          alt: privacyPageData?.meta_title,
        },
      ],
      siteName: "Empowering Legal Solutions",
      type: "website",
    },
    alternates: {
      canonical: `${canonicalPath}${privacyPageData?.slug}`,
    },
    other: {
      keywords: privacyPageData?.meta_keywords,
    },
  };
};

const PrivacyPolicy: React.FC = async () => {
  const data = await fetchCmsPagesBySlug("privacy-policy");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://empowering.legal/terms-and-conditions", // You might want to change this to /privacy-policy if that's the correct route
    description:
      "This Privacy Policy explains how Empowering Legal Solutions collects, uses, discloses, and safeguards your information when you visit our website.",
    mainEntity: {
      "@type": "CreativeWork",
      name: "Privacy Policy",
      creator: {
        "@type": "Organization",
        name: "Empowering Legal Solutions",
        url: "https://empowering.legal",
      },
      inLanguage: "en",
      url: "https://empowering.legal/terms-and-conditions",
      datePublished: "2024-01-01", // Update as needed
      license: "https://empowering.legal/terms-and-conditions",
    },
  };

  return (
    <>
      <Script
        id="privacy-policy-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PrivacyPolicyComponent data={data} />
    </>
  );
};

export default PrivacyPolicy;
