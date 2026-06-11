import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import RoomCard from "./RoomCard";
import { getFeaturedRooms } from "@/lib/data";

const Featured =async () => {
  const roomData=await getFeaturedRooms();
  return (
    <div className="bg-[#0d1e1a] border-t border-[#2a3525]">
      <div className="max-w-275 mx-auto">
        <h1 className="text-[#c9a84c] font-plus_jakarta pt-5">Available Now</h1>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[#f0ebe0] text-4xl mt-5">Featured Study Rooms</h2>
          <Link href={"/rooms"}>
            <p className="link text-[#c9a84c] flex items-center gap-2">
              <span>View all rooms</span> <FaArrowRightLong />
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 pb-10">
         { 
          roomData.map((room,ind)=><RoomCard key={ind} room={room}></RoomCard>)
         }
        </div>
      </div>
    </div>
  );
};

export default Featured;
