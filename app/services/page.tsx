import React from "react";
import CTA from "../components/Services/CTA";
import Cards from "../components/Services/Cards";
import type { Metadata } from "next";
import Script from "next/script";
import { apiPath, frontPath, canonicalPath } from "../utils/api-path";
import { fetchCmsPagesBySlug } from "../utils/api";

export const generateMetadata = async (): Promise<Metadata> => {
  const servicePageData = await fetchCmsPagesBySlug("services");
 
  return {
    title: servicePageData?.meta_title,
    // "Services | ELS",
    description: servicePageData?.meta_description,
    // "At Empowering Legal Solutions, we provide comprehensive corporate legal services designed to support founders, business owners, investors, and stakeholders across the U.S.",
    openGraph: {
      title: servicePageData?.meta_title,
      description: servicePageData?.meta_description,
      url: `${frontPath}${servicePageData?.slug}`,
      images: [
        {
          url: `${apiPath}/storage/${servicePageData?.feature_image}`,
          width: 1200,
          height: 630,
          alt: servicePageData?.meta_title,
        },
      ],
      siteName: "Empowering Legal Solutions",
      type: "website",
    },
    alternates: {
      canonical: `${canonicalPath}${servicePageData?.slug}`,
    },
    // ✅ Add custom meta tags like keywords here
    other: {
      keywords: servicePageData?.meta_keywords,
    },
  };
};

const Services: React.FC = async () => {
  const servicePageData = await fetchCmsPagesBySlug("services");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Empowering Legal Solutions",
    url: "https://empowering.legal/services",
    logo: "https://empowering.legal/ELS.webp",
    image: "https://empowering.legal/ELS.webp",
    description:
      "Comprehensive corporate legal services for founders, business owners, investors, and stakeholders across the U.S.",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    provider: {
      "@type": "Organization",
      name: "Empowering Legal Solutions",
      url: "https://empowering.legal",
    },
    serviceType: [
      "Startup Legal Services",
      "Equity Financing",
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Commercial Transactions",
      "Entity Formation",
    ],
    sameAs: ["https://www.linkedin.com/company/empowering-legal-solutions"],
  };

  return (
    <>
      <Script
        id="legal-services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <CTA data={servicePageData} />
      <Cards />
    </>
  );
};

export default Services;
