"use client";

import Link from "next/link";

const AdminSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-red-100 p-4 border-r border-red-300">
      <h2 className="text-xl font-bold text-red-700 mb-6">Quản trị</h2>
      <nav className="flex flex-col gap-3">
        <Link href="/admin" className="text-red-800 hover:underline">
          📋 Dashboard
        </Link>
        <Link href="/admin/products" className="text-red-800 hover:underline">
          🛒 Quản lý sản phẩm
        </Link>
        <Link href="/admin/orders" className="text-red-800 hover:underline">
          📦 Đơn hàng
        </Link>
        <Link href="/admin/users" className="text-red-800 hover:underline">
          👤 Người dùng
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
