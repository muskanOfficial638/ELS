/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FormValues } from "../types";
import {
  CalendarIcon,
  LinkedinSolidIcon,
  LinkIcon,
  LocationIcon,
  MailIcon,
  MailIcon2,
  textIcon,
} from "../assets";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
declare global {
  interface Window {
    lm_intake?: (...args: any[]) => void;
  }
}
const ContactUsComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
  } = useForm<FormValues>();
  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
   const [lmLoaded, setLmLoaded] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setLoading(true);
      // const clioPayload = {
      //   inbox_lead: {
      //     from_first: data.firstName,
      //     from_last: data.lastName,
      //     from_message: data.message,
      //     from_email: data.email,
      //     from_phone: data.phone,
      //     referring_url: "https://empowering.legal/contact-us",
      //     from_source: "https://empowering.legal/contact-us",
      //   },
      //   inbox_lead_token: process.env.VITE_CLIO_INBOX_LEAD_TOKEN,
      // };
      const response = await axios.post(
        // "https://us-central1-empowering-legal.cloudfunctions.net/createClioContact",
        "https://api.lawmatics.com/v1/forms/f208c22c-ca45-4bb1-88b9-ac50b25cd48e/submit",
        {
          first_name: data.firstName,
          last_name: data.lastName,
          custom_field_602961: data.message,
          email: data.email,
          phone: data.phone,
        }
        // { clioPayload }
      );
      if (response.status == 201) {
        if (typeof window !== "undefined" && window.lm_intake) {
          try {
            window.lm_intake("f208c22c-ca45-4bb1-88b9-ac50b25cd48e", {});
          } catch (error) {
            console.error("Error calling lm_intake:", error);
          }
        } else {
          console.warn("lm_intake function not available");
        }
        toast.success("Contact details submitted successfully!");
        reset();
        setPhone("");
        setValue("phone", "");
        setLoading(false);
        console.log("lmLoaded",lmLoaded)
        // Optionally, you can redirect manually after some delay if lm_intake doesn't redirect automatically
        // setTimeout(() => {
        //   window.location.href = "https://your-lawmatics-redirect-url.com";
        // }, 2000);
      } else {
        toast.error(`Failed with status: ${response.status}`);
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error("Failed to submit the form. Please try again.", error);
    }
  };

  const handleNavigateTOS = () => {
    window.open("/terms-and-conditions", "_blank");
  };
  return (
    <>
      {/* <Script
        id="lm-embedded-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(e,t,n,a,s,c,i){
            if(!e[s]){
              i=e[s]=function(){
                i.process ? i.process.apply(i,arguments) : i.queue.push(arguments)
              },
              i.queue=[], i.t=1*new Date;
              var o=t.createElement(n);
              o.async=1;
              o.src=a+"?t="+Math.ceil(new Date/c)*c;
              var r=t.getElementsByTagName(n)[0];
              r.parentNode.insertBefore(o,r)
            }
          }(window,document,"script","https://navi.lawmatics.com/intake.min.js","lm_intake",864e5);

          lm_intake("f208c22c-ca45-4bb1-88b9-ac50b25cd48e", {}, "lm-embedded-script");
        `,
        }}
      /> */}
      <Script
        id="lm-embedded-script"
        strategy="afterInteractive"
        src="https://navi.lawmatics.com/intake.min.js"
        onLoad={() => {
          setLmLoaded(true);
          if (typeof window !== "undefined" && window.lm_intake) {
            window.lm_intake("f208c22c-ca45-4bb1-88b9-ac50b25cd48e", {}, "lm-embedded-script");
          }
        }}
      />
      <ToastContainer />
      <div className="gap-8 px-4 lg:px-[90px] h-auto py-16">
        <div className="font-sans font-normal text-black text-[24px] lg:text-[32px] text-center tracking-[0] leading-[normal]">
          Contact Us
        </div>
        <div className="px-4 lg:px-[90px] h-auto lg:h-[700px] mx-auto bg-[#002147] rounded-xl p-6 lg:p-8 shadow-lg mt-10 mb-20">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="mt-10 lg:mt-20 flex flex-col gap-6 lg:gap-8 w-full lg:w-[40%]">
              <h3 className="font-sans text-white text-2xl lg:text-4xl font-bold">
                CONTACT
              </h3>
              <div className="font-body flex flex-col gap-4 lg:gap-6 cursor-pointer">
                <div className="flex items-center gap-4">
                  <LocationIcon />
                  <span className="text-white text-sm lg:text-base font-normal">
                    San Francisco Bay Area, California
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <LinkedinSolidIcon />
                  <a
                    className="text-white text-sm lg:text-base font-normal cursor-pointer"
                    href="https://www.linkedin.com/company/empowering-legal-solutions/"
                    target="_blank"
                  >
                    Empowering Legal Solutions
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MailIcon />
                  <span className="text-white text-sm lg:text-base font-normal cursor-pointer">
                    contact@empowering.legal
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <LinkIcon />
                  <a
                    className="text-[#9747ff] underline text-sm lg:text-base font-normal"
                    href="https://sellyourstartup.com/"
                    target="_blank"
                  >
                    sellyourstartup.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <CalendarIcon />
                  <a
                    className="text-white text-sm lg:text-base font-normal underline"
                    target="_blank"
                    href="https://www.differencepress.com/book-launch-syeda-nazifa-nawroj?rq=Nazifa&fbclid=IwZXh0bgNhZW0CMTEAAR2pgXIAzW0i5tlXi3wb04k90Gs9ZnSG8jx6QURNruIfTU6fJKM6ufapJ6c_aem_Y5SN7xrDdTIS-wLCtnd1RQ"
                  >
                    Register for a Virtual Book Event
                  </a>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 w-full lg:w-[60%] mt-0 sm:mt-8"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6 mb-0 sm:mb-5">
                <div className="flex flex-col w-full md:w-2/4 relative h-[55px]">
                  <Image
                    className="absolute left-3 top-[45%] transform -translate-y-1/2 text-gray-500"
                    src={textIcon}
                    alt="icon"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    className={`w-full pl-12 pr-4 py-3 bg-white rounded-lg border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } focus:outline-none`}
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full md:w-2/4 relative h-[55px]">
                  <Image
                    className="absolute left-3 top-[45%] transform -translate-y-1/2 text-gray-500"
                    src={textIcon}
                    alt="icon"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    className={`w-full pl-12 pr-4 py-3 bg-white rounded-lg border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } focus:outline-none`}
                  />
                  {errors.lastName && (
                    <span className="text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col  justify-between gap-6 mb-0 sm:mb-5">
                <div className="flex flex-col w-full relative h-[55px]">
                  <Image
                    className="absolute left-3 top-[46%] transform -translate-y-1/2 text-gray-500"
                    src={MailIcon2}
                    alt="icon"
                  />
                  <input
                    type="email"
                    placeholder="Email(primary)"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className={`w-full pl-12 pr-4 py-3 bg-white rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none`}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <PhoneInput
                    country={"us"}
                    {...register("phone", {
                      required: "Contact number is required",
                    })}
                    value={phone}
                    onChange={(value: string) => {
                      setPhone(value);
                      setValue("phone", value);
                      trigger("phone");
                    }}
                    containerClass="py-2 bg-white rounded-lg pr-2"
                    inputStyle={{ width: "100%" }}
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}
                </div>
              </div>
              <textarea
                rows={6}
                placeholder="What would you like to discuss on the call?"
                {...register("message", { required: "Message is required" })}
                className={`mb-0 sm:mb-5 w-full px-4 py-3 bg-white rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:outline-none`}
              />
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}

              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col w-full md:w-2/4">
                  <div className="flex flex-row items-center">
                    <input
                      type="checkbox"
                      id="agree"
                      {...register("terms", {
                        required: "You must agree to the terms",
                      })}
                      className="w-4 h-4"
                    />
                    <label
                      htmlFor="agree"
                      className="font-body text-white text-sm lg:text-base font-normal ml-4 mt-[1px]"
                    >
                      I agree with all the{" "}
                      <span
                        className="underline cursor-pointer"
                        onClick={handleNavigateTOS}
                      >
                        terms and conditions
                      </span>
                    </label>
                  </div>
                  {errors.terms && (
                    <span className="text-red-500">{errors.terms.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm lg:text-base rounded-full hover:opacity-90 transition"
                >
                  Send
                  {loading && (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline ml-2 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 98.1428 35.9116 97.3074 33.5536C95.0898 27.8224 91.7923 22.599 87.6164 18.3649C82.2176 13.1282 75.1988 9.68499 67.5155 8.5294C61.8955 7.60007 56.1025 7.80316 50.5492 9.12237C47.9789 9.73796 46.6941 12.4696 47.6945 14.9037C48.6948 17.3378 51.3881 18.5127 54.035 17.9262C58.5095 16.9287 63.1953 16.8167 67.6626 17.6019C72.8725 18.4732 77.7788 20.6767 81.8289 24.084C85.6312 27.2681 88.5903 31.4497 90.4692 36.2532C91.3763 38.5368 93.5421 39.678 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsComponent;
