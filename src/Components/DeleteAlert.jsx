"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";

const DeleteAlert = ({ item }) => {
  const { _id } = item;
  const handleDelete = async () => {
    const { data: tokenData } = await authClient.$fetch("/token");
    const token = tokenData?.token;
    const roomId = _id?.$oid || _id;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/rooms/${roomId}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: token,
        },
      },
    );
    const data = await res.json();
    if (res.ok) {
      toast.success("Listing Deleted");
      redirect("/my-listings");
    } else {
      toast.error("Failed to delete listing");
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger">
        <RiDeleteBinLine /> <span>Delete</span>
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-[#162820] ">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-[#f0ebe0]">
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="font-plus_jakarta">
                This will permanently delete <strong>{item.name}</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                slot="close"
                className="bg-[#162820] text-[#f0ebe0] border border-[#2b3725]"
              >
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteAlert;
