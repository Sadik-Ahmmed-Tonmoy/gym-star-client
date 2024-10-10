import MyModal from "@/components/ui/MyModal/MyModal";
import React from "react";
import UpdateClass from "./UpdateClass";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";



interface Trainer {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
}

interface ClassItem {
  _id: string;
  className: string;
  trainer: Trainer;
  date: string;
  startTime: string;
  endTime: string;
}

interface ClassTableProps {
  classes: ClassItem[];
}

const handleDeleteClass = (id: number) => {
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

export const ClassTable: React.FC<ClassTableProps> = ({ classes }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className=" border-2 px-4 py-2">Class Name</th>
          <th className=" border-2 px-4 py-2">Trainer Name</th>
          <th className=" border-2 px-4 py-2">Trainer Email</th>
          <th className=" border-2 px-4 py-2">Date</th>
          <th className=" border-2 px-4 py-2">Start Time</th>
          <th className=" border-2 px-4 py-2">End Time</th>
          <th className=" border-2 px-4 py-2">Update Class</th>
        </tr>
      </thead>
      <tbody>
        {classes.map((classItem) => (
          <tr key={classItem._id}>
            <td className="border px-4 py-2 text-center">{classItem.className}</td>
            <td className="border px-4 py-2 text-center">{`${classItem.trainer.name.firstName} ${classItem.trainer.name.lastName}`}</td>
            <td className="border px-4 py-2 text-center">{classItem.trainer.email}</td>
            <td className="border px-4 py-2 text-center">{new Date(classItem.date).toLocaleDateString()}</td>
            <td className="border px-4 py-2 text-center">{classItem.startTime}</td>
            <td className="border px-4 py-2 text-center">{classItem.endTime}</td>
            <td className="border px-4 py-2 text-center">
              <div className="flex justify-center items-center gap-3 ">
              <MyModal buttonText="Update" title="Update Class" buttonClassName="bg-[#21A36633] text-[#08A718]">
                <UpdateClass />
              </MyModal>
              <Button className="bg-[#EA5A4733] text-[#EA5A47]" onClick={() => handleDeleteClass(1)}>
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

