export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-white-pucat">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
