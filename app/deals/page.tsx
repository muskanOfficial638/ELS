import React from "react";
import Legal from "../components/Deals/Legal";
// import DLA from "../components/Deals/DLA";
// import Fenwick from "../components/Deals/Fenwick";
import type { Metadata } from "next";
import Script from "next/script";
import { apiPath, frontPath, canonicalPath } from "../utils/api-path";
import { fetchCmsPagesBySlug } from "../utils/api";

export const generateMetadata = async (): Promise<Metadata> => {
  const dealsPageData = await fetchCmsPagesBySlug("deals");

  return {
    title: dealsPageData?.meta_title,
    // "Deals | ELS",
    description: dealsPageData?.meta_description,
    // "DNR Business Solutions, a private retail software start-up in California, in its substantially all asset sale to SurgePays, a fintech public company.",
    openGraph: {
      title: dealsPageData?.meta_title,
      description: dealsPageData?.meta_description,
      url: `${frontPath}${dealsPageData?.slug}`,
      images: [
        {
          url: `${apiPath}/storage/${dealsPageData?.feature_image}`,
          width: 1200,
          height: 630,
          alt: dealsPageData?.meta_title,
        },
      ],
      siteName: "Empowering Legal Solutions",
      type: "website",
    },
    alternates: {
      canonical: `${canonicalPath}${dealsPageData?.slug}`,
    },
    other: {
      keywords: dealsPageData?.meta_keywords,
    },
  };
};

const Deals: React.FC = async () => {
  const data = await fetchCmsPagesBySlug("deals");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BusinessEvent",
    name: "DNR Business Solutions Asset Sale to SurgePays",
    startDate: "2024-11-15", // Adjust as needed
    eventStatus: "https://schema.org/EventCompleted",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "California, United States",
    },
    organizer: {
      "@type": "Organization",
      name: "Empowering Legal Solutions",
      url: "https://empowering.legal",
    },
    description:
      "DNR Business Solutions, a private retail software startup in California, completed a substantially all-assets sale to SurgePays, a fintech public company, with Empowering Legal Solutions providing legal counsel.",
    image: "https://empowering.legal/ELS.webp",
    url: "https://empowering.legal/deals",
  };

  return (
    <>
      <Script
        id="deals-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Legal data={data} />
      {/* <DLA />
      <Fenwick /> */}
    </>
  );
};

export default Deals;
