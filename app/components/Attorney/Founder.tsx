"use client";
import Image from "next/image";

const Founder: React.FC = () => {
  return (
    <section className="md:pt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-6 sm:px-[90px] pb-10 sm:pb-0">
        <div className="sm:gap-6 order-2 md:order-1 lg:order-1 md:w-[60%]">
          <h2 className="font-body relative self-stretch font-bold text-[#052b64] text-xl sm:text-[32px] leading-[36px] sm:leading-[48px]">
            About
          </h2>
          <p className="font-sans relative self-stretch text-black leading-[28px]">
            <span className="font-semibold">Syeda Nazifa Nawroj,</span> Esq. is
            an experienced corporate lawyer based in Silicon Valley, dedicated
            to empowering business owners, founders, and investors. Over nearly
            a decade, she has guided small to mid-sized private companies
            through every stage of their lifecycle, from formation to strategic
            market exit. Syeda specializes in corporate governance and complex
            transactions, including entity formation, equity financings,
            commercial deals, and Mergers & Acquisitions (M&A). She brings a
            unique perspective, having closed over 35 M&A deals with a total
            transaction value nearing $3 billion prior to founding ELS.
          </p>
        </div>
        <div className="mt-10 md:mt-0 lg:mt-0 order-1 md:order-2 lg:order-2 p-4 shadow-xl text-center">
          <Image
            className="md:w-[445.78570556640625px] sm:w-[305px] md:h-[250px] h-[150px] md:mt-6 mt-0 object-cover"
            alt="Frame"
            src={"/attorney-1.jpg"}
            // src={Author}
            // src={`${apiPath}${imageUrl}`}
            width={1000}
            height={500}
          />
          <h3 className="font-body text-[#052b64] font-bold text-2xl mt-2">
            Syeda Nazifa Nawroj, Esq.
          </h3>
          <p className="font-sans text-[#000] text-[16px] sm:text-[16px] lg:text-[18px] leading-8 sm:leading-9 lg:leading-[48px]">
            Founder & Principal Attorney
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
