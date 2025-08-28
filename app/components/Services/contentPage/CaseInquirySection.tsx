/* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from 'next/image';

export default function CaseInquirySection({section}:any) {
    // console.log("section2", section);
  return (
    <section className="pb-16 px-4 bg-white">
      {/* grid md:grid-cols-2 gap-10 */}
      <div className="max-w-7xl mx-auto  items-center text-center md:items-start md:text-start">
        {/* Image */}
        {/* <div className="w-full">
          <Image
            src="/service-2.jpg"
            alt="Client and Lawyer"
            width={800}
            height={600}
            className="rounded-md object-cover w-full h-auto"
          />
        </div> */}

        {/* Text Content */}
        <div>
          <h2 className="text-[30px] leading-[43px] font-bold text-[#0D2D63] mb-4 font-body">
            {/* Do You Think You Have A Case? */}
            {section?.section_heading}
          </h2>
          <div className="text-black mt-2 font-sans leading-5" dangerouslySetInnerHTML={{__html:section?.description}}/>
          {/* <p className="text-black mb-6 font-sans">
            Lorem ipsum is a placeholder text commonly used in graphic design, publishing,
            and web development to occupy space in layouts where the final content is not
            yet available. Its nonsensical structure helps focus attention on design elements
            rather than the content itself.
          </p>
          <button className="bg-[#1C4A87] text-white px-6 py-4 rounded-full font-medium font-sans hover:bg-[#56B3B1] font-sans cursor-pointer transition">
            Get In Touch
          </button> */}
        </div>
      </div>
    </section>
  );
}
