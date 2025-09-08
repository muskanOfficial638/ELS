import Link from "next/link";
import {
  FaUsers,
  FaBriefcase,
  FaLightbulb,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

const CorporateTransaction = () => {
  return (
    <section className="bg-[#EEF6FF] py-16 px-2 text-center">
      {/* Title & Subtitle */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2B66] mb-4">
        Our Core Legal Solutions
      </h2>
      <p className="max-w-2xl mx-auto text-black text-base sm:text-lg mb-12 font-sans leading-[28px]">
        Empowering Legal Solutions offers a comprehensive suite of services
        designed to support businesses across various legal needs. Explore our
        key practice areas below:
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <Link href={"/services/corporate-counsel-for-growing-companies"}>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-colors duration-300 group hover:bg-[#0B2B66]">
            <div className="bg-[#0B2B66] text-white w-12 h-12 flex items-center justify-center rounded-full mb-4 group-hover:text-[#0B2B66] group-hover:bg-white">
              <FaBriefcase size={24} />
            </div>
            <h3 className="font-semibold text-lg text-[#0B2B66] mb-2 group-hover:text-white">
              General Corporate
            </h3>
            <p className="text-black group-hover:text-white font-sans leading-[28px]">
              Corporate Counsel for Growing Companies
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/services/ma-legal-counsel-for-strategic-growth">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center group hover:bg-[#0B2B66] transition-colors duration-300">
            <div className="bg-[#0B2B66] text-white w-12 h-12 flex items-center justify-center rounded-full mb-4 group-hover:text-[#0B2B66] group-hover:bg-white">
              <FaBuildingColumns size={24} />
            </div>
            <h3 className="font-semibold text-lg text-[#0B2B66] mb-2 group-hover:text-white">
              Mergers & Acquisitions
            </h3>
            <p className="text-black group-hover:text-white font-sans leading-[28px]">
              M&A Legal Counsel for Strategic Growth
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="/services/protecting-innovation-and-personal-data">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-colors duration-300 group hover:bg-[#0B2B66]">
            <div className="bg-[#0B2B66] text-white w-12 h-12 flex items-center justify-center rounded-full mb-4 group-hover:text-[#0B2B66] group-hover:bg-white">
              <FaLightbulb size={24} />
            </div>
            <h3 className="font-semibold text-lg text-[#0B2B66] mb-2 group-hover:text-white">
              Intellectual Property & Privacy
            </h3>
            <p className="text-black group-hover:text-white font-sans leading-[28px]">
              Protecting Innovation and Personal Data
            </p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-4">
        {/* Card 4 */}
        <Link
          href={
            "/services/legal-guidance-for-startup-and-business-capital-raises"
          }
        >
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-colors duration-300 group hover:bg-[#0B2B66]">
            <div className="bg-[#0B2B66] text-white w-12 h-12 flex items-center justify-center rounded-full mb-4 group-hover:text-[#0B2B66] group-hover:bg-white">
              <FaHandHoldingUsd size={24} />
            </div>
            <h3 className="font-semibold text-lg text-[#0B2B66] mb-2 group-hover:text-white">
              Fundraising
            </h3>
            <p className="text-black group-hover:text-white font-sans leading-[28px]">
              Legal Guidance for Startup and Business Capital Raises
            </p>
          </div>
        </Link>

        {/* Card 5 */}
        <Link href={"/services/legal-counsel-for-mission-driven-nonprofits"}>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center group hover:bg-[#0B2B66] transition-colors duration-300">
            <div className="bg-[#0B2B66] text-white w-12 h-12 flex items-center justify-center rounded-full mb-4 group-hover:text-[#0B2B66] group-hover:bg-white">
              <FaUsers size={24} />
            </div>
            <h3 className="font-semibold text-lg text-[#0B2B66] mb-2 group-hover:text-white">
              Nonprofit
            </h3>
            <p className="text-black group-hover:text-white font-sans leading-[28px]">
              Legal Counsel for Mission-Driven Nonprofits
            </p>
          </div>
        </Link>
      </div>

      {/* CTA Button */}
      {/* <div className="mt-12">
        <button className="bg-[#1C4A87] text-[18px] font-[600] font-sans text-white rounded-full duration-400 px-[32px] py-[16px] cursor-pointer hover:bg-[#56B3B1]">
          Learn More About Corporate Law
        </button>
      </div> */}
    </section>
  );
};

export default CorporateTransaction;
