"use client";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { Modal } from "antd";
import React, {  useEffect, useState } from "react";

const MyModal = ({
  children,
  title,
  buttonText,
  buttonClassName,
  isOpen,
  setModalOpen
}: {
  children: React.ReactNode;
  title: string;
  buttonText: string;
  buttonClassName?: string;
  isOpen?: boolean | undefined;
  setModalOpen?: (isOpen: boolean ) => void; 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    if (setModalOpen) setModalOpen(true);
  };

  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };

  const handleCancel = () => {
    setIsModalOpen(false);
    if (setModalOpen) setModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(isOpen ?? false); 
  }, [isOpen]);

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
