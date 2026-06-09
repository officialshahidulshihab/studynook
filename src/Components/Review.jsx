import { Avatar } from "@heroui/react";
import React from "react";

import { FaStar } from "react-icons/fa";
import StudentImage1 from '@/asset/student1.jpg'
import StudentImage2 from '@/asset/student2.jpg'
import StudentImage3 from '@/asset/student3.jpg'

const Review = () => {
  return (
    <div className="bg-[#162820] border-t border-b border-[#c9a84c38]">
      <div className="max-w-275 mx-auto">
        <div className=" space-y-6 text-center pt-15">
          <h1 className="text-[#c9a84c] font-plus_jakarta">Student Reviews</h1>

          <h2 className="text-[#f0ebe0] text-4xl">Loved by scholars</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 pb-10">
          <div className="px-4 py-4 bg-[#0d1e1a] rounded-xl">
            <div className="flex items-center gap-2 text-[#c9a84c]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="font-plus_jakarta  text-[#f0ebe0] mt-4">
              StudyNook transformed how I prepare for seminars. The Athenaeum
              Suite has the perfect atmosphere for deep academic writing.
            </p>

            <div className="flex items-center gap-2 mt-4 font-plus_jakarta">
              <div>
                <Avatar>
                  <Avatar.Image
                    alt="Priya Nair"
                    src={StudentImage1.src}
                  />
                  {/* <Avatar.Fallback>PN</Avatar.Fallback> */}
                </Avatar>
              
              </div>
              <div>
                <p className="font-bold text-[14px] text-[#f0ebe0]">Priya Nair</p>
                <p className="text-[12px] text-[#527c74]">PhD Candidate, Linguistics</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 bg-[#0d1e1a] rounded-xl">
            <div className="flex items-center gap-2 text-[#c9a84c]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="font-plus_jakarta  text-[#f0ebe0] mt-4">
              Booking a room used to take 20 minutes of emails. Now it's done in under a minute. The UI is genuinely beautiful too.
            </p>

            <div className="flex items-center gap-2 mt-4 font-plus_jakarta">
              <div>
                <Avatar>
                  <Avatar.Image
                    alt="Priya Nair"
                    src={StudentImage2.src}
                  />
                  {/* <Avatar.Fallback>PN</Avatar.Fallback> */}
                </Avatar>
              
              </div>
              <div>
                <p className="font-bold text-[14px] text-[#f0ebe0]">James Whitmore</p>
                <p className="text-[12px] text-[#527c74]">Computer Science, Year 3</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 bg-[#0d1e1a] rounded-xl">
            <div className="flex items-center gap-2 text-[#c9a84c]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="font-plus_jakarta  text-[#f0ebe0] mt-4">
              My team uses StudyNook every week for our case study sessions. The Meridian Conference Room is our go-to.
            </p>

            <div className="flex items-center gap-2 mt-4 font-plus_jakarta">
              <div>
                <Avatar>
                  <Avatar.Image
                    alt="Priya Nair"
                    src={StudentImage3.src}
                  />
                  {/* <Avatar.Fallback>PN</Avatar.Fallback> */}
                </Avatar>
              
              </div>
              <div>
                <p className="font-bold text-[14px] text-[#f0ebe0]">Sofía Delgado</p>
                <p className="text-[12px] text-[#527c74]">MBA Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
