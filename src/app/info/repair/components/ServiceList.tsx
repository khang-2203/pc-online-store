import { serviceData } from "../data/serviceData";
import ServiceCard from "./ServiceCard";

export default function ServiceList() {
  return (
    <div className="bg-white rounded-lg shadow-md">
      {serviceData.map((service, index) => (
        <div key={service.id}>
          <ServiceCard service={service} />
          {index < serviceData.length - 1 && (
            <hr className="border-gray-200 mx-6" />
          )}
        </div>
      ))}
    </div>
  );
}
