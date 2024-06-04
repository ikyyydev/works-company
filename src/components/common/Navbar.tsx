/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainButton from "./MainButton";
import { MenuIcon, X } from "lucide-react";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="z-20 md:sticky md:top-0 md:shadow-none">
      {/* Desktop */}
      <div className="animate-in fade-in zoom-in hidden bg-white p-4 lg:block">
        <div className="mx-20 flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer">
            <h2 className="text-3xl font-extrabold tracking-widest">Works</h2>
          </div>
          {/* Menu List */}
          <div className="menu-list">
            <ul className="flex select-none items-center gap-[20px] text-[16px] font-medium xl:gap-[40px]">
              <Link href={"#about"}>
                <li className="flex cursor-pointer items-center gap-2 font-[500] text-gray-600 hover:text-primary">
                  About
                </li>
              </Link>

              <Link href={"#services"}>
                <li className="flex cursor-pointer items-center gap-2 font-[500] text-gray-600 hover:text-primary">
                  Service
                </li>
              </Link>
              <Link href={"#career"}>
                <li className="flex cursor-pointer items-center gap-2 font-[500] text-gray-600 hover:text-primary">
                  History
                </li>
              </Link>
              <Link href={"#career"}>
                <li className="flex cursor-pointer items-center gap-2 font-[500] text-gray-600 hover:text-primary">
                  Career
                </li>
              </Link>
            </ul>
          </div>
          {/* Button Signin */}
          <div className="signin-button selec-none flex items-center gap-[40px]">
            <MainButton
              text="Contact"
              classes="text-sm font-semibold rounded-md "
              size="normal"
              width="w-32"
              rightIconRoute="/image/envelop_icon.png"
              rightIconClass="w-5 h-5 ml-2"
            />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` animate-in fade-in zoom-in fixed top-0 z-[999] block w-full bg-white py-4 shadow-sm max-lg:px-5 max-md:px-5 lg:hidden  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="mx-[10px] flex justify-between">
          <div className="flex select-none items-center gap-[50px] text-[16px]">
            <img src="/image/logo.png" alt="logo" className="w-[6rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="animate-in fade-in zoom-in cursor-pointer text-black"
                onClick={toggleMenu}
              />
            ) : (
              <div
                onClick={toggleMenu}
                className="animate-in fade-in zoom-in cursor-pointer"
              >
                <MenuIcon className="text-primary" />
              </div>
            )}
          </div>
        </div>
        {menu ? (
          <div className="animate-in slide-in-from-right my-8 select-none">
            <hr className="text-slate-900" />
            <div className="mx-4 mt-8 flex flex-col gap-8">
              <ul className="flex select-none flex-col gap-4 text-[16px] font-medium xl:gap-[40px]">
                <Link
                  href={"#about"}
                  className="py-2 pl-4 hover:bg-primary hover:text-slate-100"
                >
                  <li className="flex cursor-pointer items-center gap-2 font-[500] hover:text-slate-100 ">
                    About
                  </li>
                </Link>
                <Link
                  href={"#service"}
                  className="py-2 pl-4 hover:bg-primary hover:text-slate-100"
                >
                  <li className="flex cursor-pointer items-center gap-2 font-[500] hover:text-slate-100">
                    Service
                  </li>
                </Link>
                <Link
                  href={"#career"}
                  className="py-2 pl-4 hover:bg-primary hover:text-slate-100"
                >
                  <li className="flex cursor-pointer items-center gap-2 font-[500] hover:text-slate-100">
                    History
                  </li>
                </Link>
                <Link
                  href={"#career"}
                  className="py-2 pl-4 hover:bg-primary hover:text-slate-100"
                >
                  <li className="flex cursor-pointer items-center gap-2 font-[500] hover:text-slate-100">
                    Career
                  </li>
                </Link>
              </ul>
              <div className="signin-button selec-none flex items-center gap-[40px]">
                <MainButton
                  text="Contact"
                  classes="text-sm font-semibold rounded-md"
                  size="normal"
                  width="w-32"
                  rightIconRoute="/image/envelop_icon.png"
                  rightIconClass="w-5 h-5 ml-2"
                />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
