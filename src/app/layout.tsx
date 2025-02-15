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
  title: "Co-ive | Sip, Savour, Repeat!",
  description:
    "Menemani setiap momenmu dengan rasa kopi yang unik dan tak terlupakan.",
  keywords: [
    "kopi",
    "coffee",
    "co-ive",
    "best coffee",
    "premium coffee",
    "coffee shop",
    "specialty coffee",
    "kopi enak",
    "kopi premium",
    "kopi terbaik",
  ],
  authors: [{ name: "Affan", url: "https://co-ive.com" }],
  openGraph: {
    title: "Co-ive | Sip, Savour, Repeat!",
    description:
      "Menemani setiap momenmu dengan rasa kopi yang unik dan tak terlupakan.",
    url: "https://co-ive.com",
    siteName: "Co-ive",
    images: [
      {
        url: "https://co-ive.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Co-ive Coffee",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@coivecoffee",
    creator: "@coivecoffee",
    title: "Co-ive | Sip, Savour, Repeat!",
    description:
      "Menemani setiap momenmu dengan rasa kopi yang unik dan tak terlupakan.",
    images: ["https://co-ive.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
