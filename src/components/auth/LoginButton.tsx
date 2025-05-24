"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { User, LogOut, ChevronDown } from "lucide-react";
import LoginModal from "../../modals/LoginModal";

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    setIsOpen(false);
  };

  const handleLogout = () => {
    setUserEmail(null);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!userEmail) {
    return (
      <>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-red-700 text-white m-5 text-base px-3 py-1.5 rounded-md hidden md:flex items-center hover:bg-red-800 transition cursor-pointer"
        >
          <User className="mr-2" size={24} />
          <span>Đăng nhập</span>
        </Button>
        <LoginModal open={isOpen} onClose={() => setIsOpen(false)} onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }

  return (
    <div className="relative m-5 hidden md:flex" ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        className="bg-red-700 text-white text-base px-3 py-1.5 rounded-md flex items-center hover:bg-red-800 transition cursor-pointer select-none focus:outline-none"
      >
        Xin chào, {userEmail} <ChevronDown className="ml-2" size={18} />
      </Button>

      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-md shadow-lg z-50 pointer-events-auto">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-black transition rounded-md focus:outline-none cursor-pointer"
          >
            <LogOut className="inline mr-4" size={18} />
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginButton;