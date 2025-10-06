/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchScheduleConsultation } from "@/app/utils/api";
import { apiPath } from "@/app/utils/api-path";
// import { Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function NotarizationSection({
  section,
  slug,
  title,
}: any) {
  const scheduleData = await fetchScheduleConsultation();
  const parsedItems = JSON.parse(scheduleData[0]?.items);

  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center text-center md:items-start md:text-start">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-4 order-2 md:order-1 lg:order-1">
            <Link
              href={slug}
              className="font-body mb-4 text-sm tracking-[0.8px] sm:tracking-[0.7px] hover:underline"
            >
              Service / {title}
            </Link>
            {section?.section_heading && (
              <h2 className="md:text-[30px] text-[25px] md:leading-[43px] leading-[40px] font-bold text-[#0D2D63] font-body">
                {/* Reliable and Professional <br />
            Notarization Services */}
                {section?.section_heading || ""}
              </h2>
            )}

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

            <div
              className="text-black font-sans mb-[25px] leading-[28px]"
              dangerouslySetInnerHTML={{
                __html: section?.description || "<p> Add content !</p>",
              }}
            />
            {section?.button_1 && (
              <button className=" bg-[#1C4A87] text-white text-[18px] font-[600] font-sans px-[32px] py-[16px]  rounded-full transition-colors duration-400 hover:bg-[#56B3B1] cursor-pointer">
                {/* Get Legal Help Now */}
                <Link
                  href={section?.button_1_url ? section?.button_1_url : "#"}
                  target="_blank"
                >
                  {section?.button_1}
                </Link>
              </button>
            )}

            {section?.button_2 && (
              <button className=" bg-[#1C4A87] text-white text-[18px] font-[600] font-sans px-[32px] py-[16px]  rounded-full transition-colors duration-400 hover:bg-[#56B3B1] cursor-pointer">
                {/* Get Legal Help Now */}
                <Link
                  href={section?.button_2_url ? section?.button_2_url : "#"}
                  target="_blank"
                >
                  {section?.button_2}
                </Link>
              </button>
            )}
          </div>

          {/* Sidebar */}
          <div className="border border-[#E3E7F4] rounded-[5px]  md:px-[28px] md:py-[38px] px-[18px] py-[30px] order-1 md:order-2 lg:order-2">
            <h3 className="md:text-[25px] text-[23px] text-left font-bold text-[#0D2D63] mb-[30px] font-body ">
              {scheduleData[0]?.title}
            </h3>

            <div className="space-y-4">
              {parsedItems?.map((item: any, index: number) => (
                <div key={index}>
                  <div className="flex text-left text-black items-center gap-3">
                    <img
                      src={`${apiPath}/storage/${item?.image}`}
                      alt="schedule image"
                      className="h-6 w-6"
                    />
                    {index !== 1 && (
                      <Link
                        href={item.url}
                        className="font-sans text-[18px] hover:text-[#45B29A]"
                      >
                        {item?.text}
                      </Link>
                    )}
                    {index == 1 && (
                      <div className="font-sans text-[18px] hover:text-[#45B29A]">
                        {item?.text}
                      </div>
                    )}
                  </div>
                  {index !== parsedItems?.length - 1 && (
                    <hr className="border-gray-200 mt-4" />
                  )}
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
            {scheduleData[0]?.description && (
              <div
                className="mt-[30px] leading-[28px] text-black text-left font-sans"
                dangerouslySetInnerHTML={{
                  __html: scheduleData[0]?.description,
                }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
