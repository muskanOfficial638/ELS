/* eslint-disable @typescript-eslint/no-explicit-any */
import BuildSomething from "@/app/components/Services/contentPage/BuildSomething";
import CaseInquirySection from "@/app/components/Services/contentPage/CaseInquirySection";
import FractionalGeneral from "@/app/components/Services/contentPage/FractionalGeneral";
import LegalStructure from "@/app/components/Services/contentPage/LegalStructure";
// import FaqSection from "@/app/components/Services/contentPage/FAQSection";
import NotarizationSection from "@/app/components/Services/contentPage/NotarizationSection";
import ServiceHeroSection from "@/app/components/Services/contentPage/ServiceHeroSection";
import { fetchServiceBySlug } from "@/app/utils/api";

const ServicePage: React.FC = async ({ params }:any) => {
  const { slug } = params;

  const serviceData = await fetchServiceBySlug(slug);
  // console.log("service Data", serviceData[0]);
  const parsedSections = JSON.parse(serviceData[0]?.sections);
  // console.log("parsed Sections",parsedSections)

  return (
    <>
      <ServiceHeroSection
        feature_image={serviceData[0]?.feature_image}
        title={serviceData[0]?.title}
      />
      <NotarizationSection section={parsedSections[0]} />
      <CaseInquirySection section={parsedSections[1]} />
      <LegalStructure section={parsedSections[2]} />
      <FractionalGeneral section={parsedSections[3]} />
      <BuildSomething section={parsedSections[4]} />
      {/* <FaqSection /> */}
    </>
  );
};

export default ServicePage;
