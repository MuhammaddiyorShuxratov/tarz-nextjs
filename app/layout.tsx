import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F2EEE5",
};

export const metadata: Metadata = {
  title: "Tarz",
  description:
    "Toshkentda ishonchli usta 2 soatda. Buyurtma qoldiring, tekshirilgan ustalar narx taklif qiladi, siz tanlaysiz.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "'Inter Tight',system-ui,sans-serif",
            color: "#14181F",
            background: "#F2EEE5",
          }}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
