import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import PageWrapper from "@/components/page-wrapper";
import SideNav from "@/components/side-nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import 'react-tooltip/dist/react-tooltip.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bryan's Blog",
  description: "Blog about programming, web development, and other things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V5W0EHTHN3"></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V5W0EHTHN3');
          `}
        </Script>
      </head>
      <body className={ `bg-white ${inter.className}`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>
                {children}
              </PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
        </body>
    </html>
  );
}
