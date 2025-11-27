import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Đại học Kỹ thuật Công nghiệp - Đại học Thái Nguyên',
  description: 'Tuyển sinh đại học từ xa - Trường Đại học Kỹ thuật Công nghiệp Thái Nguyên',
  icons: {
    icon: 'favicon.ico',
  },
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
