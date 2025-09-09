/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import {
  FaFacebookF,
  // FaMediumM,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { apiPath } from "../utils/api-path";
// import { logCustomEvent } from "../utils/firebase";

const Header = ({ headerData, headerContent }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // console.log("headerContent", headerContent);

  // const handleNavigate = () => {
  //   window.open(
  //     "https://app.lawmatics.com/forms/share/1deea1d5-aaf5-4485-bf02-edb7958361ee",
  //     "_blank"
  //   ); //updated
  //   logCustomEvent("Schedule a call");
  // };

  // const links = [
  //   { href: "/", label: "Home", target: "_self" },
  //   { href: "/services", label: "Services", target: "_self" },
  //   { href: "/attorney", label: "Attorney", target: "_self" },
  //   { href: "/deals", label: "Deals", target: "_self" },
  //   { href: "/blogs", label: "Blogs", target: "_self" },
  //   {
  //     href: "https://www.linkedin.com/company/empowering-legal-solutions/",
  //     label: "LinkedIn",
  //     target: "_blank",
  //   },
  // ];

  return (
    <header className="w-full md:sticky top-0 z-100">
      {/* Top Blue Bar */}
      <div className="bg-[#0D2D63] text-white md:px-[5rem] sm:px-8 px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 z-50">
        <div className="flex gap-8">
          {headerContent?.header_email && (
            <Link
              href={`mailto:${headerContent?.header_email || "#"}`}
              className="flex hover:text-[#45B29A] duration-400 items-center gap-2"
            >
              <HiOutlineMail className="text-lg" />
              <span className="font-sans">
                {headerContent?.header_email || ""}
                {/* contact@empowering.legal */}
              </span>
            </Link>
          )}

          {headerContent?.header_phone && (
            <Link
              href={`tel:${headerContent?.header_phone || "#"}`}
              className="flex hover:text-[#45B29A] gap-2 items-center mt-1"
            >
              <HiPhone className="text-md h-[21px]" />
              <span className="font-sans text-sm">
                {headerContent?.header_phone || ""}
              </span>
            </Link>
          )}
        </div>

        <div className="flex gap-3">
          {headerContent?.youtube_url && (
            <a
              href={headerContent?.youtube_url}
              target="_blank"
              className="bg-white rounded-full w-8 h-8 duration-400 relative group hover:bg-[#45B29A]"
            >
              <FaYoutube className="w-4 h-4 text-[#0B2B66] duration-400 group-hover:text-white absolute inset-0 m-auto" />
            </a>
          )}

          {headerContent?.twitter_url && (
            <a
              href={headerContent?.youtube_url}
              target="_blank"
              className="bg-white rounded-full w-8 h-8 duration-400 relative group hover:bg-[#45B29A]"
            >
              <FaTwitter className="w-4 h-4 text-[#0B2B66] duration-400 group-hover:text-white absolute inset-0 m-auto" />
            </a>
          )}

          {headerContent?.facebook_url && (
            <a
              href={headerContent?.facebook_url}
              // href="https://www.facebook.com/empoweringlegalsolutions"
              target="_blank"
              className="bg-white rounded-full w-8 h-8 duration-400 relative group hover:bg-[#45B29A]"
            >
              <FaFacebookF className="w-4 h-4 text-[#0B2B66] duration-400 group-hover:text-white absolute inset-0 m-auto" />
            </a>
          )}

          {headerContent?.bsky_url && (
            <a
              href={headerContent?.bsky_url}
              // href="https://bsky.app/profile/empowerlegalnow.bsky.social"
              target="_blank"
              className="bg-white rounded-full duration-400 w-8 h-8 relative group hover:bg-[#45B29A]"
            >
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-[#0D2D63] duration-400 group-hover:fill-white absolute inset-0 m-auto"
              >
                <path d="M3.14198 0.97953C4.51073 2.00375 5.9826 4.085 6.52167 5.20297C7.06073 4.08734 8.53261 2.00609 9.90136 0.97953C10.8881 0.238905 12.4865 -0.33297 12.4865 1.49047C12.4865 1.85375 12.2779 4.54906 12.156 4.98734C11.7295 6.50609 10.1779 6.89515 8.79745 6.65844C11.2092 7.06859 11.8232 8.42797 10.4967 9.78734C7.97948 12.3702 6.88026 9.14047 6.59901 8.31312C6.55917 8.19828 6.53807 8.13031 6.52167 8.13031C6.50526 8.13031 6.48417 8.20062 6.44432 8.31312C6.16307 9.14047 5.06151 12.3702 2.54667 9.78734C1.22245 8.42797 1.83417 7.06859 4.24589 6.65844C2.86542 6.89515 1.31385 6.50609 0.889636 4.985C0.765417 4.54672 0.556824 1.8514 0.556824 1.48812C0.556824 -0.335314 2.15526 0.236561 3.14198 0.977186V0.97953Z" />
              </svg>
            </a>
          )}

          {headerContent?.linkedin_url && (
            <a
              href={headerContent?.linkedin_url}
              // href="https://www.linkedin.com/company/empoweringlegalsolutions"
              target="_blank"
              className="bg-white rounded-full duration-400 w-8 h-8 relative group hover:bg-[#45B29A] cursor-pointer"
            >
              <FaLinkedinIn className="w-4 h-4 duration-400 text-[#0B2B66] group-hover:text-white absolute inset-0 m-auto" />
            </a>
          )}

          {headerContent?.instagram_url && (
            <a
              href={headerContent?.instagram_url}
              // href="https://www.instagram.com/empowering.legal"
              target="_blank"
              className="bg-white rounded-full duration-400 w-8 h-8 relative group hover:bg-[#45B29A]"
            >
              <FaInstagram className="w-4 h-4 text-[#0B2B66] duration-400 group-hover:text-white absolute inset-0 m-auto" />
            </a>
          )}
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white md:px-16 sm:px-8 px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        {headerContent?.main_logo && (
          <Link href="/" className="flex items-center">
            <Image
              src={`${apiPath}/storage/${headerContent?.main_logo}`}
              width={400}
              height={100}
              alt="Empowering Legal Solutions"
              className="w-[148px] h-[118px] object-cover"
            />
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center font-medium text-black font-sans">
          {/* {links.map(({ href, label, target }) => { */}
          {headerData?.data?.map((menu: any) => {
            const isActive = pathname === menu?.url;
            return (
              <Link
                key={menu?.id}
                href={menu?.url || "#"}
                target={menu?.target || "_blank"}
                className={`hover:text-[#56B3B1] duration-400 font-semibold ${
                  isActive ? "text-[#56B3B1]" : "text-black"
                }`}
              >
                {!menu?.link_class && <>{menu?.name}</>}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        {/* <div className="hidden lg:flex">
          <button
            className="bg-[#1C4A87] text-white text-[18px] font-[600] font-sans rounded-full hover:bg-[#56B3B1] duration-400 px-[32px] py-[16px] cursor-pointer"
            onClick={handleNavigate}
          >
            Book a Call
          </button>
        </div> */}
        {headerData?.data?.map(
          (menu: any) =>
            menu?.link_class === "button" && (
              <div className="hidden lg:flex" key={menu?.id}>
                <Link
                  href={menu?.url}
                  target={menu?.target}
                  className="bg-[#1C4A87] text-white text-[18px] font-[600] font-sans rounded-full hover:bg-[#56B3B1] duration-400 px-[32px] py-[16px] cursor-pointer"
                >
                  {menu?.name}
                </Link>
              </div>
            )
        )}

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#0D2D63] flex items-center justify-center"
        >
          <GiHamburgerMenu size={28} />
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-left">
          {/* Background overlay */}
          {/* <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div> */}

          {/* Sidebar menu */}
          <div className="w-80 bg-white h-full shadow-lg z-50 p-6 relative">
            {/* Close icon */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>

            <nav className="mt-12 flex flex-col gap-4 text-lg font-medium">
              {/* {[
                { name: "Home", href: "/", active: true },
                { name: "Services", href: "/services" },
                { name: "Attorney", href: "/attorney" },
                { name: "Deals", href: "/deals" },
                { name: "Blogs", href: "/blogs" },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/company/empowering-legal-solutions/",
                },
              ].map(({ name, href, active }) => ( */}
              {headerData?.data?.map((menu: any) => {
                const isActive = pathname === menu?.url;
                return (
                  <Link
                    key={menu?.id}
                    href={menu?.url || "#"}
                    target={menu?.target || "_self"}
                    className={`py-2 border-b border-gray-200 ${
                      isActive ? "text-[#56B3B1]" : "text-black"
                    }`}
                  >
                    {menu?.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
