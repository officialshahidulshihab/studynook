"use client";
import { authClient } from "@/lib/auth-client";
import {ArrowRightFromSquare, Gear, Persons} from "@gravity-ui/icons";
import {Avatar, Dropdown, Label} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiCirclePlus } from "react-icons/ci";
import { FaCalendarCheck } from "react-icons/fa";
import { IoCubeSharp } from "react-icons/io5";

const Discloser = ({user}) => {
  const router = useRouter();
    const handleSignOut=async()=>{
        await authClient.signOut();
         router.refresh();
    }
    return (
        <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt={user.name}
            src={user.image}
          />
          <Avatar.Fallback delayMs={600}>{user.name[0]}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover className='bg-[#1a3028] text-[#bfc0b6] '>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt={user.name}
                src={user.image}
              />
              <Avatar.Fallback delayMs={600}>{user.name[0]}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user.name}</p>
              <p className="text-xs leading-none text-muted">{user.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="my-listings" textValue="MyListings" className="hover:bg-[#1f3530]">
            <Link href={'/my-listings'}>
            <div className="flex w-full items-center  gap-3">
                <IoCubeSharp  className="size-3.5 text-[#bfc0b6]" />
                <Label className="text-[#bfc0b6]">MyListings</Label>
            </div></Link>
          </Dropdown.Item >
          <Dropdown.Item id="my-bookings" textValue="MyBookings" className="hover:bg-[#1f3530]">
            <Link href={'/my-bookings'}>
           <div className="flex w-full items-center  gap-3">
             <FaCalendarCheck  className="size-3.5 text-[#bfc0b6]" />
             <Label className="text-[#bfc0b6]">MyBookings</Label>
           </div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item id="add-room" textValue="AddRoom" className="hover:bg-[#1f3530]">
            <Link href={'/add-room'}>
            <div className="flex w-full items-center  gap-3">
              <CiCirclePlus  className="size-3.5 text-[#bfc0b6]" />
              <Label className="text-[#bfc0b6]">AddRoom</Label>
            </div>
            </Link>
          </Dropdown.Item>
         
          <Dropdown.Item onClick={handleSignOut} id="signout" textValue="SignOut" variant="danger" className="hover:bg-[#1f3530]">
            <div className="flex w-full items-center  gap-3 ">
              <ArrowRightFromSquare className="size-3.5 text-danger" />
              <Label>SignOut</Label>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
    );
};

export default Discloser;