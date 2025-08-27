// import React, { useEffect, useState } from "react";
// import { HeroImage2 } from "../../assets";
import { logCustomEvent } from "../../utils/firebase";
import Image from "next/image";

const HeroSection: React.FC = () => {
  // const [heroData, setHeroData] = useState([] as any[]);

  const handleNavigate = () => {
    // window.open("https://empoweringlegal.cliogrow.com/book", "_blank"); //old
    window.open(
      "https://app.lawmatics.com/forms/share/1deea1d5-aaf5-4485-bf02-edb7958361ee",
      "_blank"
    ); //updated
    logCustomEvent("Schedule a call");
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://192.168.1.2:8000/api/slider");
  //       const data = await response.json();
  //       setHeroData(data);
  //     } catch (error) {
  //       console.error("Error fetching Google Sheet data:", error);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {}, [heroData]);

  return (
    <section className="relative w-full flex items-start md:items-center justify-center">
      <Image
        src="/heroBanner.jpg"
        // src={`http://192.168.1.2:8000/storage/${heroData[0]?.image}`}
        alt="Hero background"
        className="inset-0 w-full md:h-[647px] h-[501px] opacity-95 object-cover"
        width={1440}
        height={700}
      />
      {/* Overlay */}
      <div className="absolute inset-0 md:h-[647px] h-[501px] bg-gradient-to-b bg-[#0D2D638C] bg-opacity-40 z-0" />

      <div
        className="absolute z-10 text-white text-center px-4 md:mt-0 lg:mt-0 top-[50%] left-[50%]"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* desktop heading */}
        <h1 className="font-body md:text-[60px] text-[40px] font-bold tracking-[0.8px] sm:tracking-[0.8px] whitespace-nowrap hidden md:block lg:block">
          Empowering You and Your Business <br /> with Expert Legal Solutions
          and <br />
          Strategic Counsel
          {/* {heroData[0]?.title} */}
        </h1>

        {/* mobile heading */}
        <h1 className="font-body text-[30px] font-bold tracking-[0.8px] whitespace-nowrap md:hidden lg:hidden">
          Empowering You <br />
          and Your Business <br /> with Expert Legal <br /> Solutions and <br />
          Strategic Counsel
          {/* {heroData[0]?.title} */}
        </h1>

        <p className="font-body mt-4 text-sm md:text-2xl tracking-[0.8px] sm:tracking-[0.7px]">
          Ready to Build or Scale Your Legal Foundation?
          {/* {heroData[0]?.content} */}
        </p>
        <button
          className="cursor-pointer font-sans font-semibold mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-[#0D2D63] hover:text-white text-[#0D2D63] rounded-full text-sm sm:text-base"
          onClick={handleNavigate}
        >
          Consult Now
          {/* {heroData[0]?.button_text} */}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
