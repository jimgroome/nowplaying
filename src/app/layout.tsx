import "@/app/globals.css";
import { Lato } from "next/font/google";
import type { Metadata, Viewport } from "next";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Now Playing",
  description: "Now playing on BBC radio stations",
  applicationName: "Now Playing",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Now Playing",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/images/icons/icon-128x128.png",
    apple: "/images/icons/icon-128x128.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2c3e50",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} min-h-screen bg-slate-100 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
