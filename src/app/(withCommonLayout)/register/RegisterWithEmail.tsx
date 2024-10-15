"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { LinkPreview } from "@/components/ui/link-preview";
import MyFormInputAceternity from "@/components/ui/MyForm/MyFormInputAceternity/MyFormInputAceternity";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { useLoginMutation, useRegisterMutation } from "@/redux/features/auth/authApi";
import { addTokenToLocalStorage } from "@/utils/tokenHandler";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

// Define Zod validation schema for registration form
export const registerSchema = z.object({
  firstName: z
    .string({ message: "First name is required" })
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string({ message: "Last name is required" })
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  email: z.string({ message: "Email is required" }).email("Invalid email address"),
  password: z
    .string({ message: "Password is required" })
    .min(6, "Password must be at least 6 characters long"),
  c_password: z
    .string({ message: "Confirm password is required" })
    .min(6, "Confirm password must be at least 6 characters long"),
}).superRefine((data, ctx) => {
  if (data.password !== data.c_password) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords must match",
      path: ["c_password"], // This is where the error will show up
    });
  }
});


export function RegisterWithEmail() {
  const [register, { isError: isRegistrationError, error: registrationError }] = useRegisterMutation();
  const [login] = useLoginMutation();
  useEffect(() => {
    if (isRegistrationError) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Registration Failed",
        // text: registrationError?.data?.success == false && registrationError?.data?.errorSources[0]?.message,
        showConfirmButton: true,
        // timer: 1500,
      });
    }
  }, [isRegistrationError, registrationError]);


  const router = useRouter();

  const handleSubmit = async (formData: FieldValues, reset: () => void) => {
    const formattedData = {
      name: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      email: formData.email,
      password: formData.password,
    };
    const res = await register(formattedData).unwrap();
    if (res.success) {
      const loginData = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      addTokenToLocalStorage(loginData?.data?.accessToken);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: res?.message,
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.setItem("redirectAfterReload", "true");

      // Reload the page to trigger the refetch with authorization header
   setTimeout(() => {
    window.location.reload();
   }, 500);
    
      reset(); // Uncomment this line to reset the form after submission
    } else {
      alert("Registration Failed:");
    }
  };
  
  useEffect(() => {
    // Check if the page was reloaded after a successful login
    const redirectFlag = localStorage.getItem("redirectAfterReload");
    if (redirectFlag) {
      // Remove the flag from localStorage
      localStorage.removeItem("redirectAfterReload");

      // Redirect to home route
      router.push("/");
    }
  }, [router]);

  return (
    <div
      style={{ boxShadow: "0px 0px 16px 0px rgba(228, 237, 240, 0.80)" }}
      className="max-w-xl w-full relative mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black my-4"
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">Welcome to Gym Star</h2>
      <div className=" flex justify-center items-center px-4">
        <div className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 text-center">
          Are you{" "}
          <FlipWords duration={1800} className="text-[#00a76b] dark:text-[#00a76b]" words={["sharp", "witty", "literate", "smart", "brilliant"]} /> ?{" "}
          <br />
        <div className="text-3xl">  Then register as <span className="text-red-400">Trainee!</span></div>
        </div>
      </div>

      <MyFormWrapper onSubmit={handleSubmit} validationSchema={registerSchema} className="flex flex-col gap-3 my-8">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-3">
          <MyFormInputAceternity name="firstName" label="First name" placeholder="Your First name" />
          <MyFormInputAceternity name="lastName" label="Last name" placeholder="Your Last name" />
        </div>
        <div className="flex flex-col gap-6 mb-4">
          {/* <MyFormInputAceternity name="phone" label="Phone Number" placeholder="Your Phone Number" /> */}
          <MyFormInputAceternity name="email" label="Email Address" placeholder="Enter Your Email Address" />
          <MyFormInputAceternity name="password" label="Password" placeholder="Enter Your Password" type="password" />
          <MyFormInputAceternity name="c_password" label="Confirm Password" placeholder="Re-type Your Password" type="password" />
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-[#00a76b] dark:from-zinc-900 dark:to-zinc-900 to-[#187c57] block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

        {/* <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center ps-2 px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">GitHub</span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center ps-2 px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">Google</span>
            <BottomGradient />
          </button>
        </div> */}
      </MyFormWrapper>

      <div className="mb-2 lg:mb-10 text-center text-neutral-600  dark:text-neutral-300 text-opacity-75 font-inter text-[14px] font-normal leading-normal">
        Already have an account?{" "}
        {/* <Link to={"/sign-up"}>
                                {" "}
                                <span className="text-black font-semibold">Register</span>
                            </Link> */}
        <LinkPreview
          url="/login"
          imageSrc="https://energie-cms.s3.eu-west-1.amazonaws.com/1386/ResistanceEquipment.png"
          isStatic
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#00a76b] to-[#00a76b] dark:text-[#00a76b]"
        >
          Login
        </LinkPreview>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
    </>
  );
};
