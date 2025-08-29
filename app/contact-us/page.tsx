import React from "react";
import ContactUsComponent from "../components/Contact";
import type { Metadata } from "next";
import Script from "next/script";
import { canonicalPath, frontPath } from "../utils/api-path";

export const generateMetadata = (): Metadata => {
  return {
    title: "Contact Us | ELS",
    description: "Contact Empowering Legal Solutions for corporate legal advice.",
    openGraph: {
      title: "Contact Us | ELS",
      description: "Contact Empowering Legal Solutions for corporate legal advice.",
      url: `${frontPath}/contact-us`,
      images: [
        {
          url: `${frontPath}/ELS_logo.png`,
          width: 1200,
          height: 630,
          alt: "Contact Us | ELS",
        },
      ],
      siteName: "Empowering Legal Solutions",
      type: "website",
    },
    alternates: {
      canonical: `${canonicalPath}/contact-us`,
    },
  };
};
const ContactUs: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    description:
      "Contact Empowering Legal Solutions for corporate legal advice.",
    url: `${frontPath}/contact-us`,
    mainEntity: {
      "@type": "Organization",
      name: "Empowering Legal Solutions",
      url: frontPath,
      email: "contact@empowering.legal",
      logo: `${frontPath}/ELS_logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@empowering.legal",
        contactType: "Customer Support",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    },
  };
  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ContactUsComponent />
    </>
  );
};

export default ContactUs;
