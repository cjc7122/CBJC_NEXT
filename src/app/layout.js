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

export const metadata = {
  title: {
    default: "Cain, Bourret, Jarry & Cressman LLC | CPA Firm | Dracut, MA",
    template: "%s | Cain, Bourret, Jarry & Cressman LLC",
  },
  description:
    "Cain, Bourret, Jarry & Cressman LLC is a full-service CPA firm in Dracut, MA serving individuals and businesses throughout the Merrimack Valley with tax planning, accounting, audit, payroll, and advisory services.",
  keywords: [
    "CPA Dracut MA",
    "accountant Dracut Massachusetts",
    "tax preparation Merrimack Valley",
    "tax planning Lowell MA",
    "small business accounting Massachusetts",
    "IRS representation Massachusetts",
    "audit services Massachusetts",
    "payroll services Dracut",
    "Cain Bourret Jarry Cressman",
  ],
  authors: [{ name: "Cain, Bourret, Jarry & Cressman LLC" }],
  creator: "Cain, Bourret, Jarry & Cressman LLC",
  metadataBase: new URL("https://cbjv.com"),
  alternates: {
    canonical: "https://cbjv.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cbjv.com",
    siteName: "Cain, Bourret, Jarry & Cressman LLC",
    title: "Cain, Bourret, Jarry & Cressman LLC | CPA Firm | Dracut, MA",
    description:
      "Full-service CPA firm in Dracut, MA. Tax planning, accounting, audit, payroll, and advisory services for individuals and businesses in the Merrimack Valley.",
    images: [
      {
        url: "/CBJC_Logo.png",
        width: 400,
        height: 400,
        alt: "Cain, Bourret, Jarry & Cressman LLC Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
