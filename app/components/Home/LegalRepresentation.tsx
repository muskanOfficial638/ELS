// import React, { useEffect, useState } from "react";
// import { Amico } from "../../assets";
import Image from "next/image";
// import { apiPath } from "@/app/utils/api-path";

// type legalSectionProps = {
//   data: any;
// };

// const LegalRepresentation: React.FC<legalSectionProps> = ({ data }) => {
  const LegalRepresentation: React.FC = () => {
  // const [textHtml, setTextHtml] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  // useEffect(() => {
  //   const rawHtml = data?.page_content || "";

  //   // Parse the HTML string to a DOM structure
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(rawHtml, "text/html");

  //   // Extract image URL from <img> tag
  //   const imgElement = doc.querySelector("img");
  //   const imgSrc = imgElement?.getAttribute("src") || "";

  //   // Remove the column containing the image
  //   imgElement?.closest(".filament-tiptap-grid-builder__column")?.remove();

  //   // Remaining HTML is the text section
  //   const textContent = doc.body.innerHTML;
  //   // Update state
  //   setImageUrl(imgSrc);
  //   setTextHtml(textContent);
  // }, [data]);

  return (
    <section className="md:py-[100px] px-4 bg-white">
    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-[100px] relative px-4 lg:px-[90px]">
      {/* {imageUrl && ( */}
        <Image
          className="w-full h-auto lg:w-[622px] lg:h-[622px] mb-6 lg:mb-0"
          alt="Frame"
          src="/legal.png"
          // src={`${apiPath}${imageUrl}`}
          width={400}
          height={100}
        />
      {/* )} */}
      <div className="flex flex-col items-start w-full lg:w-[60%] gap-4 lg:gap-6">
        {/* <div dangerouslySetInnerHTML={{ __html: textHtml }} /> */}
        <p className="font-body font-bold text-[#000] text-2xl lg:text-[32px] tracking-[1.00px] lg:tracking-[1.20px] leading-[36px] lg:leading-[48px]">
          What’s legal representation?
        </p>
        <p className="font-body font-normal text-black text-sm lg:text-base tracking-[0.75px] lg:tracking-[1.00px] leading-5 lg:leading-6">
          We strategize with our clients on how to structure the entity or
          business deal to achieve their desired outcomes. We assist our clients
          in engaging with potential business counterparties and working out a
          deal. We advise our clients on the legal terms and negotiate
          agreements on their behalf. We connect our clients with subject matter
          experts who can guide them on specialized financial or legal issues.
          We journey with our clients from conception to integration,
          celebrating lessons and wins along the way.
        </p>
      </div>
    </div>
    </section>
  );
};

export default LegalRepresentation;
