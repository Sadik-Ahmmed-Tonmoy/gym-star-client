"use client";

import moment from "moment";
import { useGetAllClassesQuery } from "@/redux/features/manageClasses/manageClassesApi";
import { TClass } from "@/types";

const ManageClass = () => {
  const { data: getAllClassesQuery, isLoading } = useGetAllClassesQuery(undefined);
  // const [deleteTrainerMutation] = useDeleteTrainerMutation();
  if (isLoading) {
    return <div>Loading...</div>;
  }


  // const handleDeleteClass = async (id: number) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const response = await deleteTrainerMutation(id).unwrap(); // Await mutation resolution
  //         console.log(response);

  //         if (response) {
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "The trainer has been deleted.",
  //             icon: "success",
  //           });
  //         }
  //       } catch (error) {
  //         console.error("Error deleting trainer:", error);
  //         Swal.fire({
  //           title: "Error!",
  //           text: "There was a problem deleting the trainer.",
  //           icon: "error",
  //         });
  //       }
  //     }
  //   });
  // };

  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col col-span-2 row-span-2 w-full whitespace-nowrap">
        {/* for pc version start */}
        <div className=" hidden xl:block">
          <div className="flex flex-col sm:flex-row gap-y-3 ps-4 text-center justify-between items-center">
            <p className="text-black font-poppins text-lg font-semibold flex-1">Class Name</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Trainer Name</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Date</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Start Time</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">End Time</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Available Seats</p>
            {/* <p className="text-black font-poppins text-lg font-semibold flex-1">Action</p> */}
          </div>
          <div className="p-4 flex flex-col gap-5">
            {
                  getAllClassesQuery?.data?.result?.map((classDetails: TClass, index: number) => (
              <div key={index} className="flex flex-col sm:flex-row gap-y-3 text-center  justify-between items-center">
                <p className="text-[#474848] font-poppins text-lg font-semibold flex-1">{classDetails?.className}</p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">{classDetails?.trainer?.fullName}</p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                  {moment(classDetails?.date).format("MMM Do YYYY")}
                </p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light ps-5 flex-1">
                  {moment(classDetails?.startTime, "HH:mm").format("hh:mm A")}
                </p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light ps-5 flex-1">
                  {moment(classDetails?.endTime, "HH:mm").format("hh:mm A")}
                </p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                  {10 - classDetails?.enrolledTrainees?.length}
                </p>
                {/* <div className="flex-1 flex items-center justify-center  gap-3">
                  <MyModal buttonText="Update" title="Update Class" buttonClassName="bg-[#21A36633] text-[#08A718] h-8 rounded w-7">
                    <UpdateClass />
                  </MyModal>
                  <Button className="bg-[#EA5A4733] text-[#EA5A47] h-8 rounded w-7" onClick={() => handleDeleteClass(classDetails?._id)}>
                          Delete
                        </Button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* for pc version end */}
        {/* for mobile version start */}
        <div className="block xl:hidden">
          { getAllClassesQuery?.data?.result?.map((classDetails: TClass, index: number) => (
            <div key={index} className="flex flex-col gap-3 my-2 px-3 pb-5 border-b-2 ">
              <p className="text-xl font-bold">Class no: {index + 1}</p>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">Class Name</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{classDetails?.className}</p>
              </div>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">Trainer Name</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{classDetails?.trainer?.fullName}</p>
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
              <div>
                <p className="text-black font-poppins text-lg font-semibold">Available Seats</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{10 - classDetails?.enrolledTrainees?.length}</p>
              </div>
              {/* <div className="flex items-center justify-center gap-3">
              <MyModal buttonText="Update" title="Update Class" buttonClassName="bg-[#21A36633] text-[#08A718] h-8 rounded w-7">
                    <UpdateClass />
                  </MyModal>
                
              </div> */}
            </div>
          ))}
        </div>

        {/* for mobile version end */}
      </div>
    </>
  );
};

export default ManageClass;
