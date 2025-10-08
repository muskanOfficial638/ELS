/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { apiPath } from "@/app/utils/api-path";
// import { logCustomEvent } from "../../utils/firebase";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  sliderData: any[];
}

const HeroSection: React.FC<Props> = ({ sliderData }) => {
  //For desktop title
  // const insertLineBreaks = (text: string, wordsPerLine = 5) => {
  //   if (!text) return [];
  //   const words = text?.split(" ");
  //   return words
  //     .reduce((acc: any, word: string, index: number) => {
  //       const isBreak = (index + 1) % wordsPerLine === 0;
  //       acc.push(word);
  //       if (isBreak) acc.push("<br />");
  //       return acc;
  //     }, [])
  //     .join(" ");
  // };

  // For mobile title
  const splitTitleIntoLines = (title: string) => {
    if (!title) return [];

    // Customize this split to match the correct groupings
    const words = title?.split(" ");
    return [
      words.slice(0, 2).join(" "), // Empowering You
      words.slice(2, 5).join(" "), // and Your Business
      words.slice(5, 8).join(" "), // with Expert Legal
      words.slice(8, 10).join(" "), // Solutions and
      words.slice(10).join(" "), // Strategic Counsel
    ];
  };

  return (
    <>
      {sliderData?.map((heroData: any) => (
        <section
          key={heroData?.id}
          className="relative w-full flex items-start md:items-center justify-center"
        >
          <Image
            src={`${apiPath}/storage/${heroData?.image}`}
            alt="Hero background"
            className="inset-0 w-full md:h-[647px] h-[501px] opacity-95 object-cover"
            width={1440}
            height={700}
          />

          {/* Overlay */}
          <div className="absolute inset-0 md:h-[647px] h-[501px] bg-gradient-to-b bg-[#0D2D638C] bg-opacity-40 z-0" />
          <div
            className="absolute z-10 text-white text-center px-4 md:mt-0 lg:mt-0 top-[50%] left-[50%] w-full"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* desktop heading */}
            {/* <h1 className="font-body md:text-[60px] text-[40px] font-bold tracking-[0.8px] sm:tracking-[0.8px] whitespace-nowrap hidden md:block lg:block"> 
           Empowering You and Your Business <br /> with Expert Legal Solutions
          and <br />
          Strategic Counsel 
            </h1> */}
            <h1
              className="font-body md:text-[60px] text-[40px] font-bold tracking-[0.8px] sm:tracking-[0.8px] hidden md:block lg:block"
              // dangerouslySetInnerHTML={{
              //   __html: insertLineBreaks(heroData?.title, 5),
              // }}
            >
              {heroData?.title}
            </h1>
            {/* mobile heading */}
            {/* <h1 className="font-body text-[30px] font-bold tracking-[0.8px] whitespace-nowrap md:hidden lg:hidden">
            Empowering You <br />
          and Your Business <br /> with Expert Legal <br /> Solutions and <br />
          Strategic Counsel 
            </h1>*/}
            <h1 className="font-body text-[30px] font-bold tracking-[0.8px] whitespace-nowrap md:hidden lg:hidden">
              {splitTitleIntoLines(heroData?.title)?.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            {heroData?.subtitle && (
              <p className="font-body mt-4 text-sm tracking-[0.8px] sm:tracking-[0.7px]">
                {heroData?.subtitle || ""}
              </p>
            )}
            <p className="font-body mt-4 text-sm md:text-2xl tracking-[0.8px] sm:tracking-[0.7px]">
              {/* Ready to Build or Scale Your Legal Foundation? */}
              {heroData?.content || ""}
            </p>
            <Link
              href={heroData?.button_url ? heroData?.button_url : "#"}
              target="_blank"
            >
              <button className="cursor-pointer font-sans text-[18px] font-[600] duration-400 mt-6 px-[32px] py-[16px] bg-white hover:bg-[#0D2D63] hover:text-white text-[#0D2D63] rounded-full text-sm sm:text-base">
                {/* Consult Now */}
                {heroData?.button_text || ""}
              </button>
            </Link>
          </div>
        </section>
      ))}
    </>
  );
};

export default HeroSection;
