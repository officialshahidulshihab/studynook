import BookingCard from "@/Components/BookingCard";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { getAllBookings } from "@/lib/data";
import React from "react";
import { headers } from "next/headers";
export const metadata = { title: "My Booking" };

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const id=session?.user?.id
  const data=await getAllBookings(id, token)
  return (
    <div className="bg-[#0d1e1a]">
      {data.length === 0 ? (
        <>
          <h2 className="text-3xl flex justify-center items-center p-40 font-semibold text-[#f0ebe0]">
            {" "}
            You have no bookings yet.{" "}
          </h2>
        </>
      ) : (
        <div className="pt-10 max-w-275 mx-auto pb-10">
          <div className="flex items-center justify-between">
            <div className="space-y-3 pt-10">
              <h1 className="text-[#c9a84c] font-plus_jakarta">
                Your Reservations
              </h1>
              <h2 className="text-[#f0ebe0] text-3xl">My Bookings</h2>
              <p className="text-[#527c74] font-plus_jakarta">
                {data.length} bookings
              </p>
            </div>
          </div>
          <div className="space-y-5 mt-5 ">
            {data.map((item, ind) => (
              <BookingCard key={ind} item={item}></BookingCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookingPage;
