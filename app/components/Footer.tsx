/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
// import { MdLocationOn, MdEmail } from "react-icons/md";
// import { FaGlobe } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import { apiPath } from "../utils/api-path";
import { fetchScheduleConsultation } from "../utils/api";

const Footer = async ({ footerData, footerContent }: any) => {
  const contactArea = await fetchScheduleConsultation();
  const parsedItems = JSON.parse(contactArea[0]?.items);

  return (
    <footer className="bg-[#0B2B66] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <Image
            src={`${apiPath}/storage/${footerContent?.footer_logo}`}
            alt="Empowering Logo"
            width={200}
            height={100}
            className="mb-4 w-[131px] h-[95px] object-cover"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: footerContent?.about_text || "<p> Add content !</p>",
            }}
          />
          {/* <p className="font-sans leading[28px] text-white">
            A law firm that is built to help you navigate and win at corporate
            transactions.
          </p> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#45B29A] font-semibold text-[19px] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-4 font-sans">
            {footerData?.data?.map((menu: any) => (
              <li key={menu?.id}>
                <Link
                  href={menu?.url || "#"}
                  target={menu?.target}
                  className="hover:text-[#45B29A] duration-400"
                >
                  {menu?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-[#45B29A] text-[19px] font-semibold mb-4">
            Connect with Us
          </h3>
          <div className="flex gap-4 mb-[18px]">
            {footerContent?.youtube_url && (
              <a
                href={footerContent?.youtube_url}
                target="_blank"
                className="bg-white rounded-full duration-400 w-8 h-8 relative group hover:bg-[#45B29A]"
              >
                <FaYoutube className="w-4 h-4 text-[#0B2B66]  duration-400 group-hover:text-white absolute inset-0 m-auto" />
              </a>
            )}

            {footerContent?.twitter_url && (
              <a
                href={footerContent?.twitter_url}
                target="_blank"
                className="bg-white rounded-full duration-400 w-8 h-8 relative group hover:bg-[#45B29A]"
              >
                <FaTwitter className="w-4 h-4 text-[#0B2B66]  duration-400 group-hover:text-white absolute inset-0 m-auto" />
              </a>
            )}

            {footerContent?.facebook_url && (
              <a
                // href="https://www.facebook.com/empoweringlegalsolutions"
                href={footerContent?.facebook_url}
                target="_blank"
                className="bg-white rounded-full duration-400 w-8 h-8 relative group hover:bg-[#45B29A]"
              >
                <FaFacebookF className="w-4 h-4 text-[#0B2B66]  duration-400 group-hover:text-white absolute inset-0 m-auto" />
              </a>
            )}

            {footerContent?.bsky_url && (
              <a
                // href="https://bsky.app/profile/empowerlegalnow.bsky.social"
                href={footerContent?.bsky_url}
                target="_blank"
                className="bg-white rounded-full w-8 h-8  duration-400 relative group hover:bg-[#45B29A]"
              >
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-[#0D2D63]  duration-400 group-hover:fill-white absolute inset-0 m-auto"
                >
                  <path
                    d="M3.14198 0.97953C4.51073 2.00375 5.9826 4.085 6.52167 5.20297C7.06073 4.08734 8.53261 2.00609 9.90136 0.97953C10.8881 0.238905 12.4865 -0.33297 12.4865 1.49047C12.4865 1.85375 12.2779 4.54906 12.156 4.98734C11.7295 6.50609 10.1779 6.89515 8.79745 6.65844C11.2092 7.06859 11.8232 8.42797 10.4967 9.78734C7.97948 12.3702 6.88026 9.14047 6.59901 8.31312C6.55917 8.19828 6.53807 8.13031 6.52167 8.13031C6.50526 8.13031 6.48417 8.20062 6.44432 8.31312C6.16307 9.14047 5.06151 12.3702 2.54667 9.78734C1.22245 8.42797 1.83417 7.06859 4.24589 6.65844C2.86542 6.89515 1.31385 6.50609 0.889636 4.985C0.765417 4.54672 0.556824 1.8514 0.556824 1.48812C0.556824 -0.335314 2.15526 0.236561 3.14198 0.977186V0.97953Z"
                    // fill="#0D2D63"
                  />
                </svg>
              </a>
            )}

            {footerContent?.linkedin_url && (
              <a
                // href="https://www.linkedin.com/company/empoweringlegalsolutions"
                href={footerContent?.linkedin_url}
                target="_blank"
                className="bg-white rounded-full w-8 h-8 relative group hover:bg-[#45B29A] cursor-pointer"
              >
                <FaLinkedinIn className="w-4 h-4 text-[#0B2B66]  duration-400 duration-400 group-hover:text-white absolute inset-0 m-auto" />
              </a>
            )}

            {footerContent?.instagram_url && (
              <a
                // href="https://www.instagram.com/empowering.legal"
                href={footerContent?.instagram_url}
                className="bg-white rounded-full duration-400 w-8 h-8 relative group hover:bg-[#45B29A]"
              >
                <FaInstagram className="w-4 h-4 text-[#0B2B66]  duration-400 group-hover:text-white absolute inset-0 m-auto" />
              </a>
            )}
            
          </div>
          <div
            className="font-sans leading[28px]"
            dangerouslySetInnerHTML={{ __html: footerContent?.promotion_text }}
          />
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[#45B29A] text-[19px] font-semibold mb-4">
            Contact Us
          </h3>
          {/* <ul className="space-y-4 font-sans">
            <li className="flex items-start gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
                  fill="#56B3B1"
                />
              </svg>
              San Francisco Bay Area, California
            </li>
            <a
              href="mailto:contact@empowering.legal"
              className="flex items-start gap-2 hover:text-[#45B29A] duration-400"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                  fill="#56B3B1"
                />
              </svg>
              contact@empowering.legal
            </a>
            <a
              href="https://sellyourstartup.com/"
              target="_blank"
              className="flex items-start gap-2 hover:text-[#45B29A] duration-400"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.20646 3.18191C8.95433 3.26179 8.70533 3.35257 8.46018 3.45411C7.33792 3.91897 6.3182 4.60032 5.45926 5.45926C4.60032 6.3182 3.91897 7.33792 3.45411 8.46018C3.0852 9.35081 2.85837 10.2922 2.78045 11.25H7.26094C7.29294 10.1541 7.39498 9.0741 7.56457 8.05057C7.7725 6.79558 8.07972 5.63914 8.47522 4.65039C8.69114 4.11057 8.9351 3.61641 9.20646 3.18191ZM12 1.25C10.5883 1.25 9.1904 1.52806 7.88615 2.06829C6.5819 2.60853 5.39683 3.40037 4.3986 4.3986C3.40037 5.39683 2.60853 6.5819 2.0683 7.88615C1.52806 9.1904 1.25 10.5883 1.25 12C1.25 13.4117 1.52806 14.8096 2.06829 16.1138C2.60853 17.4181 3.40037 18.6032 4.3986 19.6014C5.39683 20.5996 6.5819 21.3915 7.88615 21.9317C9.1904 22.4719 10.5883 22.75 12 22.75C13.4117 22.75 14.8096 22.4719 16.1138 21.9317C17.4181 21.3915 18.6032 20.5996 19.6014 19.6014C20.5996 18.6032 21.3915 17.4181 21.9317 16.1138C22.4719 14.8096 22.75 13.4117 22.75 12C22.75 10.5883 22.4719 9.1904 21.9317 7.88615C21.3915 6.5819 20.5996 5.39683 19.6014 4.3986C18.6032 3.40037 17.4181 2.60853 16.1138 2.0683C14.8096 1.52806 13.4117 1.25 12 1.25ZM12 2.75C11.7387 2.75 11.4012 2.87579 11.0088 3.2822C10.6134 3.69161 10.2176 4.33326 9.86793 5.20747C9.52056 6.07589 9.2385 7.12424 9.04439 8.29576C8.88866 9.23569 8.79316 10.2331 8.76162 11.25L15.2384 11.25C15.2068 10.2331 15.1113 9.23569 14.9556 8.29576C14.7615 7.12424 14.4794 6.0759 14.1321 5.20748C13.7824 4.33326 13.3866 3.69161 12.9912 3.2822C12.5988 2.87579 12.2613 2.75 12 2.75ZM16.7391 11.25C16.7071 10.1541 16.605 9.07411 16.4354 8.05057C16.2275 6.79558 15.9203 5.63914 15.5248 4.65039C15.3089 4.11057 15.0649 3.61641 14.7935 3.18191C15.0457 3.26179 15.2947 3.35257 15.5398 3.45411C16.6621 3.91897 17.6818 4.60032 18.5407 5.45926C19.3997 6.31821 20.081 7.33792 20.5459 8.46018C20.9148 9.35082 21.1416 10.2922 21.2195 11.25H16.7391ZM15.2384 12.75L8.76162 12.75C8.79316 13.7669 8.88866 14.7643 9.04439 15.7042C9.2385 16.8758 9.52056 17.9241 9.86793 18.7925C10.2176 19.6667 10.6134 20.3084 11.0088 20.7178C11.4012 21.1242 11.7387 21.25 12 21.25C12.2613 21.25 12.5988 21.1242 12.9912 20.7178C13.3866 20.3084 13.7824 19.6667 14.1321 18.7925C14.4794 17.9241 14.7615 16.8758 14.9556 15.7042C15.1113 14.7643 15.2068 13.7669 15.2384 12.75ZM14.7935 20.8181C15.0649 20.3836 15.3089 19.8894 15.5248 19.3496C15.9203 18.3609 16.2275 17.2044 16.4354 15.9494C16.605 14.9259 16.7071 13.8459 16.7391 12.75H21.2195C21.1416 13.7078 20.9148 14.6492 20.5459 15.5398C20.081 16.6621 19.3997 17.6818 18.5407 18.5407C17.6818 19.3997 16.6621 20.081 15.5398 20.5459C15.2947 20.6474 15.0457 20.7382 14.7935 20.8181ZM9.20646 20.8181C8.9351 20.3836 8.69114 19.8894 8.47521 19.3496C8.07971 18.3609 7.7725 17.2044 7.56457 15.9494C7.39498 14.9259 7.29294 13.8459 7.26094 12.75H2.78045C2.85837 13.7078 3.0852 14.6492 3.45411 15.5398C3.91897 16.6621 4.60032 17.6818 5.45926 18.5407C6.3182 19.3997 7.33792 20.081 8.46018 20.5459C8.70533 20.6474 8.95433 20.7382 9.20646 20.8181Z"
                  fill="#56B3B1"
                />
              </svg>
              sellyourstartup.com
            </a>
          </ul> */}
          <div className="space-y-4 font-sans">
            {parsedItems?.map((item: any, index: number) => (
              <div key={index}>
                {index === 1 ? (
                  // No link for second item
                  <div className="flex text-left text-white items-center gap-3">
                    <img
                      src={`${apiPath}/storage/${item?.image}`}
                      alt="schedule image"
                      className="h-6 w-6"
                    />
                    <div className="font-sans text-[18px]">{item?.text}</div>
                  </div>
                ) : (
                  // Link for first and third items
                  <Link
                    href={
                      index === 0
                        ? "mailto:contact@empowering.legal"
                        : index === 2
                        ? `tel:${item?.text || "#"}`
                        : "#"
                    }
                    className="flex text-left text-white duration-400 hover:text-[#45B29A] items-center gap-3"
                  >
                    <img
                      src={`${apiPath}/storage/${item?.image}`}
                      alt="schedule image"
                      className="h-6 w-6"
                    />
                    <div className="font-sans text-[18px]">{item?.text}</div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coyright text bottom bar*/}
      <div
        className="border-t border-[#254272] mt-8 pt-4 text-center font-sans copyrightText"
        dangerouslySetInnerHTML={{ __html: footerContent?.copyright_text }}
      />
      {/* <p>
          Copyright © 2025 Syeda Nazifa Nawroj. All Rights Reserved.{" "}
          <a
            href="https://empowering.legal"
            className="underline text-[#45B29A]"
          >
            Empowering.legal
          </a>
        </p> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
