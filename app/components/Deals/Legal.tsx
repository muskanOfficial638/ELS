/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

interface DealsProps {
  data: any;
}

const Legal: React.FC<DealsProps> = ({ data }) => {
  // const Legal: React.FC = () => {

  return (
    <div className="flex flex-col gap-12 items-center justify-center relative px-6 sm:px-16 lg:px-[90px] py-16">
      <div
        dangerouslySetInnerHTML={{ __html: data?.content?.[0]?.page_content }}
      ></div>
      {/* <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] font-sans font-bold text-black text-4xl tracking-[0] leading-[normal]">
          Deals
        </div>
        <div className="relative self-stretch text-justify font-sans font-bold text-black text-2xl tracking-[0] leading-[22px]">
          Legal Scale LLP
        </div>
        <p className="relative self-stretch text-justify font-body font-normal text-black text-base tracking-[0] leading-[22px]">
          DNR Business Solutions, a private retail software start-up in
          California, in its substantially all asset sale to SurgePays, a
          fintech public company.
        </p>
      </div> */}
    </div>
  );
};

export default Legal;
