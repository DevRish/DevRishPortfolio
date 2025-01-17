import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Rishav Chattopadhyay | Portfolio",
  description: "Rishav Chattopadhyay | Portfolio",
  icons: {
    icon: '/laptop-code-solid.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
