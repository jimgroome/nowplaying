import "@/app/globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
