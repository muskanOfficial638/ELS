import React from "react";
// import { Author2 } from "../../assets";
// import Image from "next/image";

const Education: React.FC = () => {
  return (
    <section className="md:pt-16">
      {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6 sm:px-[90px] pb-10 sm:pb-0"> */}
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-body relative self-stretch font-bold text-[#0D2D63] text-xl sm:text-[32px] leading-[36px] sm:leading-[48px]">
            Education
          </h2>
          <p className="font-sans text-black leading-[28px]">
            <span className="font-semibold">● Juris Doctor (J.D.)</span> – New
            York University School of Law, 
            <span> Served on the NYU Law Review</span>
          </p>

          <p className="font-sans text-black  leading-[28px]">
            <span className="font-semibold">● Bachelor&apos;s Degree</span> –
            Mount Holyoke College, 
            <span> Awarded a full scholarship</span>
          </p>
        </div>
        {/* <div className="flex flex-col mt-10 md:mt-0 lg:mt-0 order-1 md:order-2 lg:order-2 text-center">
          <Image
            className="md:w-[445.78570556640625px] sm:w-[305px] md:h-[300px] h-[200px] md:mt-6 mt-0 object-cover"
            alt="Frame"
            src={"/attorney-2.jpg"}
            // src={Author2}
            // src={`${apiPath}${imageUrl}`}
            width={1000}
            height={500}
          />
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Education;
