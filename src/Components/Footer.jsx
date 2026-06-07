'use client'
import { Separator } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { MdOutlinePolymer } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  
  return (
    <div className="bg-[#162820]">
      <div className="max-w-275 mx-auto mt-7">
        <div className=" grid grid-cols-3 gap-5">
        <div className="space-y-4.5">
          <div className="flex space-x-2 items-center">
            <div>
              <MdOutlinePolymer className="text-[#c7a64b]" />
            </div>
            <div>
              <Link
                href="/"
                className="no-underline hover:no-underline decoration-transparent"
              >
                {" "}
                <p className="font-bold font-playfair text-xl">
                  <span className="text-white">Study</span>
                  <span className="text-[#c7a64b]">Nook</span>
                </p>
              </Link>
            </div>
          </div>
          <p className="text-sm text-[#9c9e96] leading-relaxed max-w-xs font-plus_jakarta">
            Reserve quiet, private study rooms in your university library. List
            your own room, manage bookings, and focus on what matters.
          </p>
          <div className="font-plus_jakarta text-[#9c9e96] flex space-x-2.5 items-center">
            <div className="border px-2 py-2 rounded-xl ">
              <LuFacebook />
            </div>
            <div className="border px-2 py-2 rounded-xl ">
              <FaXTwitter />
            </div>
            <div className="border px-2 py-2 rounded-xl ">
              <LuLinkedin />
            </div>
            <div className="border px-2 py-2 rounded-xl ">
              <RxInstagramLogo />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-white text-lg mb-4">Navigation</h1>
          <div>
            <p className="font-plus_jakarta hover:text-[#b69a47] text-[#92968e]">
              <Link href="/" >
                Home
              </Link>
            </p>
          </div>
          <div>
            <p className="font-plus_jakarta hover:text-[#b69a47] text-[#92968e]">
              <Link href="/rooms" >
                Rooms
              </Link>
            </p>
          </div>
          <div>
            <p className="font-plus_jakarta hover:text-[#b69a47] text-[#92968e]">
              <Link href="/my-bookings" >
                My Bookings
              </Link>
            </p>
          </div>
        </div>



        <div>
          <h2 className="text-white text-lg mb-4">Contact</h2>
          <div className="flex items-center space-x-2">
            <p><CiMail className="text-[#c9a84c]"/></p>
            <p className="text-[#92968e]">rooms@studynook.edu</p>
          </div>
          <div className="flex items-center space-x-2">
            <p><IoCallOutline className="text-[#c9a84c]"/></p>
            <p className="text-[#92968e]">+1 (555) 012-3456</p>
          </div>
        </div>
      </div>
      <Separator className="my-4  bg-[#92968e]" />
      <div className="text-[#92968e] flex justify-between items-center mb-5 font-plus_jakarta">
        <div>© 2026 StudyNook. All rights reserved.</div>
        <div>Designed for scholars, by scholars.</div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
