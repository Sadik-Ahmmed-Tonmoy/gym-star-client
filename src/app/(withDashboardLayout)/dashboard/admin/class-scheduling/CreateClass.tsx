"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, DatePicker, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { TimePicker } from "antd";
import moment from "moment";
import { useForm } from "react-hook-form";
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

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

const CreateClass = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data: ", data);
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
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
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
