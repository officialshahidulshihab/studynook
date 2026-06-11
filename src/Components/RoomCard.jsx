import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaRegClock, FaUserFriends } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const RoomCard = ({ room }) => {
  const {
    name,
    description,
    image,
    hourlyRate,
    capacity,
    floor,
    amenities,
    bookingCount,
    availableSlots,
    _id,
    createdAt,
    owner,
  } = room;

  // const tags=amenities.map((tag,ind)=><Chip className='text-[#9d9745] border bg-[#283525] border-[#9d9745]' key={ind}>{tag}</Chip>)

  return (
    <div className="bg-[#162820] rounded-2xl max-w-[500]">
      <div>
        <Image
          src={image}
          alt={name}
          className="rounded-t-2xl h-[300]"
          width={500}
          height={500}
        ></Image>
      </div>
      <div className="p-4">
        <div className=" mb-4 mt-2">
          <h1 className="text-[#f0ebe0] text-xl mb-2">{name}</h1>
          <p className="line-clamp-1 font-plus_jakarta text-[14px] text-[#527c74]">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-4 text-[14px] text-[#527c74] font-plus_jakarta mb-4">
          <div className="flex items-center gap-2.5">
            <FaLocationDot className="text-[#c9a84c] " /> <p>{floor}</p>
          </div>
          <div className="flex items-center gap-2.5">
            <FaUserFriends className="text-[#c9a84c] " />
            <p>{capacity} People</p>
          </div>
          <div className="flex items-center gap-2.5">
            <FaRegClock className="text-[#c9a84c] " />
            <p>{bookingCount} bookings</p>
          </div>
        </div>
        <div className="flex gap-2 font-plus_jakarta">
          {amenities.slice(0, 3).map((tag, index) => (
            <Chip className="text-[#9d9745] border bg-[#283525] border-[#9d9745]" key={index}>{tag}</Chip>
          ))}
          {amenities.length > 3 && <Chip className="text-[#9d9745] border bg-[#283525] border-[#9d9745]">+{amenities.length - 3}</Chip>}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
