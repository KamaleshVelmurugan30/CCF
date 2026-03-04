// import type { Metadata } from "next";
// import { Inter, Playfair_Display } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// export const metadata: Metadata = {
//     title: "The Chocolate Cake Factory | Premium Bakery in Chennai",
//     description: "Experience the luxury of premium chocolate and customized cakes at The Chocolate Cake Factory. Located in Ambattur and Kallikuppam.",
//     openGraph: {
//         title: "The Chocolate Cake Factory | Premium Bakery in Chennai",
//         description: "Experience the luxury of premium chocolate and customized cakes at The Chocolate Cake Factory.",
//         type: "website",
//     }
// };

// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="en" className="scroll-smooth">
//             <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-textDark`}>
//                 <Navbar />
//                 <main className="flex-grow">{children}</main>
//                 <Footer />
//             </body>
//         </html>
//     );
// }
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "The Chocolate Cake Factory | Premium Bakery in Chennai",
  description:
    "Experience the luxury of premium chocolate and customized cakes at The Chocolate Cake Factory. Located in Ambattur and Kallikuppam.",
  openGraph: {
    title: "The Chocolate Cake Factory | Premium Bakery in Chennai",
    description:
      "Experience the luxury of premium chocolate and customized cakes at The Chocolate Cake Factory.",
    type: "website",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-textDark`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}