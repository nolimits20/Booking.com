import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

const kanit = Kanit({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata = {
  title: "Booking.com | Clone site",
  description: "Booking.com | Clone site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${kanit.className}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
