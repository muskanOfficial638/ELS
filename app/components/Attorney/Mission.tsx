"use client";
import React from "react";
import { StartupBanner } from "../../assets";
import Image from "next/image";
import Link from "next/link";

const Mission: React.FC = () => {
  // const handleNavigateAmazon = () => {
  //   window.open("https://a.co/d/0CsdsPh");
  // };

  const handleNavigateLinkedin = () => {
    window.open("https://www.linkedin.com/in/syeda-nazifa-nawroj/");
  };

  return (
    <section className="md:py-16 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6 sm:px-[90px] pb-10 sm:pb-0">
        <div className="text-center md:text-left flex flex-col md:w-[60%] gap-4 sm:gap-6 md:order-1 lg:order-1">
          <h2 className="font-body relative self-stretch font-bold text-[#0D2D63] text-xl sm:text-[32px] leading-[36px] sm:leading-[48px]">
            Contact
          </h2>
          <p className="font-sans text-black leading-[28px]">
            <span className="font-semibold">● LinkedIn</span> :
            <span
              onClick={handleNavigateLinkedin}
              className="cursor-pointer hover:underline"
            >
              https://www.linkedin.com/in/syeda-nazifa-nawroj/
            </span>
          </p>
          <p className="font-sans text-black leading-[28px]">
            <span className="font-semibold">● Email</span> :{" "}
            <a href="mailto:contact@empowering.legal">
              contact@empowering.legal
            </a>
          </p>
          <p className="font-sans text-black leading-[28px]">
            <Link
              href="https://app.lawmatics.com/forms/share/1deea1d5-aaf5-4485-bf02-edb7958361ee"
              target="_blank"
              className="font-semibold underline"
            >
              Book a Free Consultation
            </Link>
          </p>
          {/* <button
            className="mt-3 px-6 py-3 sm:px-8 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-body"
            onClick={handleNavigateAmazon}
          >
            Buy the Book
          </button> */}
        </div>
        <div className="flex flex-col mt-10 md:mt-0 lg:mt-0 md:order-2 lg:order-2 text-center">
          <Image
            className="md:w-[445.78570556640625px] sm:w-[305px] md:h-[300px] h-[200px] md:mt-6 mt-0 object-cover"
            alt="Frame"
            src={StartupBanner}
          />
        </div>
      </div>

      {/* <div className="flex flex-col sm:flex-row justify-center gap-5 w-[60%] sm:w-full mx-auto sm:gap-[20px] mt-10 mb-10">
        <button
          className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-body"
          onClick={handleNavigateLinkedin}
        >
          Connect on LinkedIn
        </button>
        <a
          href="mailto:contact@empowering.legal"
          className="px-6 py-3 sm:px-8 sm:py-4 border border-black border-solid text-black rounded-full cursor-pointer font-body text-center"
        >
          Send an Email
        </a>
      </div> */}
    </section>
  );
};

export default Mission;
