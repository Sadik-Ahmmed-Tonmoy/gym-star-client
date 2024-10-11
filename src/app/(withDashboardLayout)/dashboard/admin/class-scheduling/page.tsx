"use client";
import MyModal from "@/components/ui/MyModal/MyModal";

import CreateClass from "./CreateClass";
import ManageClass from "./ManageClass";
import { useState } from "react";

// interface Trainer {
//   name: {
//     firstName: string;
//     lastName: string;
//   };
//   email: string;
// }

// interface ClassItem {
//   _id: string;
//   className: string;
//   trainer: Trainer;
//   date: string;
//   startTime: string;
//   endTime: string;
// }
const ClassSchedulingPage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//   const classes: ClassItem[] = [
//     {
//       _id: "6706f1c89f830585f85e8c9e",
//       className: "Evening Yoga",
//       trainer: {
//         name: {
//           firstName: "Emily",
//           lastName: "Smith",
//         },
//         email: "emily@example.com",
//       },
//       date: "2024-10-18T00:00:00.000Z",
//       startTime: "07:29",
//       endTime: "09:29",
//     },
//     {
//       _id: "6706f1c89f830585f85e8c9f",
//       className: "Morning Cardio",
//       trainer: {
//         name: {
//           firstName: "John",
//           lastName: "Doe",
//         },
//         email: "john@example.com",
//       },
//       date: "2024-10-19T00:00:00.000Z",
//       startTime: "06:00",
//       endTime: "08:00",
//     },
//     {
//       _id: "6706f1c89f830585f85e8ca0",
//       className: "Afternoon Pilates",
//       trainer: {
//         name: {
//           firstName: "Sarah",
//           lastName: "Johnson",
//         },
//         email: "sarah@example.com",
//       },
//       date: "2024-10-20T00:00:00.000Z",
//       startTime: "16:00",
//       endTime: "18:00",
//     },
//     {
//       _id: "6706f1c89f830585f85e8ca1",
//       className: "Evening Zumba",
//       trainer: {
//         name: {
//           firstName: "Jessica",
//           lastName: "Williams",
//         },
//         email: "jessica@example.com",
//       },
//       date: "2024-10-21T00:00:00.000Z",
//       startTime: "19:00",
//       endTime: "21:00",
//     },
//     {
//       _id: "6706f1c89f830585f85e8ca2",
//       className: "Weekend Bootcamp",
//       trainer: {
//         name: {
//           firstName: "Mike",
//           lastName: "Brown",
//         },
//         email: "mike@example.com",
//       },
//       date: "2024-10-22T00:00:00.000Z",
//       startTime: "08:00",
//       endTime: "10:00",
//     },
//   ];

  return (
    <>
      <div
        // style={{ boxShadow: "4px 4px 22px 0px rgba(0, 0, 0, 0.05)" }}
        className="bg-white  rounded-lg flex flex-col col-span-2 row-span-2 w-full whitespace-nowrap"
      >
        <div className="border-b-[1px] border-[#B0B0B0] px-4 pt-5 pb-2 flex items-center justify-between">
          <div></div>
          <h4 className="text-[#474848] font-poppins text-2xl text-center font-medium">Manage Classes</h4>
          {/* <Button className="bg-blue-400 text-white">Add Trainer</Button> */}
          <MyModal    isOpen={isCreateModalOpen}
            setModalOpen={(isOpen: boolean) => setIsCreateModalOpen(isOpen)} buttonText="Add Class" title="Add Class">
            <CreateClass setIsModalOpen={(isOpen: boolean) => setIsCreateModalOpen(isOpen)}/>
          </MyModal>
        
        </div>

        <div>
          {/* <ClassTable classes={classes} /> */}
          <ManageClass/>
        </div>
      </div>
    </>
  );
};

export default ClassSchedulingPage;
