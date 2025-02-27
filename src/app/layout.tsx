import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CO-IVE | Sip, Savour, Repeat!",
  description:
    "Menemani setiap momenmu dengan rasa kopi premium yang khas, menghadirkan pengalaman tak terlupakan di setiap tegukan.",
  keywords: [
    "kopi",
    "coffee",
    "coffive",
    "co-ive",
    "best coffee",
    "premium coffee",
    "coffee shop",
    "specialty coffee",
    "kopi enak",
    "kopi premium",
    "kopi terbaik",
    "kopi lokal",
    "cafe terbaik",
    "coffee lovers",
    "kopi berkualitas",
    "kopi segar",
  ],
  authors: [{ name: "PT. FIVELICIOUS", url: "https://co-ive.vercel.app" }],
  openGraph: {
    title: "CO-IVE | Sip, Savour, Repeat!",
    description:
      "Menemani setiap momenmu dengan rasa kopi premium yang khas, menghadirkan pengalaman tak terlupakan di setiap tegukan.",
    url: "https://co-ive.vercel.app",
    siteName: "CO-IVE",
    images: [
      {
        url: "https://co-ive.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Co-IVE Coffee - Premium & Specialty Coffee",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "tfvypuxG6Kzvi1hj_H6r7NFqzA_eun06kzTmJsEAPs4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 fixed">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
              </div>
            </header>
            <main className="container py-16">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
