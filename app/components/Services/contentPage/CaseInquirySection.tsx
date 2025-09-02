/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiPath } from "@/app/utils/api-path";
import Image from "next/image";
import Link from "next/link";

export default function CaseInquirySection({ allServiceData }: any) {
  // console.log("allServiceData", allServiceData);
  return (
    <section className="pb-16 px-4 bg-white">
      {allServiceData?.slice(1).map((section: any, index: number) => (
        <div
          key={index}
          className="max-w-7xl mx-auto  items-center text-center md:items-start md:text-start"
        >
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

          {/* Text Content */}
          <div>
            <h2 className="md:text-[30px] text-[25px] md:leading-[43px] leading-[40px] font-bold text-[#0D2D63] mb-4 font-body">
              {/* Do You Think You Have A Case? */}
              {section?.section_heading || ""}
            </h2>
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
            <div
              className="text-black mt-2 font-sans leading-5 services-details-content"
              dangerouslySetInnerHTML={{
                __html: section?.description || "<p> Add content !</p>",
              }}
            />
            {section?.button_1 && (
              <button className="bg-[#1C4A87] text-white px-6 py-4 rounded-full font-medium font-sans hover:bg-[#56B3B1] font-sans cursor-pointer transition">
                <Link
                  href={section?.button_1_url ? section?.button_1_url : "#"}
                  target="_blank"
                >
                  {section?.button_1 || ""}
                </Link>
              </button>
            )}

            {section?.button_2 && (
              <button className="bg-[#1C4A87] text-white px-6 py-4 rounded-full font-medium font-sans hover:bg-[#56B3B1] font-sans cursor-pointer transition">
                <Link
                  href={section?.button_2_url ? section?.button_2_url : "#"}
                  target="_blank"
                >
                  {section?.button_2 || ""}
                </Link>
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
