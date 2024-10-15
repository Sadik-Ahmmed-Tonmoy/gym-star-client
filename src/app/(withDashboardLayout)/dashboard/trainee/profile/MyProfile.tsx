'use client';
import { useUserDataQuery } from "@/redux/features/auth/authApi";
import { Divider } from "antd";
import Link from "next/link";
import React from "react";
import { TbEdit } from "react-icons/tb";

const MyProfile = () => {
    const { data: getMe } = useUserDataQuery(undefined);


    return (
        <>
            <div  className="rounded-lg bg-white">
                <div className="py-3 ps-3 md:py-5 md:ps-8 border-b-[0.5px] border-[#ECECEC]">
                    <h3 className="text-black text-opacity-80 font-inter text-xl lg:text-2xl font-semibold leading-[33.5px]">My Profile</h3>
                </div>
                <div className="pt-3 px-3 md:mb-3 md:pt-6 md:px-8">
                    <div className="flex justify-between mb-3 md:mb-6">
                        <p className="text-black font-inter text-base md:text-[18px] font-medium leading-normal">Personal Details</p>
                  <Link href={'/dashboard/trainee/profile/update-profile'}>
                            <span className="flex gap-[6px] items-center text-black text-opacity-80 font-inter text-[14px] font-medium leading-normal">
                                <TbEdit />
                                Edit
                            </span>
                  </Link>
                        
                    </div>
                    <div className="mb-3 md:mb-6">
                        <p className="mb-1 md:mb-2 text-black text-opacity-65 font-inter text-xs md:text-[14px] font-medium leading-normal">
                            Full Name
                        </p>
                        <p className="text-black font-inter text-xs md:text-base font-semibold leading-normal tracking-[-0.16px]">{getMe?.data?.fullName}</p>
                    </div>
                    <div className="mb-3 md:mb-6">
                        <p className="mb-1 md:mb-2 text-black text-opacity-65 font-inter text-xs md:text-[14px] font-medium leading-normal">
                            Email Address
                        </p>
                        <p className="text-black font-inter text-xs md:text-base font-semibold leading-normal tracking-[-0.16px]">
                     {getMe?.data?.email}
                        </p>
                    </div>
                  
                    <Divider />
                    <div className="pb-3 md:pb-9">
                        <div className="flex justify-between mb-2">
                            <p className="text-black font-inter text-xs md:text-base md:text-[18px] font-medium leading-normal">Password</p>
                        
                       
                           
                        </div>
                        <p className="text-black font-inter text-xs md:text-base font-semibold leading-normal tracking-[-0.16px]">***********</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
