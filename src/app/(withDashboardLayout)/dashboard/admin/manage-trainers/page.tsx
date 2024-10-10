// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTrainers, addTrainer, updateTrainer, deleteTrainer } from './actions/trainersActions';
// import { fetchTrainersApi, addTrainerApi, updateTrainerApi, deleteTrainerApi } from './api/trainersApi';
"use client";
import MyModal from "@/components/ui/MyModal/MyModal";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";

import CreateTrainer from "./CreateTrainer";
import UpdateTrainer from "./UpdateTrainer";

const ManageTrainersPage = () => {
  // const dispatch = useDispatch();
  // const trainers = useSelector(state => state.trainers.trainers);
  // const loading = useSelector(state => state.trainers.loading);
  // const error = useSelector(state => state.trainers.error);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const data = await fetchTrainersApi();
  //             dispatch(fetchTrainers.fulfilled(data));
  //         } catch (err) {
  //             dispatch(fetchTrainers.rejected(err));
  //         }
  //     };
  //     fetchData();
  // }, [dispatch]);

  // const handleAddTrainer = async (trainer) => {
  //     try {
  //         const newTrainer = await addTrainerApi(trainer);
  //         dispatch(addTrainer.fulfilled(newTrainer));
  //     } catch (err) {
  //         console.error(err);
  //     }
  // };

  // const handleUpdateTrainer = async (trainer) => {
  //     try {
  //         const updatedTrainer = await updateTrainerApi(trainer);
  //         dispatch(updateTrainer.fulfilled(updatedTrainer));
  //     } catch (err) {
  //         console.error(err);
  //     }
  // };

  // const handleDeleteTrainer = async (id) => {
  //     try {
  //         await deleteTrainerApi(id);
  //         dispatch(deleteTrainer.fulfilled(id));
  //     } catch (err) {
  //         console.error(err);
  //     }
  // };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  const trainers = [
    {
      _id: 1,
      name: {
        firstName: "John",
        lastName: "Doe",
      },
      email: "trainer1@example.com",
      password: "StrongPass123",
      avatar: "https://example.com/avatar1.jpg",
    },
    {
      _id: 2,
      name: {
        firstName: "Jane",
        lastName: "Smith",
      },
      email: "trainer2@example.com",
      password: "StrongPass456",
      avatar: "https://example.com/avatar2.jpg",
    },
    {
      _id: 3,
      name: {
        firstName: "Michael",
        lastName: "Johnson",
      },
      email: "trainer3@example.com",
      password: "StrongPass789",
      avatar: "https://example.com/avatar3.jpg",
    },
    {
      _id: 4,
      name: {
        firstName: "Emily",
        lastName: "Williams",
      },
      email: "trainer4@example.com",
      password: "StrongPass101",
      avatar: "https://example.com/avatar4.jpg",
    },
    {
      _id: 5,
      name: {
        firstName: "Chris",
        lastName: "Brown",
      },
      email: "trainer5@example.com",
      password: "StrongPass102",
      avatar: "https://example.com/avatar5.jpg",
    },
    {
      _id: 6,
      name: {
        firstName: "Sophia",
        lastName: "Miller",
      },
      email: "trainer6@example.com",
      password: "StrongPass103",
      avatar: "https://example.com/avatar6.jpg",
    },
    {
      _id: 7,
      name: {
        firstName: "David",
        lastName: "Jones",
      },
      email: "trainer7@example.com",
      password: "StrongPass104",
      avatar: "https://example.com/avatar7.jpg",
    },
    {
      _id: 8,
      name: {
        firstName: "Olivia",
        lastName: "Garcia",
      },
      email: "trainer8@example.com",
      password: "StrongPass105",
      avatar: "https://example.com/avatar8.jpg",
    },
    {
      _id: 9,
      name: {
        firstName: "Daniel",
        lastName: "Martinez",
      },
      email: "trainer9@example.com",
      password: "StrongPass106",
      avatar: "https://example.com/avatar9.jpg",
    },
    {
      _id: 10,
      name: {
        firstName: "Isabella",
        lastName: "Rodriguez",
      },
      email: "trainer10@example.com",
      password: "StrongPass107",
      avatar: "https://example.com/avatar10.jpg",
    },
  ];

  const handleDeleteTrainer = (id: number) => {
    console.log("Deleting trainer with id:", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
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
          <MyModal buttonText="Add Trainer" title="Add Trainer">
            <CreateTrainer />
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
                {trainers?.map((trainer) => (
                  <div key={trainer?._id} className="flex flex-col sm:flex-row gap-y-3 text-center  justify-between items-center">
                    <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                      {trainer?.name?.firstName} {trainer?.name?.lastName}
                    </p>
                    <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">{trainer?.email}</p>

                    <div className="flex-1 flex items-center justify-center  gap-3">
                      <MyModal buttonText="Update" title="Update Class" buttonClassName="bg-[#21A36633] text-[#08A718] h-8 rounded w-7">
                        <UpdateTrainer />
                      </MyModal>
                      <Button className="bg-[#EA5A4733] text-[#EA5A47] h-8 rounded w-7" onClick={() => handleDeleteTrainer(1)}>
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
              {trainers?.map((trainer, index) => (
                <div key={trainer?._id} className="flex flex-col gap-3 my-2 px-3 pb-5 border-b-2 ">
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
                    <MyModal buttonText="Update" title="Update Class" buttonClassName="bg-[#21A36633] text-[#08A718] h-8 rounded w-7">
                      <UpdateTrainer />
                    </MyModal>
                    <Button className="bg-[#EA5A4733] text-[#EA5A47] h-8 rounded w-7" onClick={() => handleDeleteTrainer(1)}>
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
