import React from "react";
import ContactUsComponent from "../components/Contact";
import type { Metadata } from "next";
import Script from "next/script";

export const generateMetadata = (): Metadata => {
  return {
    title: "Contact Us | ELS",
    description: "contact@empowering.legal",
    openGraph: {
      title: "Contact Us | ELS",
      description: "contact@empowering.legal",
      url: "https://empowering.legal/contact-us",
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
      canonical: "https://empowering.legal/contact-us",
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
    url: "https://empowering.legal/contact-us",
    mainEntity: {
      "@type": "Organization",
      name: "Empowering Legal Solutions",
      url: "https://empowering.legal",
      email: "contact@empowering.legal",
      logo: "https://empowering.legal/ELS.webp",
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
