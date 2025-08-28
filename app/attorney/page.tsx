import React from "react";
import Education from "../components/Attorney/Education";
import Employment from "../components/Attorney/Employment";
import Founder from "../components/Attorney/Founder";
import Vision from "../components/Attorney/Vision";
import Mission from "../components/Attorney/Mission";
import type { Metadata } from "next";
import Script from "next/script";
import { fetchCmsPagesBySlug } from "../utils/api";
import { apiPath, frontPath, canonicalPath } from "../utils/api-path";

export const generateMetadata = async (): Promise<Metadata> => {
  const attorneyPageData = await fetchCmsPagesBySlug("attorney");
  return {
    title: attorneyPageData?.meta_title,
    // "Attorney | ELS",
    description: attorneyPageData?.meta_description,
    // "Syeda Nazifa Nawroj, Esq. is an experienced corporate lawyer based in Silicon Valley. She specializes in advising founders, investors, and businesses on corporate governance and transactions, like formation, equity financings, commercial deals, and Mergers & Acquisitions (M&A).",
    openGraph: {
      title: attorneyPageData?.meta_title,
      description: attorneyPageData?.meta_description,
      url: `${frontPath}${attorneyPageData?.slug}`,
      images: [
        {
          url: `${apiPath}/storage/${attorneyPageData?.feature_image}`,
          width: 1200,
          height: 630,
          alt: attorneyPageData?.meta_title,
        },
      ],
      siteName: "Empowering Legal Solutions",
      type: "website",
    },
    alternates: {
      canonical: `${canonicalPath}${attorneyPageData?.slug}`,
    },
    other: {
      keywords: attorneyPageData?.meta_keywords,
    },
  };
};

const Attorney: React.FC = async () => {
  // const data = await fetchAttorneyData();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syeda Nazifa Nawroj, Esq.",
    jobTitle: "Corporate Lawyer",
    worksFor: {
      "@type": "Organization",
      name: "Empowering Legal Solutions",
      url: "https://empowering.legal",
    },
    url: "https://empowering.legal/attorney",
    image: "https://empowering.legal/ELS.webp",
    sameAs: ["https://www.linkedin.com/in/syedanazifa"],
    description:
      "Syeda Nazifa Nawroj, Esq. is an experienced corporate lawyer based in Silicon Valley. She specializes in advising founders, investors, and businesses on corporate governance and transactions, including formation, equity financings, commercial deals, and M&A.",
  };

  return (
    <>
      {/* JSON-LD Structured Data for Attorney */}
      <Script
        id="attorney-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* <Founder data={data?.content?.[0]} /> */}
      <Founder />
      <Vision />
      <Education />
      <Employment />
      <Mission />
    </>
  );
};

export default Attorney;
