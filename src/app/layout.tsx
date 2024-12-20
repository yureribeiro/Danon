import type { Metadata } from "next";
import { Inter, Jolly_Lodger } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mooLahLah = Jolly_Lodger({
  subsets: ["latin"],
  variable: '--font-mooLahLah',
  weight: ["400"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Danon meme",
  description: "Join the community that knows how to have fun while making history in the world of crypto! $danoncoin $DAN",
  keywords: ["danoncoin", "danon", "danon coin", "danon meme", "memecoin danon", "memecoin", "crypto danon", "DAN", "$DAN"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${mooLahLah.variable}`}>
        <Image
          src={'https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/06/bg-grid-hero-m.svg'}
          alt="lines"
          className={'backgroundLines'}
          quality={100}
          priority
          width={800}
          height={800}
          blurDataURL="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/06/bg-grid-hero-m.svg"
        />
        {children}
      </body>
    </html>
  );
}
