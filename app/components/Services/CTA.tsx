/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface serviceProps {
  data: any;
}

const CTA: React.FC<serviceProps> = ({ data }) => {
  const router = useRouter();
  const handleNavigateContact = () => {
    router.push("/contact-us");
  };

  const content = data?.content?.[0]?.page_content || "";

  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [listItems, setListItems] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && content) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(content, "text/html");

      const parsedTitle = htmlDoc.querySelector("summary")?.textContent?.trim() ?? "";
      const parsedParagraph = htmlDoc.querySelector("details p")?.textContent?.trim() ?? "";
      const parsedListItems = Array.from(htmlDoc.querySelectorAll("ul li")).map((li) =>
        li.textContent?.trim() ?? ""
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
          <h2 className="text-center md:text-left font-sans font-bold text-black text-3xl md:text-5xl">
            {title}
          </h2>
          <p className="text-justify font-body font-normal text-black text-sm md:text-base leading-6 md:leading-[22px]">
            {paragraph}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-4 justify-center w-full">
          {listItems.map(
            (item, index) =>
              item && (
                <button
                  key={index}
                  onClick={handleNavigateContact}
                  className="border border-black rounded-full cursor-pointer px-6 py-3 text-sm md:text-base text-black hover:bg-[#56B3B1] hover:text-white transition-all"
                >
                  {item}
                </button>
              )
          )}
        </div>
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
      </div>
    </>
  );
};

export default CTA;
