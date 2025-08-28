// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import React, { useEffect, useState } from "react";
// import { Logo } from "../assets";
// import { useRouter } from "next/navigation";
// import { logCustomEvent } from "../utils/firebase";
// import Image from "next/image";
// import { apiPath } from "../utils/api-path";
// import Link from "next/link";

// type HeaderLink = {
//   id: string;
//   name: string;
//   url: string;
//   target?: string;
// };
// const Header: React.FC = () => {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [headerData, setHeaderData] = useState([] as HeaderLink[]);

//   const handleNavigation = () => {
//     window.open("https://sellyourstartup.com/", "_blank");
//     logCustomEvent("visited sellyourstartup.com");
//   };

//   const handleNavigateLinkedin = () => {
//     window.open("https://www.linkedin.com/company/empowering-legal-solutions/");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${apiPath}/api/menus/header`);
//         const data = await response.json();
//         setHeaderData(data?.data);
//       } catch (error) {
//         console.error("Error fetching Google Sheet data:", error);
//       } finally {
//         // setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {}, [headerData]);

//   return (
//     <header className="flex items-center justify-between px-6 py-4 md:px-[90px] md:py-[20px] bg-[#002147] fixed z-50 w-full top-0">
//       <Image
//         className="cursor-pointer"
//         alt="Frame"
//         src={Logo}
//         width={100}
//         height={100}
//         onClick={() => router.push("/")}
//       />
//       {/* Hamburger Menu for Mobile */}
//       <div className="md:hidden">
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="text-white focus:outline-none"
//         >
//           {/* Hamburger icon */}
//           {menuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//             >
//               <path
//                 d="M15.0005 0.999878L1.00049 14.9999M1.00049 0.999878L15.0005 14.9999"
//                 stroke="white"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Navigation Links for Desktop */}
//       <div className="hidden md:flex items-center justify-center gap-9 cursor-pointer">
//         {Array.isArray(headerData) &&
//           headerData?.map((data: any) => (
//             <Link
//               key={data?.id}
//               href={data?.url}
//               target={data?.target}
//               className="font-body font-bold text-white text-sm"
//             >
//               {data?.name}
//             </Link>
//           ))}
//         {/* <span
//           className="font-body font-bold text-white text-sm"
//           onClick={() => router.push("/")}
//         >
//           Home
//         </span>
//         <span
//           className="font-body font-normal text-white text-sm"
//           onClick={() => router.push("/services")}
//         >
//           Services
//         </span>
//         <span
//           className="font-body font-normal text-white text-sm"
//           onClick={() => router.push("/attorney")}
//         >
//           Attorney
//         </span>
//         <span
//           className="font-body font-normal text-white text-sm"
//           onClick={() => router.push("/deals")}
//         >
//           Deals
//         </span>
//         <span
//           className="font-body font-normal text-white text-sm"
//           onClick={() => router.push("/blogs")}
//         >
//           Blogs
//         </span>
//         <span
//           className="font-body font-normal text-white text-sm"
//           onClick={handleNavigateLinkedin}
//         >
//           LinkedIn
//         </span> */}
//       </div>

//       <div className="hidden md:flex items-center gap-4">
//         <button
//           className="font-body px-8 py-4 rounded-full border border-white font-normal text-white text-sm"
//           onClick={handleNavigation}
//         >
//           sellyourstartup.com
//         </button>
//         <button
//           className="font-body px-8 py-4 rounded-full border border-[#007bff] bg-[#007bff] font-normal text-white text-sm"
//           onClick={() => {
//             router.push("/contact-us");
//             logCustomEvent("visited contactUs page");
//           }}
//         >
//           Contact
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="z-50 absolute top-[100%] left-0 w-full bg-[#002147] p-6 flex flex-col items-center md:hidden">
//           <span
//             className="font-body font-bold text-white text-sm my-2"
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               router.push("/");
//             }}
//           >
//             Home
//           </span>
//           <span
//             className="font-body font-normal text-white text-sm my-2"
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               router.push("/services");
//             }}
//           >
//             Services
//           </span>
//           <span
//             className="font-body font-normal text-white text-sm my-2"
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               router.push("/attorney");
//             }}
//           >
//             Attorney
//           </span>
//           <span
//             className="font-body font-normal text-white text-sm my-2"
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               router.push("/deals");
//             }}
//           >
//             Deals
//           </span>
//           <span
//             className="font-body font-normal text-white text-sm my-2"
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               router.push("/blogs");
//             }}
//           >
//             Blogs
//           </span>
//           <span
//             className="font-body font-normal text-white text-sm my-2"
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               handleNavigateLinkedin();
//             }}
//           >
//             LinkedIn
//           </span>

//           <button
//             className="font-body w-full mt-4 px-8 py-4 rounded-full border border-white font-normal text-white text-sm"
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               handleNavigation();
//             }}
//           >
//             sellyourstartup.com
//           </button>
//           <button
//             className="font-body w-full mt-4 px-8 py-4 rounded-full border border-[#007bff] bg-[#007bff] font-normal text-white text-sm"
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//               router.push("/contact-us");
//               logCustomEvent("visited contactUs page");
//             }}
//           >
//             Contact
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

"use client";

import { useState } from "react";
import {
  FaFacebookF,
  // FaMediumM,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { logCustomEvent } from "../utils/firebase";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const handleNavigate = () => {
    window.open(
      "https://app.lawmatics.com/forms/share/1deea1d5-aaf5-4485-bf02-edb7958361ee",
      "_blank"
    ); //updated
    logCustomEvent("Schedule a call");
  };

  const links = [
    { href: "/", label: "Home", target: "_self" },
    { href: "/services", label: "Services", target: "_self" },
    { href: "/attorney", label: "Attorney", target: "_self" },
    { href: "/deals", label: "Deals", target: "_self" },
    { href: "/blogs", label: "Blogs", target: "_self" },
    {
      href: "https://www.linkedin.com/company/empowering-legal-solutions/",
      label: "LinkedIn",
      target: "_blank",
    },
  ];

  return (
    <header className="w-full md:sticky top-0 z-100">
      {/* Top Blue Bar */}
      <div className="bg-[#0D2D63] text-white md:px-[5rem] sm:px-8 px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 z-50">
        <Link href={"mailto:contact@empowering.legal"} className="flex hover:text-[#45B29A] duration-400 items-center gap-2">
          <HiOutlineMail className="text-lg" />
          <span className="font-sans">contact@empowering.legal</span>
        </Link>

        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/empoweringlegalsolutions"
            target="_blank"
            className="bg-white rounded-full w-8 h-8 duration-400 relative group hover:bg-[#45B29A]"
          >
            <FaFacebookF className="w-4 h-4 text-[#0B2B66] duration-400 group-hover:text-white absolute inset-0 m-auto" />
          </a>
          <a
            href="https://bsky.app/profile/empowerlegalnow.bsky.social"
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
          <a
            href="https://www.linkedin.com/company/empoweringlegalsolutions"
            target="_blank"
            className="bg-white rounded-full duration-400 w-8 h-8 relative group hover:bg-[#45B29A] cursor-pointer"
          >
            <FaLinkedinIn className="w-4 h-4 duration-400 text-[#0B2B66] group-hover:text-white absolute inset-0 m-auto" />
          </a>
          <a
            href="https://www.instagram.com/empowering.legal"
            target="_blank"
            className="bg-white rounded-full duration-400 w-8 h-8 relative group hover:bg-[#45B29A]"
          >
            <FaInstagram className="w-4 h-4 text-[#0B2B66] duration-400 group-hover:text-white absolute inset-0 m-auto" />
          </a>
        </div>
      </div>

      {/* Main Header */}

      <div className="bg-white md:px-16 sm:px-8 px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ELS_logo.png"
            width={400}
            height={100}
            alt="Empowering Legal Solutions"
            className="w-[148px] h-[108px] object-cover"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center font-medium text-black font-sans">
          {links.map(({ href, label, target }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                target={target}
                className={`hover:text-[#56B3B1] duration-400 font-semibold ${
                  isActive ? "text-[#56B3B1]" : "text-black"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <button
            className="bg-[#1C4A87] text-white text-[18px] font-[600] font-sans rounded-full hover:bg-[#56B3B1] duration-400 px-[32px] py-[16px] cursor-pointer"
            onClick={handleNavigate}
          >
            Book a Call
          </button>
        </div>

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
              {[
                { name: "Home", href: "/", active: true },
                { name: "Services", href: "/services" },
                { name: "Attorney", href: "/attorney" },
                { name: "Deals", href: "/deals" },
                { name: "Blogs", href: "/blogs" },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/company/empowering-legal-solutions/",
                },
              ].map(({ name, href, active }) => (
                <a
                  key={name}
                  href={href}
                  className={`py-2 border-b border-gray-200 ${
                    active ? "text-[#66C2C2]" : "text-black"
                  }`}
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
