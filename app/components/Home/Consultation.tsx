"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { logCustomEvent } from "../../utils/firebase";

const Consultation: React.FC = () => {
  const router = useRouter();
  const handleNavigateCall = () => {
    // window.open("https://empoweringlegal.cliogrow.com/book", "_blank"); //old
    window.open(
      "https://app.lawmatics.com/forms/share/1deea1d5-aaf5-4485-bf02-edb7958361ee",
      "_blank"
    ); //updated
    logCustomEvent("Make a call");
  };
  const handleNavigateEmail = () => {
    router.push("/contact-us");
    logCustomEvent("Send Email");
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat p-4 py-10 items-center justify-center"
      style={{
        backgroundImage: "url('/callToAction.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B2B66]/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Ready to Elevate Your Legal Strategy?
        </h2>
        <p className="text-sm sm:text-base max-w-5xl mb-6">
          Don&apos;t let legal complexities hinder your growth. Partner with
          Empowering Legal Solutions for agile, expert, and cost-effective legal
          support tailored to your business across all our practice areas.
        </p>

        <div className="flex flex-row gap-4">
          <button
            className="bg-[#56B3B1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#1C4A87] transition cursor-pointer"
            onClick={handleNavigateCall}
          >
            Schedule Your Consultation
          </button>
          <button
            className="cursor-pointer border border-[#56B3B1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#1C4A87] hover:border-[#1C4A87] transition"
            onClick={handleNavigateEmail}
          >
            Call Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
