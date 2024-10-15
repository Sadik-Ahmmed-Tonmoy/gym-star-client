/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAddClassMutation } from "@/redux/features/manageClasses/manageClassesApi";
import { useGetAllTrainersQuery } from "@/redux/features/manageTrainer/manageTrainerApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, DatePicker, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { TimePicker } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

// Zod schema for extreme validation
const formSchema = z.object({
  className: z.string().min(2, { message: "Class Name must be at least 2 characters long" }),
  trainer: z.string().nonempty({ message: "Please select a trainer" }),
  date: z.date().refine((date) => date instanceof Date && !isNaN(date.getTime()), {
    message: "Please select a valid date",
  }), // Validating date
  startTime: z.date().refine((time) => time instanceof Date && !isNaN(time.getTime()), {
    message: "Please select a valid time",
  }), // Validating time
  description: z.string().optional(),
});

// Type inference for form values from the schema
type FormData = z.infer<typeof formSchema>;

type TTrainer = {
  _id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  passwordChangedAt: string;
  avatar: string;
  role: 'trainer' | 'trainee' | 'admin'; // Assuming role has specific options
  status: 'in-progress' | 'completed' | 'inactive'; // Assuming status has specific options
  classSchedules: Array<string>; // You can refine this if you know the structure of classSchedules
  isDeleted: boolean;
  classCount: number;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  id: string;
};

type TItem = {
  key: string;
  label: string;
};

const CreateClass = ({ setIsModalOpen }: { setIsModalOpen: (isOpen: boolean) => void }) => {
  const [addClassMutation, { isError, error }] = useAddClassMutation();
  const { data: trainersData } = useGetAllTrainersQuery(undefined);
  const formattedData = trainersData?.data?.map((item: TTrainer )=> ({
    key: item._id, // Use "id" as the key
    label: item.fullName // Use "fullName" as the label
  }));

  useEffect(() => {
    if (isError) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        // title: "There was a problem adding the Class.",
        text: (error as any)?.data?.success === false && (error as any)?.data?.errorSources[0]?.message,
        showConfirmButton: true,
      });
    }
  }, [isError, error]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (formData: FieldValues) => {
 
    formData.startTime = moment(formData.startTime).format("HH:mm");
    try {
      const res = await addClassMutation(formData).unwrap();
      if (res.success) {
        setIsModalOpen(false); // Close the modal on success
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset(); // Reset the form after submission
      } else {
        console.log("Login Failed:", res.error);
      }
    } catch (error) {
      console.log(error);
      // Swal.fire({
      //   position: "top-end",
      //   icon: "error",
      //   title: "Error!",
      //   text: "There was a problem adding the Class.",
      //   showConfirmButton: true,
      // });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 my-5">
        <div>
          <Input
            type="text"
            variant={"underlined"}
            key={"outside"}
            label="Class Name"
            labelPlacement="outside"
            {...register("className")}
            placeholder="Enter your Class Name"
          />
          {errors.className && <span className="text-red-500">{errors.className.message}</span>}
        </div>

        <div>
          <p className="">Select Trainer</p>
          <Select variant={"underlined"} placeholder="Select trainer" {...register("trainer")}>
            {formattedData?.map((item: TItem ) => (
              <SelectItem key={item.key}>{item.label}</SelectItem>
            ))}
          </Select>

          {errors.trainer && <span className="text-red-500">{errors.trainer.message}</span>}
        </div>

        <div>
          <p className="">Select date</p>
          <DatePicker
            // label="Select date"
            onChange={(date) => {
              if (date) {
                // Convert CalendarDate to Date using Moment.js
                const jsDate = moment(date).toDate();
                setValue("date", jsDate);
              }
            }}
            variant={"underlined"}
          />
          {errors.date && <span className="text-red-500">{errors.date.message}</span>}
        </div>

        <div className="w-full">
          <p className="mb-1">Select Class Start Time</p>
          <TimePicker
            className="w-full"
            onChange={(startTime) => {
              if (startTime) {
                const jsTime = moment(startTime.toDate()).toDate(); // Convert Dayjs to Date
                setValue("startTime", jsTime); // Update form state
              }
            }}
            // value={time ? moment(time) : undefined} // Set the value from the state
            // defaultOpenValue={moment('00:00', 'HH:mm')}
            format="HH:mm"
          />
          {errors.startTime && <span className="text-red-500">{errors.startTime.message}</span>}
        </div>
        <div className="w-full">
          <Textarea
            variant="underlined"
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            // value={value}
            // onValueChange={setValue}
            {...register("description")}
          />

          {errors.description && <span className="text-red-500">{errors.description.message}</span>}
        </div>

        <Button type="submit" className="bg-blue-400 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateClass;
