import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "台灣模組化建築公司 - 專業工地組合屋解決方案",
  description: "專業提供工地組合屋、臨時辦公室、員工宿舍等模組化建築解決方案。快速、安全、舒適的臨時建築空間，為營建業提供最佳選擇。",
  keywords: "工地組合屋,臨時辦公室,員工宿舍,模組化建築,組合屋,工程宿舍,臨時建築",
  authors: [{ name: "台灣模組化建築公司" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
