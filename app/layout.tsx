import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "../public/fonts/MontserratVF.woff",
});

export const metadata: Metadata = {
  title: "Kaidan",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${montserrat.className} antialiased w-auto h-screen bg-background`}
      >
      {children}
      </body>
      </html>
  );
}
