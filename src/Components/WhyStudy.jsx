import React from "react";
import { BsShieldFillPlus } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { MdSmartToy } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";

const WhyStudy = () => {
  return (
    <div className="bg-[#162820] border-t border-b border-[#c9a84c38]">
      <div className="max-w-275 mx-auto">
        <div className=" space-y-6 text-center pt-15">
          <h1 className="text-[#c9a84c] font-plus_jakarta">WHY STUDYNOOK</h1>

          <h2 className="text-[#f0ebe0] text-4xl">
            Everything you need to focus
          </h2>
          <div className="w-162.5 mx-auto">
            <p className="font-plus_jakarta text-[#527c74]   ">
              Built specifically for academic environments — with the
              reliability and elegance that serious study demands.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-10">
          <div className="p-4 bg-[#0d1e1a] rounded-xl">
            <div className="px-3 py-3   border border-[#c9a84c] rounded-xl text-[#c9a84c] inline-block bg-[#202c1f]">
              <BsShieldFillPlus className="mx-auto " />
            </div>
            <p className="text-xl text-[#f0ebe0] mb-2">Conflict-Free Booking</p>
            <p className="font-plus_jakarta text-[#527c74] text-[12px]">
              Our real-time conflict detection ensures no two users can ever
              book the same room at the same time.
            </p>
          </div>
          <div className="p-4 bg-[#0d1e1a] rounded-xl">
            <div className="px-3 py-3   border border-[#c9a84c] rounded-xl text-[#c9a84c] inline-block bg-[#202c1f]">
              <IoTime />
            </div>
            <p className="text-2xl text-[#f0ebe0]">Instant Confirmation</p>
            <p className="font-plus_jakarta text-[#527c74] text-[12px]">
              Get immediate booking confirmation. No waiting, no back-and-forth.
              Your room is secured the moment you confirm.
            </p>
          </div>
          <div className="p-4 bg-[#0d1e1a] rounded-xl">
            <div className="px-3 py-3   border border-[#c9a84c] rounded-xl text-[#c9a84c] inline-block bg-[#202c1f]">
              <MdSmartToy />
            </div>
            <p className="text-2xl text-[#f0ebe0]">Smart Filtering</p>
            <p className="font-plus_jakarta text-[#527c74] text-[12px]">
              Find exactly the room you need with filters for amenities,
              capacity, floor level, and hourly rate.
            </p>
          </div>
          <div className="p-4 bg-[#0d1e1a] rounded-xl">
            <div className="px-3 py-3   border border-[#c9a84c] rounded-xl text-[#c9a84c] inline-block bg-[#202c1f]">
              <RiParentFill />
            </div>
            <p className="text-2xl text-[#f0ebe0]">Earn from Your Space</p>
            <p className="font-plus_jakarta text-[#527c74] text-[12px]">
              Room owners can list their private study spaces and earn money
              while helping fellow students focus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyStudy;
