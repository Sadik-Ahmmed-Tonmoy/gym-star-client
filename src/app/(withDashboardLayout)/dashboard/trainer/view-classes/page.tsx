"use client";
import { useUserDataQuery } from "@/redux/features/auth/authApi";
import { TClass } from "@/types";
import moment from "moment";

const ViewClassesPage = () => {
  const { data: getMe } = useUserDataQuery(undefined);

  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col col-span-2 row-span-2 w-full whitespace-nowrap">
        <div className="border-b-[1px] border-[#B0B0B0] px-4 pt-5 pb-2 flex items-center justify-center">
          <h4 className="text-[#474848] font-poppins text-2xl text-center font-medium">View Class Details</h4>
        </div>
        {/* for pc version start */}
        <div className=" hidden lg:block">
          <div className="flex flex-col sm:flex-row gap-y-3 ps-4 text-center justify-between items-center">
            <p className="text-black font-poppins text-lg font-semibold flex-1">Class Name</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Date</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Start Time</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">End Time</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Total Student</p>
          </div>
          <div className="p-4 flex flex-col gap-5">
            {getMe?.data?.classSchedules?.map((classDetails: TClass, index: number) => (
              <div key={classDetails?._id} className="flex flex-col sm:flex-row gap-y-3 text-center  justify-between items-center">
                <p className="text-xl font-bold">{index + 1}</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold flex-1">{classDetails?.className}</p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                  {moment(classDetails?.date).format("MMMM Do YYYY")}
                </p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                  {moment(classDetails?.startTime, "HH:mm").format("hh:mm A")}
                </p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                  {moment(classDetails?.endTime, "HH:mm").format("hh:mm A")}
                </p>
                <p className="text-[#474848] font-poppins text-lg font-semibold flex-1">{classDetails?.enrolledTrainees?.length}</p>
              </div>
            ))}
          </div>
        </div>
        {/* for pc version end */}
        {/* for mobile version start */}
        <div className="block lg:hidden">
          {getMe?.data?.classSchedules?.map((classDetails: TClass, index: number) => (
            <div key={classDetails?._id} className="flex flex-col gap-3 my-2 px-3 pb-5 border-b-2 ">
              <p className="text-xl font-bold">Class no: {index + 1}</p>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">Class Name</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{classDetails?.className}</p>
              </div>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">Date</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{moment(classDetails?.date).format("MMMM Do YYYY")}</p>
              </div>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">Start Time</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{moment(classDetails?.startTime, "HH:mm").format("hh:mm A")}</p>
              </div>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">End Time</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{moment(classDetails?.endTime, "HH:mm").format("hh:mm A")}</p>
              </div>
            </div>
          ))}
        </div>

        {/* for mobile version end */}
      </div>
    </>
  );
};

export default ViewClassesPage;
