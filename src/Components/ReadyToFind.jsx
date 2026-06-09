import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const ReadyToFind = () => {
  return (
    <div className="bg-[#0d1e1a] border-b border-[#2a3525]">
      <div className="max-w-275 mx-auto pt-10 text-center">
        <div className="mb-4">
          <h1 className="text-4xl">
            <span className="text-[#f0ebe0] ">Ready to find your</span> 
            <span className="text-[#c9a84c] italic"> perfect nook?</span>
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-[#527c74] max-w-[500px] mx-auto">
            Join thousands of students who have already discovered their ideal
            study space. Registration is free and takes under a minute.
          </p>
        </div>
        <div className="font-plus_jakarta flex  items-center gap-3 pb-8 justify-center">
          <div>
            <Link href={"/signup"}>
              <Button className="flex items-center bg-[#c9a84c] text-[#15241c]">
                <p>Create Free Account</p>{" "}
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/rooms"}>
              <Button className="border text-[#f0ebe0] border-[#c9a84c]  bg-[#15241c]">
                Browse Rooms
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToFind;
