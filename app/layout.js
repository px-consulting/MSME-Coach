import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Msme Coach",
  description: "One stop business solutions for msmes",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <Header />
          <main className="min-h-screen">
            {children}
            <Toaster richColors />
          </main>
          <footer className="bg-blue-50 py-4 md:py-6">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p className="text-sm">© 2025 Perception Management Consulting Pvt. Ltd.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
