import React from "react";
import Education from "../components/Attorney/Education";
import Employment from "../components/Attorney/Employment";
import Founder from "../components/Attorney/Founder";
import Vision from "../components/Attorney/Vision";
import Mission from "../components/Attorney/Mission";
import type { Metadata } from "next";
import Script from "next/script";
// import { apiPath } from "../utils/api-path";

// async function fetchAttorneyData() {
//   const res = await fetch(`${apiPath}/api/cms-pages/attorney`, { cache: 'no-store' });
//   if (!res.ok) throw new Error('Failed to fetch terms data');
//   return res.json();
// }


export const generateMetadata = (): Metadata => {
  return {
    title: "Attorney | ELS",
    description:
      "Syeda Nazifa Nawroj, Esq. is an experienced corporate lawyer based in Silicon Valley. She specializes in advising founders, investors, and businesses on corporate governance and transactions, like formation, equity financings, commercial deals, and Mergers & Acquisitions (M&A).",
    openGraph: {
      title: "Attorney | ELS",
      description:
        "Syeda Nazifa Nawroj, Esq. is an experienced corporate lawyer based in Silicon Valley. She specializes in advising founders, investors, and businesses on corporate governance and transactions, like formation, equity financings, commercial deals, and Mergers & Acquisitions (M&A).",
      url: "https://empowering.legal/attorney",
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
      canonical: "https://empowering.legal/attorney",
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
    sameAs: [
      "https://www.linkedin.com/in/syedanazifa", // Update if needed
    ],
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
