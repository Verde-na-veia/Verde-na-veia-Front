import type { Metadata } from "next";
import { Inter, Roboto} from "next/font/google";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const robotoMedium = Roboto({ weight: "500", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Via verde",
  description: "Em busca de um futuro mais verde",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${inter.className} ${roboto.className} ${robotoMedium.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
