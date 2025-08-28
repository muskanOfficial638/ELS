// "use client";
// import React, { useEffect, useState } from "react";
// // import { TestimonialBG } from "../../assets";
// // import { clients } from "../../utils/testimonials-data";
// import Image from "next/image";

// const Testimonials: React.FC = () => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [testimonialData, setTestimonialData] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://192.168.1.2:8000/api/testimonial");
//         const data = await response.json();
//         setTestimonialData(data);
//       } catch (error) {
//         console.error("Error fetching Google Sheet data:", error);
//       } finally {
//         // setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {}, [testimonialData]);

//   const [activeIndex, setActiveIndex] = useState(0);

//   // ✅ Prevent rendering until data is loaded
//   if (!testimonialData.length) return null;

//   const nextTestimonial = () => {
//     setActiveIndex((activeIndex + 1) % testimonialData.length);
//   };

//   const prevTestimonial = () => {
//     setActiveIndex(
//       activeIndex === 0 ? testimonialData.length - 1 : activeIndex - 1
//     );
//   };

//   const leftIndex =
//     activeIndex === 0 ? testimonialData.length - 1 : activeIndex - 1;
//   const rightIndex = (activeIndex + 1) % testimonialData.length;

//   const { client_name, content, client_designation, client_image, rating } =
//     testimonialData[activeIndex];
//   const BASE_URL = "http://192.168.1.2:8000/storage";

//   return (
//     <section>
//       <p className="font-sans text-center text-2xl lg:text-[32px] font-bold lg:text-3xl absolute w-full mt-10 tracking-[0.1px] lg:tracking-[1.20px]">
//         What People are Saying about ELS
//       </p>
//       <div
//         className="h-[780px] lg:h-[800px] text-white bg-cover bg-center overflow-hidden relative"
//         style={{ backgroundImage: `url(${"/testimonialBG.png"})` }}
//       >
//         <div className="w-[95%] lg:w-[100%] mx-auto pt-[11rem] lg:pt-[15rem]">
//           <div className="text-center relative z-20 flex flex-col items-center">
//             {/* Navigation Buttons */}
//             <button
//               onClick={prevTestimonial}
//               className="absolute top-[40%] left-[1%] lg:top-1/4 lg:left-[10%] transform -translate-y-1/2 border border-white text-white rounded-full w-8 h-8 shadow-md hover:bg-blue-600 hover:text-white transition-colors"
//             >
//               ❮
//             </button>
//             <button
//               onClick={nextTestimonial}
//               className="absolute top-[40%] right-[1%] lg:top-1/4 lg:right-[10%] transform -translate-y-1/2 border border-white text-white rounded-full w-8 h-8 shadow-md hover:bg-blue-600 hover:text-white transition-colors"
//             >
//               ❯
//             </button>
//             <div className="flex items-center space-x-6 lg:space-x-20">
//               <Image
//                 src={`${BASE_URL}/${testimonialData[leftIndex].client_image}`}
//                 alt={testimonialData[leftIndex].client_name}
//                 className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-gray-300 opacity-70 transition-opacity duration-300"
//                 width={100}
//                 height={12}
//               />
//               <Image
//                 src={`${BASE_URL}/${client_image}`}
//                 alt={client_name}
//                 className="w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white-500 transform scale-110 transition-transform duration-300"
//                 width={100}
//                 height={16}
//               />
//               <Image
//                 src={`${BASE_URL}/${testimonialData[rightIndex].client_image}`}
//                 alt={testimonialData[rightIndex].client_name}
//                 className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-gray-300 opacity-70 transition-opacity duration-300 object-contain"
//                 width={100}
//                 height={12}
//               />
//             </div>
//             <div className="mt-4">
//               <h3 className="font-body text-base sm:text-lg lg:text-xl font-bold mt-[15px]">
//                 {client_name}
//               </h3>
//               <p className="font-body text-sm lg:text-base">
//                 {client_designation}
//               </p>
//               <div className="flex justify-center mt-4">
//                 {Array.from({ length: rating }, (_, i) => (
//                   <svg
//                     key={i}
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 25"
//                     fill="none"
//                     className="ml-1 mr-1"
//                   >
//                     <path
//                       d="M11.9961 1.57886C13.0454 1.57886 13.8719 2.37139 14.3995 3.44077L16.1616 6.99402C16.215 7.10399 16.3417 7.25884 16.5321 7.4005C16.7223 7.54201 16.9086 7.62007 17.0311 7.64066L20.2207 8.17499C21.3729 8.36859 22.3386 8.93335 22.6521 9.91676C22.9653 10.8994 22.5064 11.9205 21.6778 12.7505L21.677 12.7514L19.1991 15.2498C19.1009 15.3488 18.9909 15.5353 18.9219 15.7783C18.8534 16.0197 18.8473 16.2396 18.8784 16.3816L18.8788 16.3836L19.5877 19.4743C19.8818 20.7606 19.7843 22.0362 18.8771 22.7031C17.9667 23.3722 16.7227 23.0756 15.5925 22.4025L12.6026 20.6179C12.477 20.5429 12.2614 20.4821 12.0011 20.4821C11.7427 20.4821 11.5226 20.5421 11.3888 20.6199L11.3869 20.621L8.40288 22.4021C7.27405 23.0776 6.03154 23.3689 5.12111 22.6991C4.21449 22.0321 4.11214 20.7589 4.40711 19.4736L5.1159 16.3836L5.11633 16.3816C5.14741 16.2396 5.14133 16.0197 5.0728 15.7783C5.0038 15.5353 4.89379 15.3488 4.79558 15.2498L2.31585 12.7495C1.49265 11.9195 1.03521 10.8993 1.34595 9.91811C1.65759 8.93411 2.62143 8.36866 3.77433 8.17492L6.96132 7.64105L6.96233 7.64088C7.07917 7.62061 7.2627 7.54342 7.45248 7.40154C7.64261 7.2594 7.76959 7.10421 7.82312 6.99402L7.82582 6.98853L9.58562 3.43983L9.58632 3.43843C10.119 2.36994 10.948 1.57886 11.9961 1.57886Z"
//                       fill="white"
//                     />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="w-auto lg:w-[70%] px-0 lg:px-[90px] mx-auto mt-12 mb-6">
//             <div className="font-body text-sm text-center lg:text-base leading-5 lg:leading-6 min-h-[100px] lg:min-h-[150px] overflow-y-hidden">
//               {content}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Client1, Client2, Client3 } from "../../assets";

const testimonials = [
  {
    name: "Nathan Moshkovich",
    image: Client1,
    role: "Founder of ClearLine (assets acquired by SurgePays (NASDAQ: SURG))",
    quote: `I had the incredible fortune of working with Syeda Nawroj during a pivotal moment in my journey as a startup founder—our acquisition by a publicly traded company. Syeda was a powerhouse of knowledge, guidance, and unwavering dedication from start to finish. She fought like a lioness for my interests, ensuring that every detail was thoroughly addressed, and I felt supported at every turn.`,
  },
  {
    name: "Krassimir Piperkov",
    image: Client2,
    role: "Co-founder and COO of Enview (acquired by Matterport)",
    quote: `I had the pleasure of working with Syeda during a complex M&A transaction when she was at Fenwick, and she was the standout in the team. Syeda brought not only deep expertise but also a level of patience and professionalism that made the entire process much smoother. She was always on top of things, responsive, and genuinely enjoyable to work with.`,
  },
  {
    name: "Kris Johns",
    image: Client3,
    role: "Founder of AdGood Foundation",
    quote: `I couldn't have asked for a better legal partner to help bring my innovative non-profit in the adtech space to life. Syeda's expertise, attention to detail, and understanding of the unique needs of my organization were truly exceptional.`,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
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
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ease-in-out ${
              index === current
                ? "opacity-100"
                : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md relative overflow-hidden h-[620px] md:h-[400px]">
              <div className="flex justify-center mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={90}
                  height={90}
                  className={`rounded-full object-cover border-4 ${
                    index === 0 ? "border-yellow-400" : "border-gray-200"
                  }`}
                />
              </div>
              <h3 className="text-[#052b64] text-[22px] font-body">
                {t.name}
              </h3>
              <p className="font-sans text-[19px] font-[600] leading-[28px] text-black mb-4">{t.role}</p>

              <blockquote className="relative text-gray-700 text-base leading-relaxed pt-8 pb-6 px-6">
                <span className="absolute text-6xl left-4 top-0 text-[#052b64] leading-none font-body">
                  “
                </span>
                <p className="font-sans leading-[28px] text-black">{t.quote} </p>
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
        {testimonials.map((_, i) => (
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
