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
  const dealsPageData = await fetchCmsPagesBySlug("deals");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BusinessEvent",
    name: "DNR Business Solutions Asset Sale to SurgePays",
    startDate: "2024-11-15",
    eventStatus: "https://schema.org/EventCompleted",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "California, United States",
    },
    organizer: {
      "@type": "Organization",
      name: "Empowering Legal Solutions",
      url: frontPath,
    },
    description: dealsPageData?.meta_description,
    image: `${apiPath}/storage/${dealsPageData?.feature_image}`,
    url: `${frontPath}${dealsPageData?.slug}`,
  };

  if (
    dealsPageData?.content?.[0]?.page_content &&
    typeof dealsPageData.content[0].page_content === "string"
  ) {
    dealsPageData.content[0].page_content =
      dealsPageData.content[0].page_content.replace(
        /src="\/storage/g,
        `src="${apiPath}/storage`
      );
  }

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
      <Legal data={dealsPageData} />
      {/* <DLA />
      <Fenwick /> */}
    </>
  );
};

export default Deals;
