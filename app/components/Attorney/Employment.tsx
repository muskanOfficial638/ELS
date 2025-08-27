import React from "react";
// import { Author3 } from "../../assets";
import Image from "next/image";

const Employment: React.FC = () => {
  return (
    <section className="md:pt-16 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6 sm:px-[90px] pb-10 sm:pb-0">
        <div className="flex flex-col mt-10 md:mt-0 lg:mt-0 order-1 p-4 shadow-xl text-center">
          <Image
            className="md:w-[445.78570556640625px] sm:w-[305px] md:h-[324px] h-[222px] md:mt-6 mt-0 object-cover"
            alt="Frame"
            src={"/attorney-3.jpg"}
            // src={`${apiPath}${imageUrl}`}
            // src={Author3}
            width={1000}
            height={500}
          />
        </div>
        <div className="text-center md:text-left flex flex-col md:w-[60%] gap-4 sm:gap-6 order-2">
          <p className="font-body relative self-stretch font-bold text-[#002147] text-xl sm:text-[32px] tracking-[0.8px] sm:tracking-[1.20px] lg:tracking-[1.20px] leading-[36px] sm:leading-[48px]">
            Work Experience
          </p>
          <p className="font-sans font-normal text-black text-sm sm:text-base tracking-[0.75px] sm:tracking-[1.00px] leading-5 sm:leading-6">
            <span className="font-semibold">
              ● Founder & Principal Attorney
            </span>{" "}
            – Empowering Legal Solutions (Current),{" "}
            <span>
              A law firm built to make high-impact corporate legal advice and
              services more accessible through an innovative combination of
              smart use of technology, bespoke staffing, and flexible pricing.
            </span>
          </p>

          <p className="font-sans font-normal text-black text-sm sm:text-base  tracking-[0.75px] sm:tracking-[1.00px] leading-5 sm:leading-6">
            <span className="font-semibold">● M&A Attorney</span> – Fenwick &
            West LLP,{" "}
            <span>
              Honed expertise in M&A, representing founders of technology and
              life sciences companies in strategic acquisitions during a high
              tide in private company M&A.
            </span>
          </p>

          <p className="font-sans font-normal text-black text-sm sm:text-base tracking-[0.75px] sm:tracking-[1.00px] leading-5 sm:leading-6">
            <span className="font-semibold">● Corporate Law Attorney</span> –
            DLA Piper LLP (US),{" "}
            <span>
              Began corporate law career at a global legal powerhouse, gaining
              best-in-class legal training.
            </span>
          </p>

          <p className="font-sans font-normal text-black text-sm sm:text-base tracking-[0.75px] sm:tracking-[1.00px] leading-5 sm:leading-6">
            <span className="font-semibold">● California Bar Profile</span> –{" "}
            <a
              target="_blank"
              href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/320124"
              className="hover:underline"
            >
              Syeda Nazifa Nawroj # 320124 - Attorney Licensee Search
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employment;
