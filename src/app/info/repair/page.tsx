// services/page.tsx
import ServiceBanner from "./components/ServiceBanner";
import ServiceList from "./components/ServiceList";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Banner */}
      <ServiceBanner />

      {/* Service List */}
      <div className="my-12">
        <ServiceList />
      </div>
    </div>
  );
}
