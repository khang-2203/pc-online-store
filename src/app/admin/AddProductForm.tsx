'use client';

import { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('description', formData.description);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      const res = await axios.post('http://localhost:5000/api/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('✅ Thêm sản phẩm thành công!');
      console.log(res.data);
    } catch (err) {
      console.error('❌ Lỗi khi thêm sản phẩm:', err);
      alert('❌ Thêm thất bại!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        type="text"
        placeholder="Tên sản phẩm"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        name="price"
        type="number"
        placeholder="Giá"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <textarea
        name="description"
        placeholder="Mô tả"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        name="image"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
      <button
        type="submit"
        className="bg-red-600 text-white rounded-lg py-2 hover:bg-red-700 transition-all"
      >
        Thêm sản phẩm
      </button>
    </form>
  );
};

export default AddProductForm;
