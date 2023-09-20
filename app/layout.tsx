import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jenna | Personal Portfolio",
  description:
    "Jenna is a front-end developer and UX designer based in the Bay Area.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28
      sm:pt-36`}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-0 h-[31.25vw] w-full
        rounded-full blur-[10rem] sm:right-[11vw] sm:w-[68.75vw]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-0 h-[50vw] w-full 
        rounded-full blur-[10rem]  sm:left-[35vw] sm:w-[68.75vw] md:left-[-33vw] lg:left-[-28vw] xl:left-[-15vw] 2xl:left-[-5vw]"
        ></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
