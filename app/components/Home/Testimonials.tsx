/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { apiPath } from "@/app/utils/api-path";
// import { Client1, Client2, Client3 } from "../../assets";

// const testimonials = [
//   {
//     name: "Nathan Moshkovich",
//     image: Client1,
//     role: "Founder of ClearLine (assets acquired by SurgePays (NASDAQ: SURG))",
//     quote: `I had the incredible fortune of working with Syeda Nawroj during a pivotal moment in my journey as a startup founder—our acquisition by a publicly traded company. Syeda was a powerhouse of knowledge, guidance, and unwavering dedication from start to finish. She fought like a lioness for my interests, ensuring that every detail was thoroughly addressed, and I felt supported at every turn.`,
//   },
//   {
//     name: "Krassimir Piperkov",
//     image: Client2,
//     role: "Co-founder and COO of Enview (acquired by Matterport)",
//     quote: `I had the pleasure of working with Syeda during a complex M&A transaction when she was at Fenwick, and she was the standout in the team. Syeda brought not only deep expertise but also a level of patience and professionalism that made the entire process much smoother. She was always on top of things, responsive, and genuinely enjoyable to work with.`,
//   },
//   {
//     name: "Kris Johns",
//     image: Client3,
//     role: "Founder of AdGood Foundation",
//     quote: `I couldn't have asked for a better legal partner to help bring my innovative non-profit in the adtech space to life. Syeda's expertise, attention to detail, and understanding of the unique needs of my organization were truly exceptional.`,
//   },
// ];

export default function Testimonials({ testimonials }: any) {
  const [current, setCurrent] = useState(0);
  // console.log("testimonials=>", testimonials);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-white py-16 px-4 text-center relative">
      <h2 className="text-3xl font-bold text-[#052b64] mb-10">
        What Do Our Clients Say About ELS?
      </h2>
      <p className="font-sans leading-[28px] text-black">
        Our success is measured by the success of our clients. Hear what
        businesses like yours say about
        <br /> partnering with Empowering Legal Solutions.
      </p>
      <div className="max-w-6xl mx-auto relative">
        {testimonials.map((testimonialData: any, index: number) => (
          <div
            key={testimonialData?.id}
            className={`transition-opacity duration-500 ease-in-out ${
              index === current
                ? "opacity-100"
                : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md relative md:overflow-hidden overflow-auto h-[700px] md:h-[500px]">
              <div className="flex justify-center mb-4">
                <Image
                  src={`${apiPath}/storage/${testimonialData?.client_image}`}
                  alt={testimonialData?.client_name}
                  width={90}
                  height={90}
                  className={`rounded-full object-cover border-4 ${
                    index === 0 ? "border-yellow-400" : "border-gray-200"
                  }`}
                />
              </div>
              <h3 className="text-[#052b64] text-[22px] font-body">
                {testimonialData?.client_name}
              </h3>
              <p className="font-sans text-[19px] font-[600] leading-[28px] text-black mb-4">
                {testimonialData?.client_designation}
              </p>

              <blockquote className="relative text-gray-700 text-base leading-relaxed pt-8 pb-6 px-6">
                <span className="absolute text-6xl left-4 top-0 text-[#052b64] leading-none font-body">
                  “
                </span>
                <p className="font-sans leading-[28px] text-black">
                  {testimonialData?.content}{" "}
                </p>
                <span className="text-6xl absolute md:right-25 right-0 md:-bottom-6 text-[#052b64] font-body">
                  ”
                </span>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-4 mt-6 lg:mt-0 lg:flex-col lg:gap-4 lg:absolute lg:right-[60px] lg:top-1/2 lg:-translate-y-1/2">
        {testimonials.map((_: any, i: number) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className="relative h-[5px] w-[5px] flex items-center justify-center"
          >
            {/* Outer border for selected dot */}
            {i === current && (
              <span className="absolute h-[20px] w-[20px] rounded-full border-2 border-[#0D2D63]"></span>
            )}
            {/* Inner filled dot */}
            <span
              className={`h-[5px] w-[5px] rounded-full transition duration-300 cursor-pointer ${
                i === current ? "bg-[#0D2D63]" : "bg-[#0D2D63]"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
