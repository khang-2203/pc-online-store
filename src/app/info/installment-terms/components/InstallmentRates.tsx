export default function InstallmentRates() {
  const rates = [
    { term: "3 tháng", interest: "0%", prepay: "30%" },
    { term: "6 tháng", interest: "0%", prepay: "40%" },
    { term: "12 tháng", interest: "1.5%/tháng", prepay: "50%" },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Lãi suất và kỳ hạn
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 p-3 text-left">Kỳ hạn</th>
              <th className="border border-gray-300 p-3 text-left">Lãi suất</th>
              <th className="border border-gray-300 p-3 text-left">
                Trả trước
              </th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{rate.term}</td>
                <td className="border border-gray-300 p-3">{rate.interest}</td>
                <td className="border border-gray-300 p-3">{rate.prepay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
