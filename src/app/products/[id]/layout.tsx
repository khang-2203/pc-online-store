export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-7xl mx-auto p-4">{children}</div>;
}
