"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAdminAuth } from "@/app/admin/login/AuthContext"; // dùng context để set auth

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setAuthenticated } = useAdminAuth(); // gọi để cập nhật trạng thái

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true"); // lưu token hoặc flag
      setAuthenticated(true); // thông báo layout là đã login
      router.push("/admin"); // chuyển hướng vào dashboard
    } else {
      setError("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-40 space-y-4 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold text-center">Đăng nhập Admin</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          placeholder="Mật khẩu"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" className="w-full bg-red-600 text-white">
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}
