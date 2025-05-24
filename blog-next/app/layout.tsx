import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denis's Blog",
  description: "Created by Denis Emelianov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar/>
      <MyProfilePic/>
      <body className="dark:bg-slate-800">{children}</body>
    </html>
  );
}
