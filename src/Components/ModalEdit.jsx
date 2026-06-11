"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaPen } from "react-icons/fa";
import Form from "./Form";
import { MdOutlinePolymer } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { FieldError, Select, ListBox, TextArea, Card } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ModalEdit = ({ item }) => {
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
    const res = await fetch(`http://localhost:5000/api/rooms/${_id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(room),
    });
    const data = await res.json();
    
    toast.success("Room Updated successfully");
    redirect('/my-listings')
    
  };
  return (
    <div>
      <Modal>
        <Button className="bg-[#162820] px-6 text-[#f0ebe0] border border-[#2b3725]">
          <FaPen /> <span>Edit</span>
        </Button>
        <Modal.Backdrop className="">
          <Modal.Container placement="auto ">
            <Modal.Dialog className="sm:max-w-md  bg-[#162820]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="">
                  <MdOutlinePolymer className="text-[#c7a64b]" />
                </Modal.Icon>
                <Modal.Heading className="text-[#f0ebe0]">
                  Edit Room
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6 max-h-[70vh] overflow-y-auto ">
                <Surface className="">
                  <form
                    onSubmit={onSubmit}
                    className="space-y-4 mt-4 bg-[#162820]"
                  >
                    <Card className="bg-[#162820] rounded-2xl p-6 border border-[#1f3530] shadow-none">
                      <h3 className="text-[#f0ebe0] font-playfair text-lg mb-1">
                        Room Details
                      </h3>
                      <hr className="border-[#1f3530] mb-5" />

                      <div className="space-y-5">
                        <TextField
                          defaultValue={name}
                          name="name"
                          isRequired
                        >
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

                        <TextField
                          defaultValue={description}
                          name="description"
                          isRequired
                        >
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

                        <TextField
                          defaultValue={image}
                          name="image"
                          isRequired
                        >
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
                      <h3 className="text-[#f0ebe0] font-playfair text-lg mb-1">
                        Logistics
                      </h3>
                      <hr className="border-[#1f3530] mb-5" />

                      <div className="grid grid-cols-2 gap-4">
                        <TextField defaultValue={floor} name="floor" isRequired>
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

                        <TextField
                          defaultValue={capacity}
                          name="capacity"
                          isRequired
                        >
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
                          <TextField
                            defaultValue={hourlyRate}
                            name="hourlyRate"
                            isRequired
                          >
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
                      <h3 className="text-[#f0ebe0] font-playfair text-lg mb-1">
                        Amenities
                      </h3>
                      <hr className="border-[#1f3530] mb-5" />

                      <div className="grid grid-cols-3 gap-3 ">
                        {AMENITIES.map((amenity) => {
                          const checked = selectedAmenities.includes(amenity);
                          return (
                            <button
                              key={amenity}
                              type="button"
                              onClick={() => toggleAmenity(amenity)}
                              className={`flex items-center gap-2 px-1 py-2 rounded-xl border font-plus_jakarta text-[9px] transition-all cursor-pointer
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

                    <Link href={"/add-room"}>
                      <Button slot="close"
                        type="submit"
                        className="w-full  bg-[#c9a84c] hover:bg-[#b8963e] text-[#0d1e1a] font-plus_jakarta font-semibold py-4 rounded-2xl text-base"
                      >
                        Publish Room
                      </Button>
                    </Link>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ModalEdit;
