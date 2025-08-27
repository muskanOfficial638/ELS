import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import TOS from "../components/TermsConditions";
import { apiPath } from "../utils/api-path";

async function fetchTermsData() {
  const res = await fetch(`${apiPath}/api/cms-pages/terms-and-conditions`, {
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });

  if (!res.ok) throw new Error('Failed to fetch terms data');
  return res.json();
}


export const generateMetadata = async (): Promise<Metadata> => {
  // const data = await fetchTermsData();
  return {
    title: "Terms and conditions | ELS",
    description:
      "At Empowering Legal Solutions, we provide comprehensive corporate legal services designed to support founders, business owners, investors, and stakeholders across the U.S. ",
    openGraph: {
      title: "Terms and conditions | ELS",
      description:
        "At Empowering Legal Solutions, we provide comprehensive corporate legal services designed to support founders, business owners, investors, and stakeholders across the U.S. ",
      url: "https://empowering.legal/terms-and-conditions",
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
      canonical: "https://empowering.legal/terms-and-conditions",
    },
  };
};

const TermsPage: React.FC = async () => {
  const data = await fetchTermsData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: "https://empowering.legal/terms-and-conditions",
    description:
      "These terms and conditions outline the rules and regulations for the use of Empowering Legal Solutions’ website and services.",
    mainEntity: {
      "@type": "CreativeWork",
      name: "Terms and Conditions",
      creator: {
        "@type": "Organization",
        name: "Empowering Legal Solutions",
        url: "https://empowering.legal",
      },
      inLanguage: "en",
      url: "https://empowering.legal/terms-and-conditions",
      datePublished: "2024-01-01", // Update to actual publish date
      license: "https://empowering.legal/terms-and-conditions",
    },
  };

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
      <TOS data={data}/>
      {/* <TOS /> */}
    </>
  );
};

export default TermsPage;
