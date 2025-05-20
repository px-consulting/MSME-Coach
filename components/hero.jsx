"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRef, useEffect } from "react";
const HeroSection = () => {

  const imageRef = useRef(null);

  useEffect(() => {
    const imageEl = imageRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageEl.classList.add("scrolled");
          observer.unobserve(imageEl); // Animate only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of image is visible
    );
    if (imageEl) {
      observer.observe(imageEl);
    }
    return () => {
      if (imageEl) observer.unobserve(imageEl);
    };
  }, []);

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">Guiding Businesses from Potential <br /> to <span className="highlight-performance">Performance</span></h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {" "}
          An AI-powered platform that helps MSMEs assess their business maturity and uncover real-time insights to drive smarter growth.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 cursor-pointer">Get Started</Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8 cursor-pointer">Watch Demo</Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-20">
          <div ref={imageRef} className="hero-image">
            <Image src="/banner-2.jpg"
              width={1180}
              height={520}
              alt="coach Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection