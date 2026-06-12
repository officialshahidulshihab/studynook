"use client"
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPen, FaRegClock, FaUserFriends } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalEdit from "./ModalEdit";
import DeleteAlert from "./DeleteAlert";
import { motion } from "framer-motion";
const Surface = ({ item }) => {
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
  } = item;

  
  return (

     <motion.div
      whileHover={{ x: 4, borderColor: "#c9a84c" }}
      transition={{ duration: 0.2 }}
      className="bg-[#162820] border border-[#2b3725] flex justify-between items-center p-4 rounded-2xl relative"
    >
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
          <p className="text-[#f0ebe0] text-xl">{name}</p>
          <p className="line-clamp-1 text-[12px] text-[#527c74]">
            {description}{" "}
          </p>
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
        </div>
      </div>

      <Chip className="text-[#c9a84c] absolute top-3 right-30   bg-[#1c2e2b] border border-[#2b3725]">
        $ {hourlyRate}/hr
      </Chip>
      <div className="flex  gap-3 ">
        <div></div>
        <div className="space-y-2 ">
          <div>
            <ModalEdit item={item}></ModalEdit>
            {/* <Link href={"/"}>
              <Button className='bg-[#162820] px-6 text-[#f0ebe0] border border-[#2b3725]'>
                <FaPen /> <ModalEdit></ModalEdit>
              </Button>
            </Link> */}
          </div>
          <div>
            {/* <Link href={"/"}> */}
            {/* <Button variant="danger">
                <RiDeleteBinLine /> <span>Delete</span>
              </Button> */}
            <DeleteAlert item={item}></DeleteAlert>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
      
    </motion.div>
  );
};

export default Surface;
