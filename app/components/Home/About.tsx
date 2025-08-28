"use client";
import React, { useState } from "react";
// import { BlueLogo } from "../../assets";
import Image from "next/image";
// import { apiPath } from "@/app/utils/api-path";

// type legalSectionProps = {
//   data: any;
// };

// const About: React.FC<legalSectionProps> = ({ data }) => {
const About: React.FC = () => {
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

  const [expanded, setExpanded] = useState(false);

  const text = `Running a business demands strategic moves, yet legal challenges can often feel like they
limit your business growth. Many business owners find that traditional legal models are
fundamentally misaligned with their operational realities. They often encounter
unpredictable hourly billing that strains budgets, inapplicable advice that does not minimize
risk and instead stifles innovation, or standardized approach ill-suited for agile and unique
startups and businesses.
Empowering Legal Solutions was founded to address these very challenges. We prioritize
simplifying legal complexities, providing tailored solutions and strategically managing
critical corporate transactions. The outcome: your business is propelled forward with
confidence and robust compliance.
At Empowering Legal Solutions, we operate as your dedicated legal partner, not merely as
a traditional law firm. Our model delivers fractional and project-based legal expertise when
your business needs it. Our bespoke expert staffing model ensures you gain access to
seasoned legal professionals precisely when your projects demand their specialized
insight.`;

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: data?.page_content || '' }} /> */}
      {/* <section className="px-6 sm:px-20 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          Left: Text content 
          <div className="prose max-w-none text-[#002147]">
            <div dangerouslySetInnerHTML={{ __html: textHtml }} />
          </div>

          Right: Image 
          {imageUrl && (
            <div className="flex justify-center">
              <Image
                src={`${apiPath}${imageUrl}`}
                alt="About ELS"
                className="relative w-full sm:w-[408px] h-auto sm:h-[236px] mt-6 sm:mt-0 object-contain"
                width={300}
                height={100}
              />
            </div>
          )}
        </div>
      </section> */}
      <section className="md:py-[100px] px-4 bg-[#F6F6F6]">
        <div className="flex flex-col sm:flex-row  items-center justify-center gap-6 px-6 sm:px-[90px] pb-10 sm:pb-0">
          <div className="text-center md:text-left flex flex-col md:w-[60%] gap-4 sm:gap-6 order-2 md:order-1 lg:order-1">
            <h2 className="font-body relative self-stretch font-bold text-[#002147] text-xl sm:text-[32px] leading-[36px] sm:leading-[48px]">
              Why Choose Empowering Legal Solutions?
            </h2>
            <p className="font-body relative self-stretch font-normal text-black text-base sm:text-xl leading-6 sm:leading-[30px]">
              A law firm that is built to help you navigate and win at corporate
              transactions.
            </p>
            <p
              className={`font-body relative self-stretch font-normal font-sans text-black leading-[28px] ${
                !expanded ? "line-clamp-3" : ""
              }`}
            >
              {text}
            </p>
            <button
              className=" text-[#0B2B66] font-[600] font-sans text-center md:text-left lg:text-left cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read less<<" : "Read more>>"}
            </button>
            <div className="lg:flex">
              <button className="bg-[#1C4A87] text-[18px] font-[600] font-sans text-white rounded-full duration-400 px-[32px] py-[16px] cursor-pointer hover:bg-[#56B3B1]">
                Get Legal Help Now
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 lg:mt-0 order-1 md:order-2 lg:order-2">
            <Image
              className="md:w-[445.78570556640625px] sm:w-[305px] md:h-[324px] h-[222px] md:mt-6 mt-0 object-cover"
              alt="Frame"
              src="/ELS Logo Color.png"
              width={1000}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
