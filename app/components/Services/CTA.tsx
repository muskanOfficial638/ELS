/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiPath } from "@/app/utils/api-path";
import Image from "next/image";
import Link from "next/link";

interface serviceProps {
  data: any;
}

const CTA: React.FC<serviceProps> = ({ data }) => {
  const router = useRouter();
  const handleNavigateContact = () => {
    router.push("/contact-us");
  };

  const content = data?.content?.[0]?.page_content || "";

  data?.content?.map((section: any) => {
    if (section?.page_content) {
      section.page_content = section.page_content.replace(
        /src="\/storage/g,
        `src="${apiPath}/storage`
      );
    }
    return section;
  });

  const mainContent = data?.content?.[0];
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [listItems, setListItems] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && content) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(content, "text/html");

      const parsedTitle =
        htmlDoc.querySelector("summary")?.textContent?.trim() ?? "";
      const parsedParagraph =
        htmlDoc.querySelector("details p")?.textContent?.trim() ?? "";
      const parsedListItems = Array.from(htmlDoc.querySelectorAll("ul li")).map(
        (li) => li.textContent?.trim() ?? ""
      );

      setTitle(parsedTitle);
      setParagraph(parsedParagraph);
      setListItems(parsedListItems);
    }
  }, [content]);

  return (
    <>
      <div className="flex flex-col gap-12 items-center justify-center relative px-4 sm:px-8 md:px-16 lg:px-[90px] py-16">
        {/* <div dangerouslySetInnerHTML={{__html:data?.content?.[0]?.page_content}}></div> */}
        <div className="flex flex-col items-start gap-4 md:gap-8 w-full">
          <h2 className="text-center font-bold text-[#0D2D63] text-3xl md:text-5xl w-full">
            {title}
          </h2>
          {mainContent?.heading && (
            <h3 className="md:text-[20px] text-[20px] md:leading-[43px] leading-[30px] font-bold text-[#0D2D63] mb-4 font-body">
              {mainContent?.heading || ""}
            </h3>
          )}

          {mainContent?.subheading && (
            <h4 className="md:text-[15px] text-[15px] md:leading-[43px] leading-[20px] font-bold text-[#0D2D63] mb-4 font-body">
              {mainContent?.subheading || ""}
            </h4>
          )}
          <p className="text-center font-sans font-normal text-black text-[16px] leading-[28px]">
            {paragraph}
          </p>
        </div>

        {/* Image */}
        {mainContent?.image && (
          <div className="w-full">
            <Image
              src={`${apiPath}/storage/${mainContent?.image}`}
              alt="Client and Lawyer"
              width={800}
              height={600}
              className="rounded-md object-cover w-full h-auto"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-4 justify-center w-full">
          {listItems.map(
            (item, index) =>
              item && (
                <button
                  key={index}
                  onClick={handleNavigateContact}
                  className="border border-black text-[18px] font-[600] font-sans  rounded-full duration-400 cursor-pointer px-[32px] py-[16px] text-black hover:border-[#56B3B1] hover:bg-[#56B3B1] hover:text-white transition-all"
                >
                  {item}
                </button>
              )
          )}
        </div>
        {mainContent?.button_1 && (
          <button className="bg-[#1C4A87] text-white px-6 py-4 rounded-full font-medium font-sans hover:bg-[#56B3B1] font-sans cursor-pointer transition">
            <Link
              href={mainContent?.button_1_url ? mainContent?.button_1_url : "#"}
              target="_blank"
            >
              {mainContent?.button_1 || ""}
            </Link>
          </button>
        )}

        {/* <div className="flex flex-col items-start gap-4 md:gap-8 w-full">
        <div className="text-center md:text-left font-sans font-bold text-black text-3xl md:text-5xl">
          Our Services
        </div>
        <p className="text-justify font-body font-normal text-black text-sm md:text-base leading-6 md:leading-[22px]">
          At Empowering Legal Solutions, we provide comprehensive corporate
          legal services designed to support founders, business owners,
          investors, and stakeholders across the U.S. We specialize in Mergers
          &amp; Acquisitions (M&amp;A) and serve as trusted legal advisors for
          every step of your business journey, whether you’re incorporating,
          raising your Series B, negotiating a critical joint GTM deal, or
          preparing for a sale of a company.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center w-full mb-6 md:mb-10">
        <button
          className="box-border w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-solid border-black font-body font-normal text-black text-xs sm:text-sm"
          onClick={handleNavigateContact}
        >
          Hire for a Fixed Fee
        </button>
        <button
          className="box-border w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-solid border-black font-body font-normal text-black text-xs sm:text-sm"
          onClick={handleNavigateContact}
        >
          Hire on an Hourly Rate
        </button>
        <button
          className="box-border w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-solid border-black font-body font-normal text-black text-xs sm:text-sm"
          onClick={handleNavigateContact}
        >
          Hire on Subscription Basis
        </button>
        <button
          className="box-border w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-solid border-black font-body font-normal text-black text-xs sm:text-sm"
          onClick={handleNavigateContact}
        >
          Discuss Alternative Arrangements
        </button>
      </div> */}
        {data?.content?.length > 1 &&
          data?.content?.slice(1).map((section: any, index: number) => (
            <div
              key={index}
              className="max-w-7xl mx-auto  items-center text-center md:items-start md:text-start"
            >
              {/* Image */}
              {section?.image && (
                <div className="w-full">
                  <Image
                    src={`${apiPath}/storage/${section?.image}`}
                    alt="Client and Lawyer"
                    width={800}
                    height={600}
                    className="rounded-md object-cover w-full h-auto"
                  />
                </div>
              )}

              {/* Text Content */}
              <div>
                <h2 className="md:text-[30px] text-[25px] md:leading-[43px] leading-[40px] font-bold text-[#0D2D63] mb-4 font-body">
                  {section?.section_heading || ""}
                </h2>
                {section?.heading && (
                  <h3 className="md:text-[20px] text-[20px] md:leading-[43px] leading-[30px] font-bold text-[#0D2D63] mb-4 font-body">
                    {section?.heading || ""}
                  </h3>
                )}

                {section?.subheading && (
                  <h4 className="md:text-[15px] text-[15px] md:leading-[43px] leading-[20px] font-bold text-[#0D2D63] mb-4 font-body">
                    {section?.subheading || ""}
                  </h4>
                )}
                {section?.page_content && (
                  <div
                    className="text-black mt-2 font-sans leading-5 services-details-content"
                    dangerouslySetInnerHTML={{
                      __html:
                        section?.page_content || "<p> Add content here!</p>",
                    }}
                  />
                )}

                {section?.button_1 && (
                  <button className="bg-[#1C4A87] text-white px-6 py-4 rounded-full font-medium font-sans hover:bg-[#56B3B1] font-sans cursor-pointer transition">
                    <Link
                      href={section?.button_1_url ? section?.button_1_url : "#"}
                      target="_blank"
                    >
                      {section?.button_1 || ""}
                    </Link>
                  </button>
                )}

                {section?.button_2 && (
                  <button className="bg-[#1C4A87] text-white px-6 py-4 rounded-full font-medium font-sans hover:bg-[#56B3B1] font-sans cursor-pointer transition">
                    <Link
                      href={section?.button_2_url ? section?.button_2_url : "#"}
                      target="_blank"
                    >
                      {section?.button_2 || ""}
                    </Link>
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CTA;
