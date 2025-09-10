/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchServices } from "@/app/utils/api";
import { apiPath } from "@/app/utils/api-path";
import Link from "next/link";
import React from "react";
// import { RowOneCards, RowTwoCards } from "../../utils/services-cards-data";

const Cards = async () => {
  const serviceData = await fetchServices();

  return (
    <div className="flex flex-col gap-12 items-center justify-center relative px-6 sm:px-8 md:px-12 lg:px-[90px] mb-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {serviceData.map((card: any) => {
          let parsedSections = [];
          try {
            parsedSections = JSON.parse(card.sections);
            // Replace image src paths in all sections' descriptions
            parsedSections?.map((section: any) => {
              if (section?.description) {
                section.description = section.description.replace(
                  /src="\/storage/g,
                  `src="${apiPath}/storage`
                ); 
              }
              return section;
            });
          } catch (error) {
            console.error("Failed to parse card.sections", error);
          }

          return (
            <Link
              href={`services/${card?.slug}`}
              key={card?.id}
              className="bg-[#0B2B66] block rounded-lg text-center shadow-lg p-[37px] transition-all ease-in duration-300 group text-center hover:bg-white"
            >
              <h3 className="text-white text-[20px] text-lg font-semibold mb-[12px] group-hover:text-[#0B2B66]">
                {card?.title}
              </h3>
              <div className="text-white text-[16px] leading-[28px] group-hover:text-black font-sans">
                <div
                  className="line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: parsedSections[0]?.description,
                  }}
                />
              </div>
              {/* <button className="block w-full text-white text-[16px] group-hover:text-black font-sans font-[600] mt-[12px]">
                {"Read more >>"}
              </button> */}
            </Link>
          );
        })}
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {RowOneCards.map((card) => (
          <div
            key={card?.id}
            className="bg-gradient-to-b from-[#002147] to-[#0050AD] rounded-lg shadow-sm p-8 text-center hover:bg-white hover:shadow-lg"
          >
            <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer">
              <Link href={`services/${card?.slug}`}>{card?.title}</Link>
            </h3>
            <p className="text-white text-sm leading-relaxed">
              {card?.description}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {RowTwoCards.map((card) => (
          <div
            key={card?.id}
            className="bg-gradient-to-b from-[#002147] to-[#0050AD] rounded-lg shadow-sm p-8 text-center hover:bg-white hover:shadow-lg"
          >
            <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer">
              <Link href={`services/${card?.slug}`}>{card?.title}</Link>
            </h3>
            <p className="text-white text-sm leading-relaxed">
              {card?.description}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Cards;
