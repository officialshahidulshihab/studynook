import RoomCard from "@/Components/RoomCard";
import SearchBar from "@/Components/SearchBar";
import { getAllRooms } from "@/lib/data";
import React from "react";
export const metadata = { title: "Available Rooms" };

const AllRooms = async() => {
  const allRoom=await getAllRooms();
 
  return (
    <div className="bg-[#0d1e1a]">
      <div className="pt-10 pb-10 ">
        <div className="bg-[#162820] font-plus_jakarta pt-10 pl-15 pb-10 border-b border-[#2a3525]">
          <h1 className="text-[#c9a84c] text-[14px]">ALL SPACES</h1>
          <h2 className="text-[#f0ebe0] text-3xl font-playfair mt-3 mb-2">
            Browse Study Rooms
          </h2>
          <p className="text-[#527c74] text-[12px]">
            {allRoom.length} rooms available across all floors
          </p>
        </div>
        <div className="max-w-275 mx-auto">
          <SearchBar></SearchBar>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 max-w-275 mx-auto">
          {
            allRoom.map((room,ind)=>{
            return <RoomCard key={ind} room={room}></RoomCard>})
          }
        </div>

       
      </div>
    </div>
  );
};

export default AllRooms;
