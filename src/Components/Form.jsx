"use client"

import { authClient } from "@/lib/auth-client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";


import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const AMENITIES = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  const { data: session } = authClient.useSession();

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const toggleAmenity = (amenity) => {
    setSelectedAmenities((selectedAmenities) =>
      selectedAmenities.includes(amenity)
        ? selectedAmenities.filter((a) => a !== amenity)
        : [...selectedAmenities, amenity],
    );
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const room = Object.fromEntries(formData.entries());

    const roomWithAmenities = {
      ...room,
      amenities: selectedAmenities,
      capacity: Number(room.capacity),
      hourlyRate: Number(room.hourlyRate),
      owner: session?.user?.id,
      ownerName: session?.user?.name,
      createdAt: new Date().toISOString(),
      bookingCount: 0,
    };

    const { data: tokenData } = await authClient.$fetch("/token");
  const token = tokenData?.token;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/rooms/add`, {
      method: "POST",
      headers: { "Content-type": "application/json",authorization: token, },
      body: JSON.stringify(roomWithAmenities),
    });
    const data = await res.json();
   if (res.ok) {
  toast.success("Room added successfully");
  
  window.location.href = '/my-listings';
} else {
  toast.error("Failed to add room");
}
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-4">
      <Card className="bg-[#162820] rounded-2xl p-6 border border-[#1f3530] shadow-none">
        <h3 className="text-[#f0ebe0] font-playfair text-lg mb-1">
          Room Details
        </h3>
        <hr className="border-[#1f3530] mb-5" />

        <div className="space-y-5">
          <TextField name="name" isRequired>
            <Label className="text-[#6c9e87]  font-plus_jakarta text-xs font-semibold tracking-widest uppercase">
              Room Name
            </Label>
            <Input
            name="name"
              placeholder="e.g. The Athenaeum Suite"
              className="bg-[#1a2e28] border border-[#1f3530] rounded-xl text-[#f0ebe0] placeholder-[#3a5c50] font-plus_jakarta text-sm"
            />
            <FieldError className="text-red-400 text-xs font-plus_jakarta" />
          </TextField>

          <TextField name="description" isRequired>
            <Label className="text-[#6c9e87] font-plus_jakarta text-xs font-semibold tracking-widest uppercase">
              Description
            </Label>
            <TextArea
              name="description"
              placeholder="Describe the room, its atmosphere, and what makes it special..."
              className="bg-[#1a2e28] border border-[#1f3530] rounded-xl text-[#f0ebe0] placeholder-[#3a5c50] font-plus_jakarta text-sm resize-none"
              rows={4}
            />
            <FieldError className="text-red-400 text-xs font-plus_jakarta" />
          </TextField>

          <TextField name="image" isRequired>
            <Label className="text-[#6c9e87] font-plus_jakarta text-xs font-semibold tracking-widest uppercase">
              Image URL
            </Label>
            <Input
             name="image"
              type="url"
              placeholder="https://images.unsplash.com/..."
              className="bg-[#1a2e28] border border-[#1f3530] rounded-xl text-[#f0ebe0] placeholder-[#3a5c50] font-plus_jakarta text-sm"
            />
            <FieldError className="text-red-400 text-xs font-plus_jakarta" />
          </TextField>
        </div>
      </Card>

      <Card className="bg-[#162820] rounded-2xl p-6 border border-[#1f3530] shadow-none">
        <h3 className="text-[#f0ebe0] font-playfair text-lg mb-1">Logistics</h3>
        <hr className="border-[#1f3530] mb-5" />

        <div className="grid grid-cols-2 gap-4">
          <TextField name="floor" isRequired>
            <Label className="text-[#6c9e87] font-plus_jakarta text-xs font-semibold tracking-widest uppercase">
              Floor
            </Label>
            <Input
            name="floor"
              placeholder="e.g. 3rd Floor"
              className="bg-[#1a2e28] border border-[#1f3530] rounded-xl text-[#f0ebe0] placeholder-[#3a5c50] font-plus_jakarta text-sm"
            />
            <FieldError className="text-red-400 text-xs font-plus_jakarta" />
          </TextField>

          <TextField name="capacity" isRequired>
            <Label className="text-[#6c9e87] font-plus_jakarta text-xs font-semibold tracking-widest uppercase">
              Capacity
            </Label>
            <Input
            name="capacity"
              type="number"
              min={1}
              placeholder="e.g. 2 people"
              className="bg-[#1a2e28] border border-[#1f3530] rounded-xl text-[#f0ebe0] placeholder-[#3a5c50] font-plus_jakarta text-sm"
            />
            <FieldError className="text-red-400 text-xs font-plus_jakarta" />
          </TextField>

          <div className="col-span-2">
            <TextField name="hourlyRate" isRequired>
              <Label className="text-[#6c9e87] font-plus_jakarta text-xs font-semibold tracking-widest uppercase">
                Hourly Rate (USD)
              </Label>
              <Input
               name="hourlyRate"
                type="number"
                min={1}
                placeholder="5"
                className="bg-[#1a2e28] border border-[#1f3530] rounded-xl text-[#f0ebe0] placeholder-[#3a5c50] font-plus_jakarta text-sm"
              />
              <FieldError className="text-red-400 text-xs font-plus_jakarta" />
            </TextField>
          </div>
        </div>
      </Card>

      <Card className="bg-[#162820] rounded-2xl p-6 border border-[#1f3530] shadow-none">
        <h3 className="text-[#f0ebe0] font-playfair text-lg mb-1">Amenities</h3>
        <hr className="border-[#1f3530] mb-5" />

        <div className="grid grid-cols-3 gap-3">
          {AMENITIES.map((amenity) => {
            const checked = selectedAmenities.includes(amenity);
            return (
              <button
                key={amenity}
                type="button"
                onClick={() => toggleAmenity(amenity)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-plus_jakarta text-sm transition-all cursor-pointer
                      ${
                        checked
                          ? "border-[#c9a84c] bg-[#c9a84c1a] text-[#c9a84c]"
                          : "border-[#1f3530] bg-[#1a2e28] text-[#527c74] hover:border-[#2e5044]"
                      }`}
              >
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors
                        ${
                          checked
                            ? "bg-[#c9a84c] border-[#c9a84c]"
                            : "border-[#3a5c50] bg-transparent"
                        }`}
                >
                  {checked && (
                    <svg
                      className="w-2.5 h-2.5 text-[#0d1e1a]"
                      fill="none"
                      viewBox="0 0 10 8"
                    >
                      <path
                        d="M1 4l3 3 5-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                {amenity}
              </button>
            );
          })}
        </div>
      </Card>

     
        <Button
          type="submit"
          className="w-full bg-[#c9a84c] hover:bg-[#b8963e] text-[#0d1e1a] font-plus_jakarta font-semibold py-4 rounded-2xl text-base"
        >
          Publish Room
        </Button>
     
    </form>
  );
};

export default Form;
