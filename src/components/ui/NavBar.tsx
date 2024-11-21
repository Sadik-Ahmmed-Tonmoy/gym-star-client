"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { getTokenFromLocalStorage } from "@/utils/tokenHandler";
import { verifyToken } from "@/utils/verifyToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { FloatingNav } from "./floating-navbar";

const NavBar = () => {
  // const { data: getMe, refetch, isLoading } = useUserDataQuery(undefined);
  const user = useAppSelector(selectCurrentUser)
  console.log(user?.role);
  const router = useRouter();

  // Update `isUserLoggedIn` based on token presence
  // useEffect(() => {
  //   const token = getTokenFromLocalStorage();
  //   setIsUserLoggedIn(!!token);  // Set true if token exists, false otherwise
  // }, [isLoading]);  // Empty dependency array ensures this runs once on mount


  const token = getTokenFromLocalStorage();
  const tokenFromRedux = useAppSelector(useCurrentToken)
  const dispatch = useAppDispatch();
let userData = null;
useEffect(() => {
  if (token) {
  
    userData = verifyToken(token);
    console.log(userData);
  }
}, [token]);


  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log out!",
      });

      if (result.isConfirmed) {
        // await removeTokenFromLocalStorage();
        // refetch();
        dispatch(logout())
        await Swal.fire({
          title: "Logged Out!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        // setIsUserLoggedIn(false);
        await router.push("/");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const navItems = [
    {
      name: "Dashboard",
      link: (() => {
        if (user?.role === "admin") {
          return "/dashboard/admin/manage-trainers";
        } else if (user?.role === "trainer") {
          return "/dashboard/trainer/view-classes";
        } else if (user?.role === "trainee") {
          return "/dashboard/trainee/profile";
        } else {
          return "/login";
        }
      })(),
    },
  ];

  return (
    <div className="h-12 w-full flex justify-around items-center">
      <Link href={"/"}>
        <span className="text-[#00a76b] text-3xl">GYM STAR</span>
      </Link>

      {/* Conditional rendering based on user role */}
      {user?.role === "admin" && (
        <Link href={"/dashboard/admin/manage-trainers"}>
          <p>Dashboard</p>
        </Link>
      )}
      {user?.role === "trainer" && (
        <Link href={"/dashboard/trainer/view-classes"}>
          <p>Dashboard</p>
        </Link>
      )}
      {user?.role === "trainee" && (
        <Link href={"/dashboard/trainee/profile"}>
          <p>Dashboard</p>
        </Link>
      )}

      {/* Login/Logout Button based on isUserLoggedIn */}
      <div>
        {tokenFromRedux ? (
          <div onClick={handleLogout} className="text-red-500 cursor-pointer">
            Log out
          </div>
        ) : (
          <Link href={"/login"}>
            <div className="text-[#00a76b] cursor-pointer">Log in</div>
          </Link>
        )}
      </div>

      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default NavBar;
