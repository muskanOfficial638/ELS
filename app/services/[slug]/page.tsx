/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";
// import BuildSomething from "@/app/components/Services/contentPage/BuildSomething";
import CaseInquirySection from "@/app/components/Services/contentPage/CaseInquirySection";
// import FractionalGeneral from "@/app/components/Services/contentPage/FractionalGeneral";
// import LegalStructure from "@/app/components/Services/contentPage/LegalStructure";
// import FaqSection from "@/app/components/Services/contentPage/FAQSection";
import NotarizationSection from "@/app/components/Services/contentPage/NotarizationSection";
import ServiceHeroSection from "@/app/components/Services/contentPage/ServiceHeroSection";
import { fetchServiceBySlug } from "@/app/utils/api";
import { apiPath, canonicalPath, frontPath } from "@/app/utils/api-path";
import { Metadata } from "next";

export async function generateMetadata(context: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await context.params; // ✅ Await it
  const slug = resolvedParams.slug;

  try {
    const res = await fetchServiceBySlug(slug);
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

export default async function ServicePage(context: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await context.params; // ✅ Await it
  const slug = resolvedParams.slug;

  const serviceData = await fetchServiceBySlug(slug);
  const parsedSections = JSON.parse(serviceData[0]?.sections);

  // Replace image src paths in all sections' descriptions
  const processedSections = parsedSections.map((section: any) => {
    if (section?.description) {
      section.description = section.description.replace(
        /src="\/storage/g,
        `src="${apiPath}/storage`
      );
    }
    return section;
  });

  return (
    <>
      <ServiceHeroSection
        feature_image={serviceData[0]?.feature_image}
        title={serviceData[0]?.title}
      />
      <NotarizationSection section={processedSections[0]} />
      <CaseInquirySection allServiceData={processedSections}/>
      {/* <LegalStructure section={processedSections[2]} />
      <FractionalGeneral section={processedSections[3]} />
      <BuildSomething section={processedSections[4]} /> */}
      {/* <FaqSection /> */}
    </>
  );
}
