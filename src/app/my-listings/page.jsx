import { headers } from "next/headers";
import { getUserListingRoom } from "@/lib/data";
import React from "react";
import Surface from "@/Components/Surface";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@heroui/react";
import { IoAddCircleOutline } from "react-icons/io5";

const MyListingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  const data = await getUserListingRoom(userId);

  return (
    <div className="bg-[#0d1e1a]">
        {data.length===0 ?<><h2 className="text-3xl flex justify-center items-center p-40 font-semibold text-[#f0ebe0]"> No Listings Found </h2></>:
      <div className="pt-10 max-w-275 mx-auto pb-10">
        <div className="flex items-center justify-between">
          <div className="space-y-3 pt-10">
            <h1 className="text-[#c9a84c] font-plus_jakarta">Your Spaces</h1>
            <h2 className="text-[#f0ebe0] text-3xl">My Listings</h2>
            <p className="text-[#527c74] font-plus_jakarta">
              {data.length} rooms listed
            </p>
          </div>
          <div>
            <Link href={"/add-room"}>
              <Button className="flex items-center bg-[#c9a84c] text-[#15241c]">
              <IoAddCircleOutline />  <p>Add New Room</p> 
              </Button>
            </Link>
          </div>
        </div>
        <div className="space-y-5 mt-5 ">
          {data.map((item, ind) => (
            <Surface key={ind} item={item}></Surface>
          ))}
        </div>
      </div>}
    </div>
  );
};

export default MyListingPage;
