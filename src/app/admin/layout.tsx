// src/app/admin/layout.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { AdminAuthProvider, useAdminAuth } from "@/app/admin/login/AuthContext";
import AdminSidebar from "@/app/admin/Sidebar";

function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated } = useAdminAuth();

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!isAuthenticated && !isLoginPage) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, pathname]);

  if (!isAuthenticated && !isLoginPage) return null;

  return (
    <div className="flex min-h-screen">
      {!isLoginPage && <AdminSidebar />}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

export default function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <ProtectedAdminLayout>{children}</ProtectedAdminLayout>
    </AdminAuthProvider>
  );
}
