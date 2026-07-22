import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "HASSAN — Full Stack Developer & UI/UX Specialist",
  description: "Luxury, high-end portfolio of Hassan, Full Stack Developer & UI/UX Specialist crafting world-class digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="bg-[#F7F3EC] text-[#111111] font-sans antialiased selection:bg-[#D9A520] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
