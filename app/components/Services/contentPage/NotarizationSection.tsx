/* eslint-disable @typescript-eslint/no-explicit-any */
import { Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";

export default function NotarizationSection({ section }: any) {
  // console.log("section1", section);
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-center text-center md:items-start md:text-start">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-4 order-2 md:order-1 lg:order-1">
          <h2 className="text-3xl sm:text-3xl font-bold text-[#0D2D63] font-body">
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
          <div className="text-black mt-2 font-sans" dangerouslySetInnerHTML={{__html:section?.description}}/>

          <button className="mt-4 bg-[#1C4A87] text-white px-6 py-4 rounded-full font-medium font-sans hover:bg-[#56B3B1] font-sans cursor-pointer transition">
            {/* Get Legal Help Now */}
            <Link href={section?.button_1_url} target="_blank">
              {section?.button_1}
            </Link>
          </button>
        </div>

        {/* Sidebar */}
        <div className="border rounded-lg shadow-sm border-gray-200 p-6 order-1 md:order-2 lg:order-2">
          <h3 className="text-xl font-semibold text-[#0D2D63] mb-4 font-body">
            Schedule Consultation:
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="text-[#56B3B1]" size={20} />
              <p className="text-black text-[15px] md:text-[16px]">
                contact@empowering.legal
              </p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-start gap-3">
              <MapPin className="text-[#56B3B1]" size={20} />
              <p className="text-black text-[14px] md:text-[16px]">
                San Francisco Bay Area, California
              </p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-start gap-3">
              <Globe className="text-[#56B3B1]" size={20} />
              <p className="text-black text-[15px] md:text-[16px]">
                sellyourstartup.com
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-black text-left font-sans">
            Laoreet eu auctor non dignissim id arcu amet tristique ipsum. Eu at
            amet adipiscing egestas quis risus aliquam volutpat.
          </p>
        </div>
      </div>
    </section>
  );
}
