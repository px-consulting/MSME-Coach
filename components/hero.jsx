"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageEl = imageRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageEl.classList.add("scrolled");
          observer.unobserve(imageEl);
        }
      },
      { threshold: 0.2 }
    );
    if (imageEl) observer.observe(imageEl);
    return () => { if (imageEl) observer.unobserve(imageEl); };
  }, []);

  return (
    <div className="relative overflow-hidden pb-24 pt-8 px-4">
      {/* Animated dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Radial glow behind headline */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto text-center relative z-10 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300 mb-2">
          <Sparkles className="h-3.5 w-3.5" />
          AI-Powered Business Intelligence Platform
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-tight leading-[1.05] text-white max-w-5xl mx-auto">
          Guiding Businesses{" "}
          <br className="hidden md:block" />
          from{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Potential
          </span>{" "}
          to{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 text-transparent bg-clip-text">
            Performance
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
          An AI-powered platform that helps MSMEs assess their business maturity
          and uncover real-time insights to drive smarter growth.
        </p>

        {/* CTA buttons */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white border-0 px-7 h-12 text-base cursor-pointer gap-2 shadow-lg shadow-violet-900/40"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href="https://pxconsulting.in/contact-pxc/" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-white/15 text-white/80 hover:bg-white/[0.06] hover:text-white px-7 h-12 text-base cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              Book a Consultation
            </Button>
          </a>
        </div>

        {/* Social proof */}
        <p className="text-white/30 text-sm">
          Trusted by <span className="text-white/60 font-medium">15,000+</span> businesses across{" "}
          <span className="text-white/60 font-medium">200+</span> industries
        </p>

        {/* Hero image */}
        <div className="hero-image-wrapper mt-16">
          <div ref={imageRef} className="hero-image relative">
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-violet-600/10 blur-3xl rounded-3xl" />
            <Image
              src="/banner-2.jpg"
              width={1180}
              height={520}
              alt="MSME Coach Platform Preview"
              className="rounded-2xl mx-auto relative z-10 glow-card"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
