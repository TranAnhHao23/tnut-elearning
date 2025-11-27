import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Đại học từ xa trường Kỹ thuật công nghiệp Thái Nguyên",
  description: "Trường Kỹ thuật công nghiệp Thái Nguyên hệ đào tạo từ xa học trực tuyến các ngành kỹ thuật.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
