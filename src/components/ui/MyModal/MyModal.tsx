"use client";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { Modal } from "antd";
import React, { useState } from "react";

const MyModal = ({
  children,
  title,
  buttonText,
  buttonClassName,
}: {
  children: React.ReactNode;
  title: string;
  buttonText: string;
  buttonClassName?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className={cn("bg-blue-400 text-white", buttonClassName)} onClick={showModal}>
        {buttonText}
      </Button>

      <Modal title={title} open={isModalOpen} onCancel={handleCancel} footer={false}>
        {children}
      </Modal>
    </>
  );
};

export default MyModal;
