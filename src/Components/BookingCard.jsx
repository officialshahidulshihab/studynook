import Image from "next/image";
import React from "react";
import { FaRegClock, FaUserFriends } from "react-icons/fa";

import { FiDollarSign } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import BookingModal from "./BookingModal";

const BookingCard = ({ item }) => {
  const { name, price, image, date, startTime, endTime, status } = item;

  return (
    <div className="bg-[#162820] border border-[#2b3725] flex justify-between items-center p-4 rounded-2xl relative">
      <div className="flex gap-5">
        <div>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-50 h-25 rounded-2xl"
          ></Image>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <p className="text-[#f0ebe0] text-xl">{name}</p>
          <span
            className={`text-xs font-plus_jakarta px-3 py-1 rounded-full font-semibold ${
              status === "cancelled"
                ? "bg-red-900/40 text-red-400 border border-red-800"
                : "bg-green-900/40 text-green-400 border border-green-800"
            }`}
          >
            {status === "cancelled" ? "Cancelled" : "Confirmed"}
          </span>
          </div>

          <div className="flex items-center gap-4 text-[14px] text-[#527c74] font-plus_jakarta mb-4">
            <div className="flex items-center gap-2.5">
              <MdOutlineDateRange className="text-[#c9a84c] " /> <p>{date}</p>
            </div>
            <div className="flex items-center gap-2.5">
              <FaRegClock className="text-[#c9a84c] " />
              <p>
                {startTime}-{endTime}
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <FiDollarSign className="text-[#c9a84c] " />
              <p> Total ${price} </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  gap-3 ">
        <div></div>
        <div className="space-y-2 ">
          {status !== "cancelled" && (
            <div>
              <BookingModal item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
