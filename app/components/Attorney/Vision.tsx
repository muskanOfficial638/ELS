import React from "react";
// import Image from "next/image";
import Link from "next/link";

const Vision: React.FC = () => {
  return (
    <section className="md:pt-16 px-4">
      {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:px-[90px] pb-10 sm:pb-0"> */}
      <div className="max-w-7xl mx-auto h-auto px-4">
        <h2 className="font-body relative self-stretch font-bold text-[#052b64] text-xl sm:text-[32px]  leading-[36px] sm:leading-[48px]">
          Syeda&apos;s vision
        </h2>
        <p className="font-sans relative self-stretch text-black leading-[28px]">
          Driven by a passion for making high-impact corporate legal advice
          accessible, Syeda authored &quot;Sell Your Start-Up: A Founder&apos;s
          Guide to Navigate and Win at M&A&quot; available on{" "}
          <Link
            className="underline text-blue-700"
            href={
              "https://www.amazon.com/Sell-Your-Start-Up-Founders-Navigate/dp/B0DQVK6151"
            }
            target="_blank"
          >
            Amazon
          </Link>
          . Her approach at Empowering Legal Solutions combines smart use of
          technology, bespoke staffing, and flexible pricing to deliver
          innovative legal solutions.
        </p>
      </div>
      {/* <div className="flex flex-col mt-10 md:mt-0 lg:mt-0  p-4  text-center">
          <Image
            className="md:w-[445.78570556640625px] sm:w-[305px] md:h-[324px] h-[222px] md:mt-6 mt-0 object-cover"
            alt="Frame"
            src={"/attorney-4.jpg"}
            width={1000}
            height={500}
          />
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Vision;
