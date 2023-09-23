import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Montserrat, Unica_One } from 'next/font/google';
import localFont from 'next/font/local';
import TanstackProvider from "./providers/TanstackProvider";

// const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({ subsets: ['latin'], variable: '--body-font' });

const unica_one = Unica_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--unica-font',
});

const clash = localFont({
  src: [
    {
      path: '../../public/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--heading-font',
});




export const metadata: Metadata = {
  title: "getlinked hackathon",
  description: "getlinked hackathon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"  className={`${montserrat.variable} ${clash.variable} ${unica_one.variable}`}>
      <TanstackProvider>
        <body className={`font-body bg-[#150E28]`}>{children}</body>
      </TanstackProvider>
    </html>
  );
}
