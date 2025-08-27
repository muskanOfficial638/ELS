// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import { Tech, Greetings, PricingPlans } from "../../assets";
// import Image from "next/image";
// import { apiPath } from "@/app/utils/api-path";

// type ELSProps = {
//   data: any;
// };

// // const ELS: React.FC<ELSProps> = ({ data }) => {
//   const ELS: React.FC = () => {
//   // console.log("ELS section data",data)
//   // const parser = new DOMParser();
//   // const doc = parser.parseFromString(data?.page_content ?? "", "text/html");

//   // const title = doc.querySelector("strong")?.textContent || "";
//   // // Find all <p> tags and skip the first one (which contains the title)
//   // const pTags = doc.querySelectorAll("p");
//   // let subtitle = "";
//   // if (pTags.length > 1) {
//   //   for (let i = 1; i < pTags.length; i++) {
//   //     if (!pTags[i].querySelector("strong")) {
//   //       subtitle = pTags[i].textContent || "";
//   //       break;
//   //     }
//   //   }
//   // }
//   // const columns = Array.from(
//   //   doc.querySelectorAll(".filament-tiptap-grid-builder__column")
//   // );

//   // const cards = columns.map((col) => {
//   //   const img = col.querySelector("img");
//   //   const title = col.querySelector("p:nth-of-type(2)")?.textContent || "";
//   //   const desc = col.querySelector("p:nth-of-type(3)")?.textContent || "";

//   //   return {
//   //     imgSrc: img?.getAttribute("src") || "",
//   //     imgAlt: img?.getAttribute("alt") || "",
//   //     title,
//   //     desc,
//   //   };
//   // });

//   return (
//     <div className="flex flex-col gap-8 lg:gap-[25px] relative px-4 lg:px-[90px] mt-10 lg:mt-20 mb-10 lg:mb-20">
//       {/* <div dangerouslySetInnerHTML={{__html :data?.page_content}}></div> */}
//       <div className="font-sans font-bold text-black text-2xl lg:text-[32px] tracking-[0px] lg:tracking-[1.20px] leading-normal lg:leading-[48px]">
//         Why should you work with ELS?
//         {/* {title} */}
//       </div>
//       <p className="font-body font-normal text-black text-base tracking-[0.5px] leading-normal ml-0 lg:ml-1">
//         We bring an innovative approach to our legal representation.
//         {/* {subtitle} */}
//       </p>

//       <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 w-full">
//         {/* {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-[#002147] rounded-[25px] p-6 w-full lg:w-[400px] h-auto flex flex-col items-center text-center text-white shadow-lg"
//           >
//             //Dynamically loaded image
//             {card.imgSrc && (
//               <Image
//                 src={`${apiPath}${card.imgSrc}`}
//                 alt={card.imgAlt}
//                 className="w-[143.98px] h-[125px] object-contain"
//                 width={200}
//                 height={100}
//               />
//             )}
//             <h3 className="font-bold text-lg mt-4">{card.title}</h3>
//             <p className="text-sm lg:text-base leading-6 mt-2">{card.desc}</p>
//           </div>
//         ))} */}

//         <div className="w-full lg:w-[400px] h-auto lg:h-[429px] bg-[#002147] rounded-[25px] p-6">
//           <div className="flex flex-col items-center gap-6 relative top-0 md:top-8">
//             <Image
//               className="w-[143.98px] h-[125px]"
//               alt="Tech company rafiki"
//               src={Tech}
//             />
//             <div className="font-semibold text-white text-base lg:text-[16px] text-center tracking-[1.00px] leading-normal">
//               Smart Use of Technology
//             </div>
//             <p className="font-body font-normal text-white text-sm lg:text-[16px] text-center leading-6">
//               We have a proprietary tech stack curated to make the execution of
//               transactions efficient. We aim for excellence, so we invest in
//               high quality legal databases and software tools.
//             </p>
//           </div>
//         </div>

//         <div className="w-full lg:w-[400px] h-auto lg:h-[429px] bg-[#002147] rounded-[25px] p-6">
//           <div className="flex flex-col items-center gap-6 relative top-0 md:top-5">
//             <Image
//               className="w-[148.18px] h-[125px]"
//               alt="Hello bro"
//               src={Greetings}
//             />
//             <div className="font-sans font-bold text-white text-base text-center tracking-[1.00px] leading-normal">
//               Bespoke Staffing
//             </div>
//             <p className="font-body font-normal text-white text-sm lg:text-base text-center leading-6">
//               We leverage our membership in numerous regional, national and
//               global networks of legal practitioners and experts across many
//               subject areas to recommend customized deal team and specialist
//               staffing that fits our client&apos;s unique needs.
//             </p>
//           </div>
//         </div>

//         <div className="w-full lg:w-[400px] h-auto lg:h-[429px] bg-[#002147] rounded-[25px] p-6">
//           <div className="flex flex-col items-center gap-6 relative top-0 md:top-5">
//             <Image
//               className="w-[188.86px] h-[140px]"
//               alt="Pricing plans pana"
//               src={PricingPlans}
//             />
//             <div className="font-sans font-bold text-white text-base text-center tracking-[1.00px] leading-normal">
//               Flexible Pricing
//             </div>
//             <p className="font-body font-normal text-white text-sm lg:text-base text-center leading-normal">
//               We don&apos;t shy away from talking about money or value; and we often
//               talk about both. We are accessible, visible and accountable for
//               the value we deliver.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ELS;
import { FaLaptopCode, FaUsersCog, FaMoneyCheckAlt } from 'react-icons/fa';

const ELS = () => {
  return (
    <section className="bg-[#F9FAFB] py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2B66] mb-4">
        Why Should You Work With ELS?
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg mb-12">
        We bring an innovative approach to our legal representation.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-8 text-center hover:bg-white hover:shadow-lg">
          <div className="text-[#36B8B8] text-5xl flex justify-center mb-4">
            <FaLaptopCode />
          </div>
          <h3 className="text-[#0B2B66] text-lg font-semibold mb-3">
            Smart Use Of Technology
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We have a proprietary tech stack curated to make the execution of
            transactions efficient. We aim for excellence, so we invest in high
            quality legal databases and software tools.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-8 text-center hover:bg-white hover:shadow-lg">
          <div className="text-[#56B3B1] text-5xl flex justify-center mb-4">
            <FaUsersCog />
          </div>
          <h3 className="text-[#0B2B66] text-lg font-semibold mb-3">
            Bespoke Staffing
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We leverage our membership in numerous regional, national and
            global networks of legal practitioners and experts across many
            subject areas to recommend customized deal.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm text-center hover:bg-white hover:shadow-lg">
          <div className="text-[#36B8B8] text-5xl flex justify-center mb-4">
            <FaMoneyCheckAlt />
          </div>
          <h3 className="text-[#0B2B66] text-lg font-semibold mb-3">
            Flexible Pricing
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We don&apos;t shy away from talking about money or value; and we often
            talk about both. We are accessible, visible and accountable for the
            value we deliver.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ELS;
