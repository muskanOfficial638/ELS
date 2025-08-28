/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchScheduleConsultation } from "@/app/utils/api";
import { apiPath } from "@/app/utils/api-path";
// import { Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";

export default async function NotarizationSection({ section }: any) {
  const scheduleData = await fetchScheduleConsultation();
  const parsedItems = JSON.parse(scheduleData[0]?.items);
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center text-center md:items-start md:text-start">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-4 order-2 md:order-1 lg:order-1">
          <h2 className="md:text-[30px] text-[25px] md:leading-[43px] leading-[40px] font-bold text-[#0D2D63] font-body">
            {/* Reliable and Professional <br />
            Notarization Services */}
            {section?.section_heading}
          </h2>
          {/* <h2 className="text-2xl sm:text-4xl font-bold text-[#0D2D63] md:hidden lg:hidden block font-body">
            Reliable and Professional Notarization Services
          </h2> */}
          {/* <h3 className="text-2xl text-black font-body">
            Document Notarization
          </h3>
          <p className="text-black font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-[#0D2D63] font-body">
              What is Document Notarization?
            </h3>
            <p className="text-black mt-2 font-sans">
              Lorem ipsum is a placeholder text commonly used in graphic design,
              publishing, and web development to occupy space in layouts where
              the final content is not yet available. Its nonsensical structure
              helps focus attention on design elements rather than the content
              itself.
            </p>
          </div> */}
          <div
            className="text-black font-sans mb-[25px] leading-[28px]"
            dangerouslySetInnerHTML={{ __html: section?.description }}
          />

          <button className=" bg-[#1C4A87] text-white text-[18px] font-[600] font-sans px-[32px] py-[16px]  rounded-full transition-colors duration-400 hover:bg-[#56B3B1] cursor-pointer">
            {/* Get Legal Help Now */}
            <Link href={section?.button_1_url} target="_blank">
              {section?.button_1}
            </Link>
          </button>
        </div>

        {/* Sidebar */}
        <div className="border border-[#E3E7F4] rounded-[5px]  md:px-[28px] md:py-[38px] px-[18px] py-[30px] order-1 md:order-2 lg:order-2">
          <h3 className="md:text-[25px] text-[23px] text-left font-bold text-[#0D2D63] mb-[30px] font-body ">
            {scheduleData[0]?.title}
          </h3>

          <div className="space-y-4">
            {parsedItems?.map((item: any, index: number) => (
              <div key={index}>
                {index === 1 ? (
                  // No link for second item
                  <div className="flex text-left text-black items-center gap-3">
                    <img
                      src={`${apiPath}/storage/${item?.image}`}
                      alt="schedule image"
                      className="h-6 w-6"
                    />
                    <div className="font-sans text-[18px]">{item?.text}</div>
                  </div>
                ) : (
                  // Link for first and third items
                  <Link
                    href={
                      index === 0
                        ? "mailto:contact@empowering.legal"
                        : index === 2
                        ? "https://sellyourstartup.com/"
                        : "#"
                    }
                    className="flex text-left text-black duration-400 hover:text-[#45B29A] items-center gap-3"
                  >
                    <img
                      src={`${apiPath}/storage/${item?.image}`}
                      alt="schedule image"
                      className="h-6 w-6"
                    />
                    <div className="font-sans text-[18px]">{item?.text}</div>
                  </Link>
                )}
                {index !== 2 && <hr className="border-gray-200 mt-4" />}
              </div>
            ))}
          </div>

          {/* <div className="space-y-4">
            <Link
              href="mailto:contact@empowering.legal"
              className="flex text-left text-black duration-400 hover:text-[#45B29A] items-center gap-3 duration-400"
            >
              <Mail className="text-[#56B3B1]" size={24} />
              <div className="  font-sans md-text-[20px] text-[17px]">
                contact@empowering.legal
              </div>
            </Link>
            <hr className="border-gray-200" />
            <div className="flex text-left items-center gap-3 text-black ">
              <MapPin className="text-[#56B3B1]" size={24} />
              <p className="font-sans md:text-[20px] text-[17px] ">
                San Francisco Bay Area, California
              </p>
            </div>
            <hr className="border-gray-200" />
            <Link
              href="https://sellyourstartup.com/"
              target="_blank"
              className="flex text-left  items-center text-black hover:text-[#45B29A] gap-3 duration-400"
            >
              <Globe className="text-[#56B3B1]" size={24} />
              <div className=" font-sans md:text-[20px] text-[17px]">
                sellyourstartup.com
              </div>
            </Link>
          </div> */}

          <div
            className="mt-[30px] leading-[28px] text-black text-left font-sans"
            dangerouslySetInnerHTML={{ __html: scheduleData[0]?.description }}
          />
        </div>
      </div>
    </section>
  );
}
