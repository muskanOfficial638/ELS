/* eslint-disable @typescript-eslint/no-explicit-any */
import BuildSomething from "@/app/components/Services/contentPage/BuildSomething";
import CaseInquirySection from "@/app/components/Services/contentPage/CaseInquirySection";
import FractionalGeneral from "@/app/components/Services/contentPage/FractionalGeneral";
import LegalStructure from "@/app/components/Services/contentPage/LegalStructure";
// import FaqSection from "@/app/components/Services/contentPage/FAQSection";
import NotarizationSection from "@/app/components/Services/contentPage/NotarizationSection";
import ServiceHeroSection from "@/app/components/Services/contentPage/ServiceHeroSection";
import { fetchServiceBySlug } from "@/app/utils/api";
import { apiPath, canonicalPath, frontPath } from "@/app/utils/api-path";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const res = await fetchServiceBySlug(params?.slug);
    const service = res[0];
    return {
      title: service?.title,
      description: service?.short_description,
      openGraph: {
        title: service?.title,
        description: service?.short_description,
        url: `${frontPath}services/${service?.slug}`,
        images: [
          {
            url: `${apiPath}/storage/${service?.feature_image}`,
            width: 1200,
            height: 630,
            alt: service?.meta_title,
          },
        ],
        siteName: "Empowering Legal Solutions",
        type: "website",
      },
      alternates: {
        canonical: `${canonicalPath}${service?.slug}`,
      },
      other: {
        keywords: service?.keywords,
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return {
      title: "Service Detail",
      description: "Could not load service.",
    };
  }
}

const ServicePage: React.FC = async ({ params }: any) => {
  const { slug } = params;
  const serviceData = await fetchServiceBySlug(slug);
  const parsedSections = JSON.parse(serviceData[0]?.sections);

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
