import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { getRoomById } from "@/lib/data";
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCalendarCheck,
  FaLongArrowAltLeft,
  FaRegClock,
  FaUserFriends,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Booking from "@/Components/Booking";
import { notFound, redirect } from "next/navigation";
import { BsXLg } from "react-icons/bs";

export async function generateMetadata({ params }) {
  const { id } = await params;

 const data = await getRoomById(id);

  if (!data) {
    return { title: "Room Not Found" };
  }

  return {
    title: data.name,
    
  };
}
const DetailsPage = async ({ params }) => {
  let token = null;
  try {
    const tokenRes = await auth.api.getToken({ headers: await headers() });
    token = tokenRes?.token ?? null;
  } catch {}
  const { id } = await params;
  const data = await getRoomById(id, token);
  

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
  } = data;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const userName = session?.user?.name;
  return (
    <div className="bg-[#0d1e1a] ">
      <div className="flex justify-between relative   max-w-275 mx-auto ">
        <div className=" pt-10 pb-10">
          <div className="text-[#527c74] mb-4">
            <Link href={"/rooms"}>
              {" "}
              <p className="flex items-center gap-3 hover:text-[#f0ebe0] cursor-pointer">
                <FaLongArrowAltLeft /> <span>All Rooms</span>
              </p>
            </Link>
          </div>
          <div>
            <div className="mb-4">
              <Image
                src={image}
                alt={name}
                width={700}
                height={500}
                className="w-140 h-75 rounded-2xl"
              ></Image>
            </div>
            <div className="space-y-4">
              <h1 className="text-[#f0ebe0]   text-3xl">{name}</h1>
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
                  <p>$ {hourlyRate}/hr</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCalendarCheck className="text-[#c9a84c] " />
                  <p>{bookingCount} bookings</p>
                </div>
              </div>
              <p className="text-[#527c74] font-plus_jakarta max-w-118.75">
                {description}
              </p>
              <p className="text-[#527c74] font-plus_jakarta text-[12px]">
                AMENITIES
              </p>
              <div className="flex gap-2 font-plus_jakarta">
                {amenities.map((tag, index) => (
                  <Chip
                    className="text-[#9d9745] border bg-[#283525] border-[#9d9745]"
                    key={index}
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
              <p className="text-[#527c74] ">
                Listed by <span className="text-[#f0ebe0]">{owner}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="font-plus_jakarta mt-20 pb-10 w-100 sticky top-20 self-start ">
          <Card className="border border-[#2b3725] bg-[#162820]">
            <div className="p-5 mx-auto">
              <h1 className="font-playfair text-3xl text-[#c9a84c]">
                ${hourlyRate}
              </h1>
              <p className="text-[#527c74] text-[12px]">per hour</p>
            </div>
            <Separator className="my-1 bg-[#2b3725]" />
            <div className="mt-3 font-plus_jakarta">
              {user ? (
                <Booking data={data}></Booking>
              ) : (
                <Link href={"/login"}>
                  <Button className="w-full bg-[#c9a84c] text-[#15241c]">
                    Login to Book
                  </Button>
                </Link>
              )}
            </div>
            <Separator className="my-2 bg-[#2b3725]" />

            <div className=" flex justify-between">
              <div>
                <div className="text-[#527c74]">Floor</div>

                <div className="text-[#527c74]">Capacity</div>
                <div className="text-[#527c74]">Total bookings</div>
              </div>
              <div>
                <div className="text-[#f0ebe0] ">{floor}</div>
                <div className="text-[#f0ebe0]">{capacity} People</div>

                <div className="text-[#f0ebe0]">{bookingCount}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
