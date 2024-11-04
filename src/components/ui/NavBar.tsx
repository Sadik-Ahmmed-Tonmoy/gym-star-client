"use client";
import { useUserDataQuery } from "@/redux/features/auth/authApi";
import { getTokenFromLocalStorage, removeTokenFromLocalStorage } from "@/utils/tokenHandler";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FloatingNav } from "./floating-navbar";
import { verifyToken } from "@/utils/verifyToken";

const NavBar = () => {
  const { data: getMe, refetch, isLoading } = useUserDataQuery(undefined);

  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);  // Initial state

  // Update `isUserLoggedIn` based on token presence
  // useEffect(() => {
  //   const token = getTokenFromLocalStorage();
  //   setIsUserLoggedIn(!!token);  // Set true if token exists, false otherwise
  // }, [isLoading]);  // Empty dependency array ensures this runs once on mount


  const token = getTokenFromLocalStorage();
let userData = null;
useEffect(() => {
  if (token) {
    setIsUserLoggedIn(true);
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
        await removeTokenFromLocalStorage();
        refetch();
        await Swal.fire({
          title: "Logged Out!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        setIsUserLoggedIn(false);
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
        if (getMe?.data?.role === "admin") {
          return "/dashboard/admin/manage-trainers";
        } else if (getMe?.data?.role === "trainer") {
          return "/dashboard/trainer/view-classes";
        } else if (getMe?.data?.role === "trainee") {
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
      {getMe?.data?.role === "admin" && (
        <Link href={"/dashboard/admin/manage-trainers"}>
          <p>Dashboard</p>
        </Link>
      )}
      {getMe?.data?.role === "trainer" && (
        <Link href={"/dashboard/trainer/view-classes"}>
          <p>Dashboard</p>
        </Link>
      )}
      {getMe?.data?.role === "trainee" && (
        <Link href={"/dashboard/trainee/profile"}>
          <p>Dashboard</p>
        </Link>
      )}

      {/* Login/Logout Button based on isUserLoggedIn */}
      <div>
        {isUserLoggedIn ? (
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
