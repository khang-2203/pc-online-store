"use client";

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useState } from "react";
import LoginModal from "../../modals/LoginModal";

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-red-700 text-white m-5 text-base px-3 py-1.5 rounded-md flex items-center hover:bg-red-800 transition cursor-pointer"
      >
        <User className="mr-2" size={24} />
        <span>Đăng nhập</span>
      </Button>

      <LoginModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LoginButton;
