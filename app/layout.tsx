import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider"
//import { ModeToggle } from "./components/Button"
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
   subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Datasistemas Páginas Web - Plataforma Educativa",
  description: "Plataforma educativa moderna con recursos, diplomas y datos institucionales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
           

           <Header />
           {/* <ModeToggle />*/}
          <main className="min-h-screen">
            {children}
          </main>
          <ScrollToTop/>
          <Footer />
        </ThemeProvider>
        
      </body>
    </html>
  );
}
