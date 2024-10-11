"use client";
import MyModal from "@/components/ui/MyModal/MyModal";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";

import CreateTrainer from "./CreateTrainer";
import { useDeleteTrainerMutation, useGetAllTrainersQuery } from "@/redux/features/manageTrainer/manageTrainerApi";
import { useState } from "react";
import Link from "next/link";
import { TTrainer } from "@/types";

const ManageTrainersPage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { data: trainersData, isLoading: isTrainersLoading } = useGetAllTrainersQuery(undefined);
  const [deleteTrainerMutation] = useDeleteTrainerMutation();
  if (isTrainersLoading) {
    return <div>Loading...</div>;
  }

  const handleDeleteTrainer = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteTrainerMutation(id).unwrap(); // Await mutation resolution
          console.log(response);

          if (response) {
            Swal.fire({
              title: "Deleted!",
              text: "The trainer has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting trainer:", error);
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the trainer.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
      <div
        // style={{ boxShadow: "4px 4px 22px 0px rgba(0, 0, 0, 0.05)" }}
        className="bg-white  rounded-lg flex flex-col col-span-2 row-span-2 w-full whitespace-nowrap"
      >
        <div className="border-b-[1px] border-[#B0B0B0] px-4 pt-5 pb-2 flex items-center justify-between">
          <div></div>
          <h4 className="text-[#474848] font-poppins text-2xl text-center font-medium">Manage Trainers</h4>
          {/* <Button className="bg-blue-400 text-white">Add Trainer</Button> */}
          <MyModal
            buttonText="Add Trainer"
            title="Add Trainer"
            isOpen={isCreateModalOpen}
            setModalOpen={(isOpen: boolean) => setIsCreateModalOpen(isOpen)}
          >
            <CreateTrainer setIsModalOpen={(isOpen: boolean) => setIsCreateModalOpen(isOpen)} />
          </MyModal>
        </div>

        <>
          <div className="bg-white  rounded-lg flex flex-col col-span-2 row-span-2 w-full whitespace-nowrap">
            {/* for pc version start */}
            <div className=" hidden lg:block">
              <div className="flex flex-col sm:flex-row gap-y-3 ps-4 text-center justify-between items-center">
                <p className="text-black font-poppins text-lg font-semibold flex-1">Trainer Name</p>
                <p className="text-black font-poppins text-lg font-semibold flex-1">Email</p>
                <p className="text-black font-poppins text-lg font-semibold flex-1">Action</p>
              </div>
              <div className="p-4 flex flex-col gap-5">
                {trainersData?.success &&
                  trainersData?.data?.map((trainer:TTrainer, index:number) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-y-3 text-center  justify-between items-center">
                      <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                        {trainer?.name?.firstName} {trainer?.name?.lastName}
                      </p>
                      <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">{trainer?.email}</p>

                      <div className="flex-1 flex items-center justify-center  gap-3">
                        <Link href={`/dashboard/admin/manage-trainers/${trainer?._id}`}>
                          <Button className="bg-[#21A36633] text-[#08A718] h-8 rounded w-7">Update</Button>
                        </Link>
                        <Button className="bg-[#EA5A4733] text-[#EA5A47] h-8 rounded w-7" onClick={() => handleDeleteTrainer(trainer?._id.toString())}>
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* for pc version end */}
            {/* for mobile version start */}

            <div className="block lg:hidden">
              {trainersData?.success &&
                trainersData?.data?.map((trainer:TTrainer, index:number) => (
                  <div key={index} className="flex flex-col gap-3 my-2 px-3 pb-5 border-b-2 ">
                    <p className="text-xl font-bold">Class no: {index + 1}</p>
                    <div>
                      <p className="text-black font-poppins text-lg font-semibold">Trainer Name</p>
                      <p className="text-[#474848] font-poppins text-lg font-semibold">
                        {trainer?.name?.firstName} {trainer?.name?.lastName}
                      </p>
                    </div>
                    <div>
                      <p className="text-black font-poppins text-lg font-semibold">Trainer Email</p>
                      <p className="text-[#474848] font-poppins text-lg font-semibold">{trainer?.email}</p>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Link href={`/dashboard/admin/manage-trainers/${trainer?._id}`}>
                        <Button className="bg-[#21A36633] text-[#08A718] h-8 rounded w-7">Update</Button>
                      </Link>
                      <Button className="bg-[#EA5A4733] text-[#EA5A47] h-8 rounded w-7" onClick={() => handleDeleteTrainer(trainer?._id)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
            </div>

            {/* for mobile version end */}
          </div>
        </>
      </div>
    </>
  );
};

export default ManageTrainersPage;
