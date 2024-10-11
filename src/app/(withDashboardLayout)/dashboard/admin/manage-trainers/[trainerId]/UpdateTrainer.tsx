"use client";
import { useGetSingleUserQuery, useUpdateTrainerMutation } from "@/redux/features/manageTrainer/manageTrainerApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First Name must be at least 2 characters long" }),
  lastName: z.string().min(2, { message: "Last Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  // password: z
  //   .string()
  //   .min(8, { message: "Password must be at least 8 characters long" })
  //   .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  //   .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
  //   .regex(/\d/, { message: "Password must contain at least one number" }),
});

// Type inference for form values from the schema
type FormData = z.infer<typeof formSchema>;

const UpdateTrainer = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data: trainersData, isLoading: isTrainersLoading } = useGetSingleUserQuery(id);
  console.log(trainersData?.data);
  const [updateTrainerMutation] = useUpdateTrainerMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (formData: FieldValues) => {
    const formattedData = {
      id: id,
      name: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await updateTrainerMutation(formattedData).unwrap();
      if (res.success) {
        // Close the modal on success
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Trainer Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/dashboard/admin/manage-trainers");
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

 

  

  return (
    <>
      <div className="px-5">
        {isTrainersLoading ? (
          <></>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 my-5">
            <div>
              <Input
                type="text"
                variant={"underlined"}
                key={"outside"}
                label="First Name"
                defaultValue={trainersData?.data?.name?.firstName}
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
                key={"outside"}
                label="Last Name"
                defaultValue={trainersData?.data?.name?.lastName}
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
                key={"outside"}
                label="Email"
                defaultValue={trainersData?.data?.email}
                labelPlacement="outside"
                {...register("email")}
                placeholder="Enter your Email"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* <div>
            <Input
              variant={"underlined"}
              key={"outside"}
              label="Password"
              defaultValue={trainersData?.data?.password}
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
          </div> */}

            <Button type="submit" className="bg-blue-400 text-white">
              Submit
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default UpdateTrainer;
