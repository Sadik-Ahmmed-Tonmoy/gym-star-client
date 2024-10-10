"use client";

import { LinkPreview } from "@/components/ui/link-preview";
import MyFormInputAceternity from "@/components/ui/MyForm/MyFormInputAceternity/MyFormInputAceternity";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { FieldValues } from "react-hook-form";

export function ForgotPassword() {
  const handleSubmit = (data: FieldValues, reset: () => void) => {
    console.log("Form Data:", data);
    reset(); // Uncomment this line to reset the form after submission
  };

  return (
    <div
      style={{ boxShadow: "0px 0px 16px 0px rgba(228, 237, 240, 0.80)" }}
      className="max-w-xl w-full relative mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black my-8"
    >
      <h3 className="text-center text-3xl">LOGO</h3>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">Forgot Password</h2>
      <div className=" flex justify-center items-center px-4">
        <div className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 text-center">
          Enter the email address you used when you joined and we’ll send you instructions to reset your password.
        </div>
      </div>

      <MyFormWrapper onSubmit={handleSubmit} className="flex flex-col gap-3 my-8">
        <div className="flex flex-col gap-6 mb-4">
          <MyFormInputAceternity name="email" label="Email Address" placeholder="Enter Your Email Address" />
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-[#00a76b] dark:from-zinc-900 dark:to-zinc-900 to-[#187c57] block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send reset instructions &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
      </MyFormWrapper>

      <div className="mb-2 lg:mb-10 text-center text-neutral-600  dark:text-neutral-300 text-opacity-75 font-inter text-[14px] font-normal leading-normal">
        Already have an account?{" "}
     
        <LinkPreview
          url="/login"
          imageSrc="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/compress-strong-man-training-gym-min-scaled.jpg?fit=2560%2C1707&ssl=1"
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


