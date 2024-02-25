import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/ui/navigation";

import { fetchData } from '@/components/lib/utils';

import snap from '@/assets/logo.svg';
import menuOpen from '@/assets/icon-menu.svg';

const epilogue = Epilogue({ 
  subsets: ["latin"],
  weight: ['500', '700'] 
});

const data = (await fetchData()).menuDropdown;
console.log(data)

export const metadata: Metadata = {
  title: "Intro section with dropdown navigation",
  description: "A UI challenge from Frontendmentor.io",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Nav 
          logo={snap}
          hamicon={menuOpen}
          menuGroup={data.menuGroup}
          otherItems={data.otherItems}
          cta={data.cta}
        />
        {children}
        </body>
    </html>
  );
}
