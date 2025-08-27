/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
// import { RowOneCards, RowTwoCards } from "../../utils/services-cards-data";
import { apiPath } from "@/app/utils/api-path";

// interface serviceProps {
//   data: any;
// }
// interface GridItem {
//   title: string;
//   description: string;
// }

async function fetchServices() {
  const res = await fetch(`${apiPath}/api/services`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch terms data");
  return res.json();
}

// const Cards: React.FC<serviceProps> = ({ data }) => {
const Cards: React.FC = async () => {
  const serviceData = await fetchServices();
  // const [sData, setData] = useState<GridItem[]>([]);

  // useEffect(() => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(data?.content?.[1]?.page_content, "text/html");

  //   // Get all divs with data-cols="3"
  //   const gridSections = Array.from(
  //     doc.querySelectorAll('div[data-cols="3"]')
  //   );

  //   const items: GridItem[] = [];

  //   gridSections.forEach((section) => {
  //     const columns = section.querySelectorAll(".filament-tiptap-grid-builder__column");
  //   //  console.log("columns",columns)

  //     columns.forEach((column) => {
  //       const titleElement = column.querySelector("strong");
  //       const descElement = column.querySelector("p:nth-of-type(2)");

  //       const title = titleElement?.textContent?.trim() || "";
  //       const description = descElement?.textContent?.trim() || "";

  //       if (title && description) {
  //         items.push({ title, description });
  //       }
  //     });
  //   });

  //   setData(items);
  // }, [data]);

  return (
    <div className="flex flex-col gap-12 items-center justify-center relative px-6 sm:px-8 md:px-12 lg:px-[90px] mb-10">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {serviceData.map((card: any) => {
          // console.log("card.sections type:", typeof card.sections);
          // console.log("isArray:", Array.isArray(card.sections));
          // console.log("value:", card.sections);
          let parsedSections = [];
          try {
            parsedSections = JSON.parse(card.sections);
            // console.log("parsed sections",parsedSections[0])
          } catch (error) {
            console.error("Failed to parse card.sections", error);
          }

          return (
            <div
              key={card?.id}
              className="bg-gradient-to-b from-[#002147] to-[#0050AD] rounded-lg shadow-sm p-8 text-center hover:bg-white hover:shadow-lg"
            >
              <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer hover:underline">
                <Link href={`services/${card?.slug}`}>{card?.title}</Link>
              </h3>
              {/* {Array.isArray(parsedSections) &&
                parsedSections.map((data, index: number) => {
                  return ( */}
                    <div
                      // key={index}
                      className="text-white text-sm leading-relaxed font-sans"
                    >
                      <div
                        className="line-clamp-5"
                        dangerouslySetInnerHTML={{ __html: parsedSections[0]?.description }}
                      />
                    </div>
                  {/* );
                })} */}
              <Link href={`services/${card?.slug}`} className="mt-4 text-white text-sm text-[12px]">
                {"Read more >>"}
              </Link>
            </div>
          );
        })}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {sData?.map((item:any, idx:number) => (
        <div key={idx} className="bg-gradient-to-b from-[#002147] to-[#0050AD] rounded-lg shadow-sm p-8 text-center hover:bg-white hover:shadow-lg">
          <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer">{item.title}</h3>
          <p className="text-white text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div> */}
      {/* <div
        dangerouslySetInnerHTML={{ __html: data?.content?.[1]?.page_content }}
      ></div> */}
    </div>
  );
};

export default Cards;
