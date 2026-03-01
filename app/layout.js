import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "sonner";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MSME Coach | PX Consulting",
  description: "AI-powered business intelligence platform for MSMEs — assess, grow, and scale smarter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
        style={{ background: '#0A0A0F', color: '#F0F0FF' }}
      >
        <Header />
        <main className="min-h-screen">
          {children}
          <Toaster richColors />
        </main>

        {/* Footer */}
        <footer style={{ background: '#0d0d14', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo */}
              <div className="bg-white rounded-lg px-2 py-1">
                <Image
                  src="/PXC Logo.png"
                  alt="PX Consulting logo"
                  height={32}
                  width={110}
                  className="h-7 w-auto object-contain"
                />
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 text-sm text-white/40">
                <a href="/" className="hover:text-white/70 transition-colors">Privacy</a>
                <a href="/" className="hover:text-white/70 transition-colors">Terms</a>
                <a href="/" className="hover:text-white/70 transition-colors">Contact</a>
              </div>

              {/* Copyright */}
              <p className="text-sm text-white/30">
                © 2025 Perception Management Consulting Pvt. Ltd.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
