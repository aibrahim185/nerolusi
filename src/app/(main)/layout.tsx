import Navbar from "@/components/navbar/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="size-full">
      <Navbar />
      <div className="mx-12 my-3">{children}</div>
    </body>
  );
}
