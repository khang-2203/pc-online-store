import ShowroomCard from "@/app/showroom/components/ShowroomCard";

type ShowroomListProps = {
  data: {
    city: string;
    branches: {
      name: string;
      address: string;
      phone: string;
    }[];
  }[];
};

export default function ShowroomList({ data }: ShowroomListProps) {
  return (
    <div id="showroom-list" className="space-y-8">
      {data.map((cityBlock, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold text-red-600 mb-4 ">
            {cityBlock.city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityBlock.branches.map((branch, idx) => (
              <ShowroomCard key={idx} branch={branch} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
