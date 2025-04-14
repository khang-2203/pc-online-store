type Branch = {
  name: string;
  address: string;
  phone: string;
};

export default function ShowroomCard({ branch }: { branch: Branch }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-1">{branch.name}</h3>
      <p className="text-sm text-gray-600">{branch.address}</p>
      <p className="text-sm text-gray-600">Hotline: {branch.phone}</p>
    </div>
  );
}
