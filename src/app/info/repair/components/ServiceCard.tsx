import { Service } from "../data/serviceData";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-blue-900 mb-2">
        {service.title}
      </h2>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Từ {service.price.toLocaleString()} VNĐ
        </span>
        <a
          href={`/services/${service.id}`}
          className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Tìm hiểu thêm
        </a>
      </div>
    </div>
  );
}
