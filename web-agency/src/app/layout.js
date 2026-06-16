import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Providers from "./Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://faroukbelaid09.github.io"),
  title: {
    default: "BrytLinks | Strategy, Design & Development",
    template: "%s | BrytLinks",
  },
  description:
    "BrytLinks builds premium websites, apps, and digital product experiences for ambitious brands.",
  alternates: {
    canonical: "/Brytlinks/",
  },
  openGraph: {
    title: "BrytLinks | Strategy, Design & Development",
    description:
      "Premium websites, apps, and digital product experiences for ambitious brands.",
    url: "/Brytlinks/",
    siteName: "BrytLinks",
    images: [
      {
        url: "/Brytlinks/logo-mark.png",
        width: 512,
        height: 512,
        alt: "BrytLinks logo mark",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrytLinks | Strategy, Design & Development",
    description:
      "Premium websites, apps, and digital product experiences for ambitious brands.",
    images: ["/Brytlinks/logo-mark.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
