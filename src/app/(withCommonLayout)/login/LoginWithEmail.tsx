/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { LinkPreview } from "@/components/ui/link-preview";
import MyFormInputAceternity from "@/components/ui/MyForm/MyFormInputAceternity/MyFormInputAceternity";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { useAppDispatch } from "@/lib/hooks";
import { useLoginMutation, useUserDataQuery } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { addTokenToLocalStorage } from "@/utils/tokenHandler";
import { verifyToken } from "@/utils/verifyToken";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import ReactLoading from 'react-loading';
import Swal from "sweetalert2";
import { z } from "zod";

// Define the Zod schema for form validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export function LoginWithEmail() {
  const dispatch = useAppDispatch()
  const { data, refetch } = useUserDataQuery(undefined);

  const [login, { isError, error, isLoading }] = useLoginMutation();
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Login Failed",
        text: (error as any)?.data?.success === false && (error as any)?.data?.errorSources[0]?.message,
        showConfirmButton: true,
        // timer: 1500,
      });
    }
  }, [isError, error]);

  const handleSubmit = async (formData: FieldValues, reset: () => void) => {
    try {
      const res = await login(formData).unwrap();
      if (res.success) {
        console.log("Login Successful:", res.data);

        const user = verifyToken(res?.data?.accessToken);
   
dispatch(setUser({user:user, token: res?.data?.accessToken}))
        // Save the token to localStorage
        await addTokenToLocalStorage(res?.data?.accessToken);

        // Show success message
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 2500,
        });

        // Set a flag in localStorage to indicate a successful login
        // localStorage.setItem("redirectAfterReload", "true");

        // Refetch user data after successful login
        await refetch();

        // Reload the page to trigger the refetch with authorization header
        // setTimeout(() => {
        //   window.location.reload();
        //  }, 500);

        // reset(); // Reset the form after submission
      } else {
        console.log("Login Failed:", res.error);
      }
    } catch (e) {
      console.error("Error during login:", e);
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
      className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black  relative"
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">Welcome to Gym Star</h2>
      <div className=" flex justify-center items-center px-4">
        <div className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 text-center">
          Are you{" "}
          <FlipWords duration={1800} className="text-[#00a76b] dark:text-[#00a76b]" words={["sharp", "witty", "literate", "smart", "brilliant"]} /> ?{" "}
          <br />
          Then login now!
        </div>
      </div>

      <MyFormWrapper onSubmit={handleSubmit} validationSchema={loginSchema} className="flex flex-col gap-3 my-8">
        <div className="flex flex-col gap-6 mb-4">
          <MyFormInputAceternity name="email" label="Email Address" placeholder="Enter Your Email Address" />
          <MyFormInputAceternity name="password" label="Password" placeholder="Enter Your Password" type="password" />
        </div>

        {/* <div className="flex justify-between items-center mb-6">
          <MyFormCheckBox title="Remember Me" handleCheckboxChange={setChecked} />

          <Link href={"/forgot-password"}>
            <p className="text-black-80 font-inter text-[14px] font-normal leading-normal tracking-[-0.14px]">Forgot Password?</p>
          </Link>
        </div> */}


        {isLoading ? (
          <div className="flex justify-center w-full"> <ReactLoading type={"balls"} color={"#00a76b"} height={50} width={100} /></div>
        ) : (
          <button
            className="bg-gradient-to-br relative group/btn from-[#00a76b] dark:from-zinc-900 dark:to-zinc-900 to-[#187c57] block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Log in &rarr;
            <BottomGradient />
          </button>
        )}

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
        Don&apos; have an account?
        <LinkPreview
          url="/register"
          imageSrc="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/compress-strong-man-training-gym-min-scaled.jpg?fit=2560%2C1707&ssl=1"
          isStatic
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#00a76b] to-[#00a76b] dark:text-[#00a76b] ps-1"
        >
          Register
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
