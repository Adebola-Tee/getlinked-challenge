"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiX } from "react-icons/hi";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = [
    {
      title: "Timeline",
      href: "/",
    },
    {
      title: "Overview",
      href: "/",
    },
    {
      title: "FAQS",
      href: "/",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const onToggleMenu = () => {
    setShowMenu((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return (
    <>
      <div className="">
        <div onClick={onToggleMenu} className="md:hidden cursor-pointer">
          <Image
            src="/menu.svg"
            width={30}
            height={30}
            alt="Menu Icon"
            className="block w-auto h-auto cursor-pointer"
          />
        </div>
        <div
          className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] bg-[#150E28] px-12 ${
            showMenu ? "translate-x-0 rounded-none" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-end mt-6 padding_section">
            <button
              aria-label="Toggle Menu"
              onClick={onToggleMenu}
              className={`md:hidden border border-primary-pink_100 cursor-pointer  rounded-full p-1 duration-500 ${
                !showMenu && "-rotate-[360deg]"
              }
            `}
            >
              <HiX className="text-xl cursor-pointer" />
            </button>
          </div>

          <nav className="flex flex-col mt-4 padding_section">
            {navLinks.map((link, id) => (
              <Link
                href={link.href}
                key={id}
                className="flex items-center gap-x-2 font-semibold text-lg pt-4 group"
                onClick={onToggleMenu}
              >
                {link.title}
              </Link>
            ))}
            <Link href='/register' className="text-center bg-[#9025AD] bg-gradient-to-r from-[#D434FE] to-[#903AFF] cursor-pointer p-3 rounded-lg w-[150px] mt-6 md:mx-0 md:hidden lg:block">
              Register
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
