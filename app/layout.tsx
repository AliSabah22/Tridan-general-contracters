import type { Metadata } from "next";
import "./globals.css";
import StickyHeader from "@/components/StickyHeader";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Footer from "@/components/Footer";
import { getLocalBusinessSchemaScript } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Home Renovations Mississauga, Toronto, Milton`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Tridan General Construction provides professional home renovations in Mississauga, Toronto, and Milton. Kitchen, bathroom, basement, and full home renovations. Request a free estimate.",
  keywords: ["home renovations", "Mississauga", "Toronto", "Milton", "kitchen renovation", "bathroom renovation", "basement finishing"],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: SITE.name,
    title: `${SITE.name} | Home Renovations Mississauga, Toronto, Milton`,
    description: "Professional home renovations in Mississauga, Toronto, and Milton. Request a free estimate.",
    url: SITE.baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getLocalBusinessSchemaScript() }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <StickyHeader />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
