"use client";
// import React, { useEffect, useState } from "react";
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
// import { apiPath } from "./utils/api-path";

const Home: React.FC = () => {
  // const [data, setData] = useState({} as any);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${apiPath}/api/cms-pages/home-page`);
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error("Error fetching Google Sheet data:", error);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {console.log("data",data)}, [data]);

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
      <HeroSection />
      <About />
      <ComparisonTable />
      <CorporateSection />
      {/* <LegalRepresentation /> */}
      {/* <ELS /> */}
      <MenuSection />
      {/* {data?.content?.[0] && <About data={data.content[0]} />} */}
      {/* {data?.content?.[1] && <CorporateSection data={data.content[1]} />} */}
      {/* {data?.content?.[2] && <LegalRepresentation data={data.content[2]} />} */}
      {/* {data?.content?.[3] && <ELS data={data.content[3]} />} */}
      {/* // {data?.content?.[4] && <MenuSection data={data.content[4]} />} */}
      <Testimonials />
      <Consultation />
      <News />
    </>
  );
};

export default Home;
