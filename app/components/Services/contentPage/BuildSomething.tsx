/* eslint-disable @typescript-eslint/no-explicit-any */

export default function BuildSomething({ section }: any) {
//   console.log("section5", section);
  return (
    <section className="pb-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto  items-center text-center md:items-start md:text-start">
        {/* Text Content */}
        <div>
          <h2 className="md:text-[30px] text-[25px] md:leading-[43px] leading-[40px] font-bold text-[#0D2D63] mb-4 font-body">
            {section?.section_heading}
          </h2>
          <div
            className="text-black mt-2 font-sans leading-5 services-details-content"
            dangerouslySetInnerHTML={{ __html: section?.description }}
          />
        </div>
      </div>
    </section>
  );
}
