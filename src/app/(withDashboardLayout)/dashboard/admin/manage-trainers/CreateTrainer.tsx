/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAddTrainerMutation } from "@/redux/features/manageTrainer/manageTrainerApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { z } from "zod";

// Zod schema for extreme validation
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First Name must be at least 2 characters long" }),
  lastName: z.string().min(2, { message: "Last Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/\d/, { message: "Password must contain at least one number" }),
});

// Type inference for form values from the schema
type FormData = z.infer<typeof formSchema>;

const CreateTrainer = ({ setIsModalOpen }: { setIsModalOpen: (isOpen: boolean) => void }) => {
  const [addTrainerMutation, { isError, error }] = useAddTrainerMutation();

  useEffect(() => {
    if (isError) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        // title: "",
        text: (error as any)?.data?.success === false && (error as any)?.data?.errorSources[0]?.message,
        showConfirmButton: true,
      });
    }
  }, [isError, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (formData: FieldValues) => {
    const formattedData = {
      name: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await addTrainerMutation(formattedData).unwrap();
      if (res.success) {
        setIsModalOpen(false); // Close the modal on success
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Trainer Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset(); // Reset the form after submission
      } else {
        console.log("Login Failed:", res.error);
      }
    } catch (error) {
      console.error("Error adding trainer:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error!",
        text: "There was a problem adding the trainer.",
        showConfirmButton: true,
      });
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 my-5">
        <div>
          <Input
            type="text"
            variant={"underlined"}
            label="First Name"
            labelPlacement="outside"
            {...register("firstName")}
            placeholder="Enter your First Name"
          />
          {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
        </div>

        <div>
          <Input
            type="text"
            variant={"underlined"}
            label="Last Name"
            labelPlacement="outside"
            {...register("lastName")}
            placeholder="Enter your Last Name"
          />
          {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
        </div>

        <div>
          <Input
            type="text"
            variant={"underlined"}
            label="Email"
            labelPlacement="outside"
            {...register("email")}
            placeholder="Enter your Email"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div>
          <Input
            variant={"underlined"}
            label="Password"
            labelPlacement="outside"
            {...register("password")}
            placeholder="Enter your Password"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? <IoEyeOff size={16} className="text-[#807D7E]" /> : <IoEyeSharp size={16} className="text-[#807D7E]" />}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <Button type="submit" className="bg-blue-400 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateTrainer;
