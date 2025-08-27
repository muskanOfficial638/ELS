"use client";
// import React, { useEffect, useState } from "react";
// import { MenuImage } from "../../assets";
import { logCustomEvent } from "../../utils/firebase";
import Image from "next/image";

// type MenuSectionProps = {
//   data: any;
// };

const MenuSection: React.FC = () => {
  // const MenuSection: React.FC<MenuSectionProps> = ({ data }) => {
  // console.log("page content",data?.page_content)
  const handleNavigateAmazon = () => {
    window.open(
      "https://www.amazon.com/Sell-Your-Start-Up-Founders-Navigate-ebook/dp/B0D42HRP81/ref=sr_1_1?crid=39NX7QJYTXK4X&dib=eyJ2IjoiMSJ9.ELYXaUxyBzZ85DZSpnzi_A._1HQ6huNcAPNX5zttlFvuq4DotUh50Yyl1PjcZmvByI&dib_tag=se&keywords=sell+your+start-up+syeda+nawroj&qid=1727299851&sprefix=%2Caps%2C132&sr=8-1"
    );
    logCustomEvent("Buy Book");
  };
  //   const [textHtml, setTextHtml] = useState("");
  //     const [imageUrl, setImageUrl] = useState("");

  //  useEffect(() => {
  //     if (!data?.page_content) return;

  //     // Parse the HTML string
  //     const parser = new DOMParser();
  //     const doc = parser.parseFromString(data.page_content, "text/html");

  //     // Extract image URL
  //     const imgElement = doc.querySelector("img");
  //     const imgSrc = imgElement?.getAttribute("src") || "";

  //     // Remove the column containing the image
  //     imgElement?.closest(".filament-tiptap-grid-builder__column")?.remove();

  //     // Get the remaining text content
  //     const textContent = doc.body.innerHTML;

  //     // Update state
  //     setImageUrl(imgSrc);
  //     setTextHtml(textContent);
  //   }, [data]);

  return (
    <section className="px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[100px] relative px-4 lg:px-[90px]">
        <div className="flex flex-col items-start w-full lg:w-[45%] gap-6 order-2 md:order-1 lg:order-1">
          {/* <div dangerouslySetInnerHTML={{ __html: textHtml }} /> */}
          <p className="font-body font-bold text-2xl lg:text-[32px] tracking-wide lg:tracking-[1.20px] leading-tight lg:leading-[48px]">
            What’s the best on the menu?
          </p>
          <p className="font-body font-normal text-black text-sm lg:text-base leading-5 lg:leading-6">
            We are a sweetheart for micro (&lt;$10MN) and small (&lt;$100MN)
            sized mergers & acquisitions (M&A) transactions. No one does it
            quite like we do. We love to fight and win at M&A for the start-up
            founder, so our founder wrote a book about it. You can purchase her
            book on Amazon marketplace.
          </p>
          <button
            className="mt-3 px-6 lg:px-8 py-3 lg:py-4 bg-[#1C4A87] text-white cursor-pointer hover:bg-[#56B3B1] text-white rounded-full font-sans"
            onClick={handleNavigateAmazon}
          >
            Buy Book
          </button>
        </div>
        {/* {imageUrl && ( */}
        <div className="flex flex-col mt-10 md:mt-0 lg:mt-0 order-1 md:order-2 lg:order-2">
          <Image
            className="relative w-full lg:w-[500px] h-auto"
            alt="Frame"
            src="/menu_section.png"
            // src={`http://192.168.1.2:8000${imageUrl}`}
            width={300}
            height={100}
          />
          {/* )}  */}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
