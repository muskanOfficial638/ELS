import React from "react";
import CTA from "../components/Services/CTA";
import Cards from "../components/Services/Cards";
import type { Metadata } from "next";
import Script from "next/script";
import { apiPath } from "../utils/api-path";

async function fetchServicesData() {
  const res = await fetch(`${apiPath}/api/cms-pages/services`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch terms data");
  return res.json();
}

export const generateMetadata = (): Metadata => {
  return {
    title: "Services | ELS",
    description:
      "At Empowering Legal Solutions, we provide comprehensive corporate legal services designed to support founders, business owners, investors, and stakeholders across the U.S.",
    openGraph: {
      title: "Services | ELS",
      description:
        "At Empowering Legal Solutions, we provide comprehensive corporate legal services designed to support founders, business owners, investors, and stakeholders across the U.S.",
      url: "https://empowering.legal/services",
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
      canonical: "https://empowering.legal/services",
    },
  };
};

const Services: React.FC = async () => {
  const data = await fetchServicesData();
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
      <CTA data={data} />
      {/* <CTA /> */}
      {/* <Cards data={data} /> */}
      <Cards />
    </>
  );
};

export default Services;
