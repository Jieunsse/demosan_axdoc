import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "axdoc",
  description: "HR 셀프서비스 포털",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="axdoc">{children}</body>
    </html>
  );
}
