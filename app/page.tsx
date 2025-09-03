/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroSection from "./components/Home/HeroSection";
import About from "./components/Home/About";
import CorporateSection from "./components/Home/CorporateSection";
// import LegalRepresentation from "./components/Home/LegalRepresentation";
// import ELS from "./components/Home/ELS";
import MenuSection from "./components/Home/MenuSection";
import Consultation from "./components/Home/Consultation";
import Testimonials from "./components/Home/Testimonials";
import News from "./components/News";
import Script from "next/script";
import ComparisonTable from "./components/Home/comparisonTable";
import { Metadata } from "next";
import { fetchCmsPagesBySlug, fetchSliders, fetchTestimonials } from "./utils/api";
import { apiPath, frontPath, canonicalPath } from "./utils/api-path";

export const generateMetadata = async (): Promise<Metadata> => {
  const homePageData = await fetchCmsPagesBySlug("home");

  return { 
    title: homePageData?.meta_title,
    // "Empowering Legal Solutions | Your Dedicated Legal and Business Counsel",
    description: homePageData?.meta_description,
    // " Empowering Legal Solutions provides expert, scalable legal support for businesses across Business Formation, Fundraising, Intellectual Property (IP), Privacy, Complex Transactions, M&A, Non-profit, and General Counsel. Streamline operations and ensure compliance. Get your legal department set up today.",
    // icons: {
    //   icon: `${apiPath}/storage/${homePageData?.content[0]?.image}`,
    // },
    openGraph: {
      title: homePageData?.meta_title,
      description: homePageData?.meta_description,
      url: frontPath,
      images: [
        {
          url: `${apiPath}/storage/${homePageData?.feature_image}`,
          // `${frontPath}ELS_logo.png`,
          width: 1200,
          height: 630,
          alt: homePageData?.meta_title,
        },
      ],
      siteName: homePageData?.meta_title,
      type: "website",
    },
    alternates: {
      canonical: canonicalPath,
    },
    // ✅ Add custom meta tags like keywords here
    other: {
      keywords: homePageData?.meta_keywords,
    },
  };
};

const Home: React.FC = async () => {
  const testimonials = await fetchTestimonials();
  const sliders = await fetchSliders();
  const homePageData = await fetchCmsPagesBySlug("home");

// Replace image src paths in all sections' descriptions
  const processedSections = homePageData?.content?.map((section: any) => {
    if (section?.page_content) {
      section.page_content = section.page_content.replace(
        /src="\/storage/g,
        `src="${apiPath}/storage`
      );
    }
    return section;
  });

  return (
    <>
      {/* Json LD schema */}
      <Script
        id="jsonld-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Empowering Legal Solutions",
            url: "https://www.sellyourstartup.com/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.sellyourstartup.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Organization",
              name: "Empowering Legal Solutions",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sellyourstartup.com/ELS-logo-blue.png",
              },
            },
          }),
        }}
      />
      <HeroSection sliderData={sliders} />
      <About homeAboutData={processedSections}/>
      <ComparisonTable />
      <CorporateSection />
      {/* <LegalRepresentation /> */}
      {/* <ELS /> */}
      <MenuSection />
      {/* {data?.content?.[1] && <CorporateSection data={data.content[1]} />} */}
      {/* {data?.content?.[2] && <LegalRepresentation data={data.content[2]} />} */}
      {/* {data?.content?.[3] && <ELS data={data.content[3]} />} */}
      {/* // {data?.content?.[4] && <MenuSection data={data.content[4]} />} */}
      <Testimonials testimonials={testimonials}/>
      <Consultation />
      <News />
    </>
  );
};

export default Home;
