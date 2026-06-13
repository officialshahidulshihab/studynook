"use client";
import { Button, Modal, TextArea, Textarea } from "@heroui/react";
import DatePic from "./DatePic";
import Time from "./Time";
import { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";

const Booking = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [note, setNote] = useState("");

  const { name, image, hourlyRate, floor, _id } = data;

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const totalCost = () => {
    if (startTime === null || endTime === null) return null;
    const hours = endTime - startTime;
    if (hours <= 0) return null;
    return hours * hourlyRate;
  };

  const formatTime = (hour) => {
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:00 ${period}`;
  };

  const cost = totalCost();

  const resetForm = () => {
    setDate(null);
    setStartTime(null);
    setEndTime(null);
    setNote("");
  };

  const handleBooking = async () => {
    if (!date || startTime === null || endTime === null || !cost) {
      toast.info("Please select date, start time, and end time");
      return;
    }

    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date.toString());

    if (selectedDate < todayDate) {
      toast.error("Please select today or a future date");
      return;
    }

    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      roomId: _id?.$oid || _id.toString(),
      name,
      price: cost,
      image,
      date: date.toString(),
      startTime: formatTime(startTime),
      endTime: formatTime(endTime),
      startHour: startTime,
      endHour: endTime,
      note,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    const result = await res.json();

    if (res.status === 409) {
      toast.error(result.message);
      return;
    }

    toast.success("Room booked successfully!");
    setIsOpen(false);
    resetForm();
    window.location.href = "/my-bookings";
  };

  return (
    <>
      <Button
        onPress={() => setIsOpen(true)}
        className="w-full bg-[#c9a84c] text-[#15241c]"
      >
        Book Now
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px] border border-[#2b3725] bg-[#162820]">
              <Modal.Header>
                <div className="p-3 border-b border-[#2b3725]">
                  <p className="text-[#f0ebe0]">Book {name}</p>
                  <div className="font-plus_jakarta flex items-center text-[#527c74] text-[12px]">
                    <p>Floor {floor}</p>.<p>${hourlyRate}/hr</p>
                  </div>
                </div>
              </Modal.Header>

              <Modal.Body>
                <div className="space-y-3">
                  <DatePic date={date} setDate={setDate} />

                  <Time
                    startTime={startTime}
                    endTime={endTime}
                    onStartChange={setStartTime}
                    onEndChange={setEndTime}
                  />

                  <TextArea
                    label="Special Note (optional)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Any special requests..."
                    className="bg-[#1f3530] text-[#c9a84c]"
                  />

                  <div className="bg-[#1a2e28] border border-[#2b3725] rounded-xl p-4 flex justify-between items-center mt-2">
                    <p className="text-[#527c74] font-plus_jakarta text-sm">
                      Total Cost
                    </p>
                    {cost ? (
                      <p className="text-[#c9a84c] font-playfair text-2xl">
                        ${cost}
                      </p>
                    ) : (
                      <p className="text-[#3a5c50] font-plus_jakarta text-sm">
                        Select times
                      </p>
                    )}
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  onPress={handleBooking}
                  className="w-full bg-[#c9a84c] text-[#15241c]"
                >
                  Confirm Booking
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default Booking;
