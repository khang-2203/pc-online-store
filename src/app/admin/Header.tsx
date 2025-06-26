'use client';

import AddProductForm from './AddProductForm';

export default function AdminPage() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-red-600 mb-6">Thêm sản phẩm mới</h1>
      <AddProductForm />
    </div>
  );
}
