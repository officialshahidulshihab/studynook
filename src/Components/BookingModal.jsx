"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";

import { toast } from "react-toastify";
const BookingModal = ({ item }) => {
  const {
    _id,
    userId,
    userImage,
    userName,
    roomId,
    name,
    price,
    image,
    date,
    startTime,
    endTime,
  } = item;
  const router = useRouter();

  const handleCancel = async () => {
    const { data: tokenData } = await authClient.$fetch("/token");
    const token = tokenData?.token;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/booking/${_id?.$oid || _id}/cancel`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: token,
        },
      },
    );
    const data = await res.json();
    if (res.ok) {
      toast.success("Booking cancelled");

      window.location.href = "/my-bookings";
    } else {
      toast.error("Failed to cancel booking");
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger">
        <span>Cancel</span>
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-[#162820] ">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-[#f0ebe0]">
                Cancel Booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="font-plus_jakarta">
                This will cancel <strong>{name}</strong> booking .This action
                cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                slot="close"
                className="bg-[#162820] text-[#f0ebe0] border border-[#2b3725]"
              >
                Keep it
              </Button>
              <Button onClick={handleCancel} slot="close" variant="danger">
                Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default BookingModal;
