import NavBar from "@/components/ui/NavBar";
import MyContextProvider from "@/lib/providers/MyContextProvider";
import { NextUiProvider } from "@/lib/providers/NextUIProvider";
import ReduxStoreProvider from "@/redux/ReduxStoreProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gym Star",
  description:
    "Gym Star offers dynamic class scheduling, personalized training, and seamless membership management for fitness enthusiasts, trainers, and administrators alike. Book your favorite classes, manage your schedule, and stay on top of your fitness goals with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
        <ReduxStoreProvider>
          <NextUiProvider>
            <MyContextProvider>
              <div className="dark:bg-[#121212] relative ">
                <NavBar />
                {children}
              </div>
            </MyContextProvider>
          </NextUiProvider>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
