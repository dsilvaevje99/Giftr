import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Giftr",
  description: "A gift recommender for all occasions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-3">
          <p>Menu</p>
          <h1>Logo</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
