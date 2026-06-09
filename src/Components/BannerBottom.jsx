import React from "react";
import { FaPercent, FaPlus } from "react-icons/fa";

const BannerBottom = () => {
  return (
    <div className="bg-[#15261f] border-t border-[#2a3525]">
      <div className="max-w-275 mx-auto grid grid-cols-4 gap-5 pl-20 p-10">
        <div className="space-y-2">
          <div className="text-[#c9a84c]  flex items-center ">
            <p className="text-2xl">500</p>
            <FaPlus />
          </div>
          <p className="text-[14px] text-[#527c74]">Rooms Listed</p>
        </div>
        <div className="space-y-2">
          <div className="text-[#c9a84c]  flex items-center ">
            <p className="text-2xl">12k</p>
            <FaPlus />
          </div>
          <p className="text-[14px] text-[#527c74]">Bookings Made</p>
        </div>
        <div className="space-y-2">
          <div className="text-[#c9a84c]  flex items-center ">
            <p className="text-2xl">98</p>
            <FaPercent />
          </div>
          <p className="text-[14px] text-[#527c74]">Satisfaction Rate</p>
        </div>
        <div className="space-y-2">
          <div className="text-[#c9a84c] text-2xl flex items-center gap-2">
            <p className="">24/7</p>
          </div>
          <p className="text-[14px] text-[#527c74]">Always Available</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
