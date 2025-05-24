"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
};

const LoginModal = ({ open, onClose, onLoginSuccess }: Props) => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setIsRegister(false);
      setForgotPassword(false);
      setEmailInput("");
      setPasswordInput("");
      setError("");
    }
  }, [open]);

  const handleSocialLogin = (provider: "google" | "facebook" | "phone") => {
    console.log(isRegister ? "Register with" : "Login with", provider);
  };

  // Hardcoded users
  const users = [
    { email: "admin", password: "admin123", role: "Admin" },
    { email: "L3stkaio@gmail.com", password: "khang123", role: "Khách" },
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === emailInput.toLowerCase() &&
        u.password === passwordInput
    );

    if (user) {
      onLoginSuccess(user.email);
      onClose();
    } else {
      setError("Email hoặc mật khẩu không đúng");
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Chức năng đăng ký chưa được triển khai");
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Chức năng quên mật khẩu chưa được triển khai");
  };

  const SocialLoginButtons = () => (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-2 flex-wrap">
      <Button
        onClick={() => handleSocialLogin("phone")}
        className="flex-1 min-w-[150px] border border-gray-300 bg-white text-black hover:bg-gray-100 cursor-pointer"
      >
        <FaPhoneAlt className="mr-2" />
        Số điện thoại
      </Button>
      <Button
        onClick={() => handleSocialLogin("google")}
        className="flex-1 min-w-[150px] border border-gray-300 bg-white text-black hover:bg-gray-100 cursor-pointer"
      >
        <FcGoogle className="mr-2" />
        Tiếp tục với Google
      </Button>
      <Button
        onClick={() => handleSocialLogin("facebook")}
        className="flex-1 min-w-[150px] border border-gray-300 bg-white text-black hover:bg-gray-100 cursor-pointer"
      >
        <FaFacebook className="mr-2 text-blue-600" />
        Tiếp tục với Facebook
      </Button>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90%] max-w-md rounded-xl p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold mb-4">
            {forgotPassword
              ? "Đặt lại mật khẩu"
              : isRegister
              ? "Tạo tài khoản"
              : "Đăng nhập vào tài khoản"}
          </DialogTitle>
        </DialogHeader>

        {forgotPassword ? (
          <form
            onSubmit={handleForgotPasswordSubmit}
            className="flex flex-col gap-3"
          >
            <Input placeholder="Email hoặc số điện thoại" required />
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            >
              GỬI LIÊN KẾT ĐẶT LẠI MẬT KHẨU
            </Button>
            <div className="text-center text-sm">
              <button
                type="button"
                className="text-blue-600 hover:underline mt-2 cursor-pointer"
                onClick={() => setForgotPassword(false)}
              >
                Quay lại đăng nhập
              </button>
            </div>
          </form>
        ) : isRegister ? (
          <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-3">
            <Input placeholder="Email" required />
            <Input placeholder="Họ" required />
            <Input placeholder="Tên" required />
            <Input placeholder="Mật khẩu" type="password" required />
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            >
              TẠO TÀI KHOẢN
            </Button>
            <SocialLoginButtons />
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-3">
            <Input
              placeholder="Email hoặc số điện thoại"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />

            <div className="relative">
              <Input
                placeholder="Mật khẩu"
                type={showPassword ? "text" : "password"}
                required
                className="pr-10"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm font-medium">{error}</div>
            )}

            <div
              className="text-right text-sm text-blue-600 hover:underline cursor-pointer"
              onClick={() => setForgotPassword(true)}
            >
              Quên mật khẩu?
            </div>

            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            >
              ĐĂNG NHẬP
            </Button>

            <SocialLoginButtons />
          </form>
        )}

        {!forgotPassword && (
          <>
            <Separator />

            <div className="text-center text-sm">
              {isRegister ? (
                <>
                  <span>Bạn đã có tài khoản? </span>
                  <button
                    type="button"
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => setIsRegister(false)}
                  >
                    Đăng nhập
                  </button>
                </>
              ) : (
                <>
                  <span>Bạn chưa có tài khoản? </span>
                  <button
                    type="button"
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => setIsRegister(true)}
                  >
                    Tạo tài khoản
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
