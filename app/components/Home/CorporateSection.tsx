// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";

// type corporateSectionProps = {
//   data: any;
// };
// const CorporateSection: React.FC = () => {
// // const CorporateSection: React.FC<corporateSectionProps> = ({ data }) => {
//   // const [leftHtml, setLeftHtml] = useState("");
//   // const [items, setItems] = useState<string[]>([]);

//   // useEffect(() => {
//   //   const rawHtml = data?.page_content || "";

//   //   const parser = new DOMParser();
//   //   const doc = parser.parseFromString(rawHtml, "text/html");

//   //   // Get columns
//   //   const columns = doc.querySelectorAll(
//   //     ".filament-tiptap-grid-builder__column"
//   //   );

//   //   // Extract left text (title + description)
//   //   const leftContent = columns[0]?.innerHTML || "";
//   //   setLeftHtml(leftContent);

//   //   // Extract right side numbered items (1-5)
//   //   const rightParagraphs = columns[1]?.querySelectorAll("p") || [];
//   //   const cardItems: string[] = [];

//   //   rightParagraphs.forEach((p) => {
//   //     cardItems.push(p.innerHTML);
//   //   });

//   //   setItems(cardItems);
//   // }, [data]);

//   return (
//     <>
//       {/* <div dangerouslySetInnerHTML={{ __html: data?.page_content || '' }} />  */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-[100px] relative px-4 lg:px-[90px] mt-12 lg:mt-24 mb-12 lg:mb-20">
//       <div className="flex flex-col items-start w-full lg:w-[50%] gap-4 lg:gap-6">
//         <p className="font-sans font-bold text-[#000] text-[24px] lg:text-[32px] tracking-[1.00px] lg:tracking-[1.20px] leading-[32px] lg:leading-[48px]">
//           What is a Corporate Transaction?
//         </p>
//         <p className="font-body font-normal text-black text-sm lg:text-base text-justify tracking-[0.75px] lg:tracking-[1.00px] leading-5 lg:leading-6">
//           We specialize in negotiating and executing corporate transactions.
//           Basically, any time your business is making promises or entering into
//           an agreement with a director, stockholder, executive or a third party,
//           giving or taking money or transferring assets and liabilities, or
//           making any governance decisions, it’s a corporate transaction. That’s
//           what we do. These are often business transactions like:
//         </p>
//       </div>

//       <div className="flex flex-col lg:flex-row items-start gap-6 w-full lg:w-auto">
//         <div className="flex flex-col">
//           <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg w-full lg:w-80 h-auto mb-3">
//             <div className="flex flex-col">
//               <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//                 <span className="font-body text-white font-bold">1</span>
//               </div>
//               <p className="font-body text-sm mt-4 lg:mt-4">
//                 Funding a company (through angel investing, venture capital or
//                 debt, loans)
//               </p>
//             </div>
//           </div>

//           <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg w-full lg:w-80 h-auto mb-3">
//             <div className="flex flex-col">
//               <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//                 <span className="font-body text-white font-bold">2</span>
//               </div>
//               <p className="font-body text-sm mt-4 lg:mt-4">
//                 Establishing a company&apos;s director and stockholder rights
//                 and obligations
//               </p>
//             </div>
//           </div>

//           <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg w-full lg:w-80 h-auto mb-0 lg:mb-3">
//             <div className="flex flex-col">
//               <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//                 <span className="font-body text-white font-bold">3</span>
//               </div>
//               <p className="font-body text-sm mt-4 lg:mt-4">
//                 Changing a company&apos;s ownership (by selling nearly all
//                 assets, majority of voting stock or mergers)
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg w-full lg:w-52 h-auto mb-3">
//             <div className="flex flex-col">
//               <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//                 <span className="font-body text-white font-bold">4</span>
//               </div>
//               <p className="font-body text-sm mt-4 lg:mt-4 w-full lg:w-[122px]">
//                 Forming a company (determining its domicile, structure,
//                 founders&apos; stock and governance)
//               </p>
//             </div>
//           </div>
//           <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg w-full lg:w-52 h-auto mt-0 lg:mt-3">
//             <div className="flex flex-col">
//               <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//                 <span className="font-body text-white font-bold">5</span>
//               </div>
//               <p className="font-body text-sm mt-4 lg:mt-4 w-full lg:w-[150px]">
//                 Managing everyday legal operations (addressing legal issues as
//                 they come up, advising the board)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//       {/* <section className="px-4 lg:px-[90px] mt-12 lg:mt-24 mb-12 lg:mb-20">
//         <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-10">
//            Left content
//           <div className="w-full lg:w-1/2 prose max-w-none">
//             <div dangerouslySetInnerHTML={{ __html: leftHtml }} />
//           </div>

//           Right card items
//           <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {items.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-blue-500 text-white rounded-lg p-4 shadow-lg flex flex-col gap-2"
//               >
//                 <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//                   <span className="font-bold">{index + 1}</span>
//                 </div>
//                 <p
//                   className="text-sm leading-snug"
//                   dangerouslySetInnerHTML={{ __html: item }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//     </>
//   );
// };

// export default CorporateSection;

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

        {/* Card 2 */}
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

        {/* Card 3 */}
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-4">
        {/* Card 4 */}
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

        {/* Card 5 */}
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
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <button className="bg-[#1C4A87] text-[18px] font-[600] font-sans text-white rounded-full duration-400 px-[32px] py-[16px] cursor-pointer hover:bg-[#56B3B1]">
          Learn More About Corporate Law
        </button>
      </div>
    </section>
  );
};

export default CorporateTransaction;
