import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import SideImage from "@/asset/simpleimage.avif";
import Image from "next/image";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const SimpleProcess = () => {
  return (
    <div className="border-b border-[#c9a84c38]  bg-[#0d1e1a]">
      <div className="max-w-275 mx-auto flex items-center justify-between gap-8">
        {/* Left Side */}
        <div>
          {/* Top portion Left side */}
          <div className="space-y-5 pt-15">
            <h1 className="text-[#c9a84c] font-plus_jakarta text-[14px]">
              SIMPLE PROCESS
            </h1>
            <h3 className="text-[#f0ebe0] text-3xl font-bold">
              Book a room in
            </h3>
            <p className="text-[#c9a84c] text-2xl font-bold italic">
              three steps
            </p>
          </div>

          {/* bottom  portion Left side */}

          <div className="space-y-5 mt-7 mb-7">
            <div className="flex items-center gap-3">
              <div className="rounded-full px-3 py-2 text-center text-[#c9a84c] border border-[#c9a84c] bg-[#0d1e1a]">
                <p>01</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-[#f0ebe0]">Browse & Filter</p>
                <p className="text-[#527c74] max-w-112.5">
                  Explore all available rooms. Filter by amenities, capacity,
                  floor, and price.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full px-3 py-2 text-center text-[#c9a84c] border border-[#c9a84c] bg-[#0d1e1a]">
                <p>02</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-[#f0ebe0]">Choose Your Slot</p>
                <p className="text-[#527c74] max-w-112.5">
                  Select a date and time window. Our system instantly shows
                  availability in real time.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full px-3 py-2 text-center text-[#c9a84c] border border-[#c9a84c] bg-[#0d1e1a]">
                <p>03</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-[#f0ebe0]">Confirm & Focus</p>
                <p className="text-[#527c74] max-w-112.5">
                  Confirm your booking with one click. Get your confirmation and
                  show up ready to work.
                </p>
              </div>
            </div>
          </div>
          <div className="font-plus_jakarta  mt-3 pb-6">
            <div>
              <Link href={"/rooms"}>
                <Button className="flex items-center bg-[#c9a84c] text-[#15241c]">
                  <p>Start Browsing</p> <IoIosArrowRoundForward />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right side */}

        <div>
          <div className="relative ">
            <Image
              src={SideImage}
              alt="side image"
              width={500}
              height={500}
              className="rounded-xl"
            ></Image>
          <div className="bg-[#162820] border border-[#0aa6585e] rounded-2xl flex items-center gap-2 px-3 py-5 max-w-87.5 absolute -bottom-5 -left-20 right-4 z-10">
            <div className="rounded-full px-2 py-2 text-center text-[#0aa657] border  bg-[#12482a] inline-block border-[#12482a] ">
              <IoCheckmarkDoneCircleSharp />
            </div>
            <div className="">
              <p className="text-[#f0ebe0]">Booking Confirmed</p>
              <p className="text-[#527c74]">
                The Athenaeum Suite · 10:00-13:00
              </p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SimpleProcess;
