"use client";
import { useUserDataQuery } from "@/redux/features/auth/authApi";
import { removeTokenFromLocalStorage } from "@/utils/tokenHandler";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { FloatingNav } from "./floating-navbar";

const NavBar = () => {

  
  const { data: getMe, refetch } = useUserDataQuery(undefined);
  const router = useRouter();

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove token only after confirmation
        removeTokenFromLocalStorage();

        // Refetch user data to clear cached data
        refetch();
        setTimeout(() => {
          window.location.reload();
         }, 1200);
        Swal.fire({
          title: "Logged Out!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        router.push("/");
      }
    });
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

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
          return  "/login";
        }
      })(),
    },
  ];
  return (
    <div className=" h-12 w-full flex justify-around items-center ">
      <Link href={"/"}>
        <span className="text-[#00a76b] text-3xl">GYM STAR</span>
      </Link>
      {getMe?.data?.role === "admin" ? (
        <Link href={"/dashboard/admin/manage-trainers"}>
          {" "}
          <p>Dashboard</p>
        </Link>
      ) : getMe?.data?.role === "trainer" ? (
        <Link href={"/dashboard/trainer/view-classes"}>
          {" "}
          <p>Dashboard</p>
        </Link>
      ) : getMe?.data?.role === "trainee" ? (
        <Link href={"/dashboard/trainee/profile"}>
          {" "}
          <p>Dashboard</p>
        </Link>
      ) : null}
      <div>
        {getMe?.success ? (
          <div onClick={handleLogout} className="text-red-500 cursor-pointer">
            Log out
          </div>
        ) : (
          <Link href={"/login"}>
            <div className="text-[#00a76b] cursor-pointer">Log in</div>
          </Link>
        )}
      </div>
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default NavBar;
