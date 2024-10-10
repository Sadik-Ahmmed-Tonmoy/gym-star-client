"use client";
import moment from "moment";

const ViewClassesPage = () => {
  const TrainerClasses = {
    _id: "670654fceaf149e7784b13cb",
    name: {
      firstName: "trainer",
      lastName: "Doe",
      _id: "670654fceaf149e7784b13cc",
    },
    email: "trainer@example.com",
    passwordChangedAt: "2024-10-09T09:58:20.828Z",
    avatar: "https://example.com/avatar.jpg",
    role: "trainer",
    status: "in-progress",
    isDeleted: false,
    classCount: 0,
    createdAt: "2024-10-09T10:03:40.704Z",
    updatedAt: "2024-10-09T20:38:32.669Z",
    classSchedules: [
      {
        _id: "6706e1e1869eca097734efe1",
        className: "Morning Session",
        trainer: "670654fceaf149e7784b13cb",
        date: "2024-10-14T00:00:00.000Z",
        startTime: "15:13",
        endTime: "17:13",
        duration: "2hrs",
        enrolledTrainees: [],
        isDeleted: false,
        description: "A relaxing morning yoga class.",
        createdAt: "2024-10-09T20:04:49.789Z",
        updatedAt: "2024-10-09T20:04:49.789Z",
        __v: 0,
        id: "6706e1e1869eca097734efe1",
      },
      {
        _id: "6706e8057ccc7bee88c1af58",
        className: "Morning Session 2",
        trainer: "670654fceaf149e7784b13cb",
        date: "2024-10-16T00:00:00.000Z",
        startTime: "01:21",
        endTime: "03:21",
        duration: "2hrs",
        enrolledTrainees: [],
        isDeleted: false,
        description: "A relaxing morning yoga class.",
        createdAt: "2024-10-09T20:31:01.042Z",
        updatedAt: "2024-10-09T20:31:01.042Z",
        __v: 0,
        id: "6706e8057ccc7bee88c1af58",
      },
      {
        _id: "6706e8567ccc7bee88c1af63",
        className: "Morning Session 2",
        trainer: "670654fceaf149e7784b13cb",
        date: "2024-10-16T00:00:00.000Z",
        startTime: "01:22",
        endTime: "03:22",
        duration: "2hrs",
        enrolledTrainees: [],
        isDeleted: false,
        description: "A relaxing morning yoga class.",
        createdAt: "2024-10-09T20:32:22.236Z",
        updatedAt: "2024-10-09T20:32:22.236Z",
        __v: 0,
        id: "6706e8567ccc7bee88c1af63",
      },
      {
        _id: "6706e8607ccc7bee88c1af69",
        className: "Morning Session 2",
        trainer: "670654fceaf149e7784b13cb",
        date: "2024-10-17T00:00:00.000Z",
        startTime: "01:23",
        endTime: "03:23",
        duration: "2hrs",
        enrolledTrainees: [],
        isDeleted: false,
        description: "A relaxing morning yoga class.",
        createdAt: "2024-10-09T20:32:32.701Z",
        updatedAt: "2024-10-09T20:32:32.701Z",
        __v: 0,
        id: "6706e8607ccc7bee88c1af69",
      },
      {
        _id: "6706e8687ccc7bee88c1af6f",
        className: "Morning Session 2",
        trainer: "670654fceaf149e7784b13cb",
        date: "2024-10-17T00:00:00.000Z",
        startTime: "01:24",
        endTime: "03:24",
        duration: "2hrs",
        enrolledTrainees: [],
        isDeleted: false,
        description: "A relaxing morning yoga class.",
        createdAt: "2024-10-09T20:32:40.146Z",
        updatedAt: "2024-10-09T20:32:40.146Z",
        __v: 0,
        id: "6706e8687ccc7bee88c1af6f",
      },
      {
        _id: "6706e86c7ccc7bee88c1af75",
        className: "Morning Session 2",
        trainer: "670654fceaf149e7784b13cb",
        date: "2024-10-17T00:00:00.000Z",
        startTime: "01:25",
        endTime: "03:25",
        duration: "2hrs",
        enrolledTrainees: [],
        isDeleted: false,
        description: "A relaxing morning yoga class.",
        createdAt: "2024-10-09T20:32:44.881Z",
        updatedAt: "2024-10-09T20:32:44.881Z",
        __v: 0,
        id: "6706e86c7ccc7bee88c1af75",
      },
      {
        _id: "6706e8717ccc7bee88c1af7b",
        className: "Morning Session 2",
        trainer: "670654fceaf149e7784b13cb",
        date: "2024-10-17T00:00:00.000Z",
        startTime: "01:26",
        endTime: "03:26",
        duration: "2hrs",
        enrolledTrainees: [],
        isDeleted: false,
        description: "A relaxing morning yoga class.",
        createdAt: "2024-10-09T20:32:49.999Z",
        updatedAt: "2024-10-09T20:32:49.999Z",
        __v: 0,
        id: "6706e8717ccc7bee88c1af7b",
      },
      {
        _id: "6706e8767ccc7bee88c1af81",
        className: "Morning Session 2",
        trainer: "670654fceaf149e7784b13cb",
        date: "2024-10-17T00:00:00.000Z",
        startTime: "01:27",
        endTime: "03:27",
        duration: "2hrs",
        enrolledTrainees: [],
        isDeleted: false,
        description: "A relaxing morning yoga class.",
        createdAt: "2024-10-09T20:32:54.944Z",
        updatedAt: "2024-10-09T20:32:54.944Z",
        __v: 0,
        id: "6706e8767ccc7bee88c1af81",
      },
    ],
  };

  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col col-span-2 row-span-2 w-full whitespace-nowrap">
        <div className="border-b-[1px] border-[#B0B0B0] px-4 pt-5 pb-2 flex items-center justify-center">
          <h4 className="text-[#474848] font-poppins text-2xl text-center font-medium">View Class Details</h4>
        </div>
        {/* for pc version start */}
        <div className=" hidden lg:block">
          <div className="flex flex-col sm:flex-row gap-y-3 ps-4 text-center justify-between items-center">
            <p className="text-black font-poppins text-lg font-semibold flex-1">Class Name</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Date</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Start Time</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">End Time</p>
            <p className="text-black font-poppins text-lg font-semibold flex-1">Total Student</p>
          </div>
          <div className="p-4 flex flex-col gap-5">
            {TrainerClasses?.classSchedules?.map((classDetails, index) => (
              <div key={classDetails?._id} className="flex flex-col sm:flex-row gap-y-3 text-center  justify-between items-center">
                <p className="text-xl font-bold">{index + 1}</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold flex-1">{classDetails?.className}</p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                  {moment(classDetails?.date).format("MMMM Do YYYY")}
                </p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                  {moment(classDetails?.startTime, "HH:mm").format("hh:mm A")}
                </p>
                <p className="text-[var(--Natural-Color-2,#8F8F8F)] font-poppins text-lg font-light flex-1">
                  {moment(classDetails?.endTime, "HH:mm").format("hh:mm A")}
                </p>
                <p className="text-[#474848] font-poppins text-lg font-semibold flex-1">{classDetails?.enrolledTrainees?.length}</p>
              </div>
            ))}
          </div>
        </div>
        {/* for pc version end */}
        {/* for mobile version start */}
        <div className="block lg:hidden">
          {TrainerClasses?.classSchedules?.map((classDetails, index) => (
            <div key={classDetails?._id} className="flex flex-col gap-3 my-2 px-3 pb-5 border-b-2 ">
              <p className="text-xl font-bold">Class no: {index + 1}</p>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">Class Name</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{classDetails?.className}</p>
              </div>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">Date</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{moment(classDetails?.date).format("MMMM Do YYYY")}</p>
              </div>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">Start Time</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{moment(classDetails?.startTime, "HH:mm").format("hh:mm A")}</p>
              </div>
              <div>
                <p className="text-black font-poppins text-lg font-semibold">End Time</p>
                <p className="text-[#474848] font-poppins text-lg font-semibold">{moment(classDetails?.endTime, "HH:mm").format("hh:mm A")}</p>
              </div>
            </div>
          ))}
        </div>

        {/* for mobile version end */}
      </div>
    </>
  );
};

export default ViewClassesPage;
