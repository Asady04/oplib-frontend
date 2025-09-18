export default function LectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-white-lms">
      <main className="">{children}</main>
    </div>
  );
}
