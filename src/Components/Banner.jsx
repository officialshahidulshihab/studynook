
import { Chip } from "@heroui/react";

import React from "react";
import { IoMdBook } from "react-icons/io";

const Banner = () => {
  return (
    <div className=" bg-[#0d1e1a]  relative overflow-hidden">
      <div className="bg-[url(/banner.avif)] bg-cover bg-center bg-no-repeat h-100 opacity-20 absolute inset-0 ">
      <div className="absolute inset-0 bg-linear-to-r from-[#0d1e1a] via-[#0d1e1a]/80 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0d1e1a] via-transparent to-transparent" />
      </div>
       <div className="max-w-275 mx-auto p-10 space-y-2 opacity-100 ">
         <div className="flex  ">
          <Chip className="flex items-center gap-2 border border-[#c9a84c] bg-[#0d1e1a] text-[#c9a84c]">
            <IoMdBook />
            <p>University Library Booking System</p>
          </Chip>
        </div>

        <div>
          <p className="text-[#f0ebe0] text-6xl">Find Your Perfect</p>
          <p className="text-[#c9a84c] text-6xl">Study Room</p>
        </div>
        <div>
          <p className="text-[#f0ebe0] max-w-107.5">
            Browse and book quiet, private study rooms in your library. List
            your own room and earn. No conflicts, no chaos — just focus.
          </p>
        </div>
       </div>
    </div>
  );
};

export default Banner;
