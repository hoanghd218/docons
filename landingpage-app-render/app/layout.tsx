import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DOCONS - Công Ty Giải Pháp Xây Dựng",
  description: "Công Ty TNHH Giải Pháp Xây Dựng DOCONS - Sẻ Chia Giá Trị, Kiến Tạo Tương Lai. Chuyên thiết kế và thi công xây dựng chất lượng cao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${lexend.variable} ${sourceSans.variable} antialiased bg-slate-50 text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
