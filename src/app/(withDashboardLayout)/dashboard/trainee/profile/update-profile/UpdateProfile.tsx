/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useUpdateUserMutation, useUserDataQuery } from "@/redux/features/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

// Zod schema for extreme validation
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First Name must be at least 2 characters long" }),
  lastName: z.string().min(2, { message: "Last Name must be at least 2 characters long" }),

});

// Type inference for form values from the schema
type FormData = z.infer<typeof formSchema>;

const UpdateProfile = () => {
  const [updateUserMutation, { isError, error }] = useUpdateUserMutation();
  const { data: getMe, isLoading } = useUserDataQuery(undefined);
 const router = useRouter();

  useEffect(() => {
    if (isError) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        // title: "Something went wrong",
        text: (error as any)?.data?.success === false && (error as any)?.data?.errorSources[0]?.message,
        showConfirmButton: true,
      });
    }
  }, [isError, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },

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
    };

    try {
      const res = await updateUserMutation(formattedData).unwrap();
      if (res.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Profile Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/dashboard/trainee/profile");
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
    <div>
      {isLoading ? (
        <></>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 my-5 px-3">
          <div>
            <Input
              type="text"
              variant={"underlined"}
              label="First Name"
              labelPlacement="outside"
              {...register("firstName")}
              defaultValue={getMe?.data?.name?.firstName}
              placeholder="Enter your First Name"
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
          </div>

          <div>
            <Input
              type="text"
              variant={"underlined"}
              label="Last Name"
              defaultValue={getMe?.data?.name?.lastName}
              labelPlacement="outside"
              {...register("lastName")}
              placeholder="Enter your Last Name"
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
          </div>

        
          <Button type="submit" className="bg-blue-400 text-white">
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default UpdateProfile;
