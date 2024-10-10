"use client";
import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link"; // For Next.js navigation
import { useEffect, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";

// Admin Side Menu
export const SideMenuForAdmin = () => {
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveKey(window.location.pathname); // Set active key based on current path
    }
  }, []);

  return (
    <div>
      <Menu
        theme="dark"
        className="md:pt-24 h-screen bg-transparent"
        mode="inline"
        selectedKeys={[activeKey]} // Use state for the selected menu key
        items={[
          {
            key: "/dashboard/admin/manage-trainers",
            icon: <UserOutlined />,
            label: (
              <Link href="/dashboard/admin/manage-trainers" onClick={() => setActiveKey("/dashboard/admin/manage-trainers")}>
                Manage Trainers
              </Link>
            ),
          },
          {
            key: "/dashboard/admin/class-scheduling",
            icon: <SiGoogleclassroom />,
            label: (
              <Link href="/dashboard/admin/class-scheduling" onClick={() => setActiveKey("/dashboard/admin/class-scheduling")}>
                Class Scheduling
              </Link>
            ),
          },
        ]}
      />
    </div>
  );
};

// Trainer Side Menu
export const SideMenuForTrainer = () => {
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveKey(window.location.pathname); // Set active key based on current path
    }
  }, []);

  return (
    <div>
      <Menu
        theme="dark"
        className="md:pt-24 h-screen bg-transparent"
        mode="inline"
        selectedKeys={[activeKey]} // Use state for the selected menu key
        items={[
          {
            key: "/dashboard/trainer/view-classes",
            icon: <SiGoogleclassroom />,
            label: (
              <Link href="/dashboard/trainer/view-classes" onClick={() => setActiveKey("/dashboard/trainer/view-classes")}>
                View Classes
              </Link>
            ),
          },
        ]}
      />
    </div>
  );
};

// Trainee Side Menu
export const SideMenuForTrainee = () => {
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveKey(window.location.pathname); // Set active key based on current path
    }
  }, []);

  return (
    <div>
      <Menu
        theme="dark"
        className="md:pt-24 h-screen bg-transparent"
        mode="inline"
        selectedKeys={[activeKey]} // Use state for the selected menu key
        items={[
          {
            key: "/dashboard/trainee/profile",
            icon: <UserOutlined />,
            label: (
              <Link href="/dashboard/trainee/profile" onClick={() => setActiveKey("/dashboard/trainee/profile")}>
                Profile Management
              </Link>
            ),
          },
          {
            key: "/dashboard/trainee/class-booking",
            icon: <SiGoogleclassroom />,
            label: (
              <Link href="/dashboard/trainee/class-booking" onClick={() => setActiveKey("/dashboard/trainee/class-booking")}>
                Class Booking
              </Link>
            ),
          },
        ]}
      />
    </div>
  );
};
