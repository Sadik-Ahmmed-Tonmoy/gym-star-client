import { Divider } from "antd";
import React from "react";
import { TbEdit } from "react-icons/tb";
// import { Link } from "react-router-dom";
// import useAuthUser from "../../../hooks/useAuthUser";
// import { Bars } from "react-loader-spinner";

const MyProfile = () => {
    // const { userData, isUserLoading } = useAuthUser();
    // if(isUserLoading){
    //     return   <div className="flex justify-center items-center min-h-[calc(100vh-55vh)]">
    //     <Bars
    //         height="40"
    //         width="80"
    //         color="#5DC9F4"
    //         ariaLabel="bars-loading"
    //         wrapperStyle={{}}
    //         wrapperClass=""
    //         visible={true}
    //     />
    // </div>
    // }

    return (
        <>
            <div  className="rounded-lg bg-white">
                <div className="py-3 ps-3 md:py-5 md:ps-8 border-b-[0.5px] border-[#ECECEC]">
                    <h3 className="text-black text-opacity-80 font-inter text-xl lg:text-2xl font-semibold leading-[33.5px]">My Profile</h3>
                </div>
                <div className="pt-3 px-3 md:mb-3 md:pt-6 md:px-8">
                    <div className="flex justify-between mb-3 md:mb-6">
                        <p className="text-black font-inter text-base md:text-[18px] font-medium leading-normal">Personal Details</p>
                  
                            <span className="flex gap-[6px] items-center text-black text-opacity-80 font-inter text-[14px] font-medium leading-normal">
                                <TbEdit />
                                Edit
                            </span>
                        
                    </div>
                    <div className="mb-3 md:mb-6">
                        <p className="mb-1 md:mb-2 text-black text-opacity-65 font-inter text-xs md:text-[14px] font-medium leading-normal">
                            Full Name
                        </p>
                        <p className="text-black font-inter text-xs md:text-base font-semibold leading-normal tracking-[-0.16px]">Sadik</p>
                    </div>
                    <div className="mb-3 md:mb-6">
                        <p className="mb-1 md:mb-2 text-black text-opacity-65 font-inter text-xs md:text-[14px] font-medium leading-normal">
                            Email Address
                        </p>
                        <p className="text-black font-inter text-xs md:text-base font-semibold leading-normal tracking-[-0.16px]">
                       email@gmail.com
                        </p>
                    </div>
                  
                    <Divider />
                    <div className="pb-3 md:pb-9">
                        <div className="flex justify-between mb-2">
                            <p className="text-black font-inter text-xs md:text-base md:text-[18px] font-medium leading-normal">Password</p>
                        
                            <span className=" text-black text-opacity-80 font-inter text-xs md:text-[14px] font-medium leading-normal">
                                Change Password
                            </span>
                           
                        </div>
                        <p className="text-black font-inter text-xs md:text-base font-semibold leading-normal tracking-[-0.16px]">***********</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
