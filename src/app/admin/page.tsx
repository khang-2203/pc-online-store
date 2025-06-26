'use client';

import AddProductForm from './AddProductForm';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">Thêm sản phẩm mới</h1>
        <AddProductForm />
      </div>
    </div>
  );
}
