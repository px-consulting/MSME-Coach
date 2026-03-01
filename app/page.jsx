import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#0A0A0F', color: '#F0F0FF' }}
    >
      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Hero */}
      <HeroSection />

      {/* Stats */}
      <section className="py-20 border-y linear-grid-bg" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-white/60 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase">Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Everything you need to grow your business
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              A complete toolkit for MSME growth — from diagnostics to expert guidance.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="gradient-border-card rounded-xl p-6 space-y-4"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/15 flex items-center justify-center">
                  <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-violet-400">
                    {feature.icon}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold">{feature.title}</h3>
                    {!feature.isLive && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/20">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 linear-grid-bg" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Get from sign-up to actionable insights in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksData.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < howItWorksData.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(50%+28px)] right-0 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
                )}
                <div className="gradient-border-card rounded-xl p-6 space-y-4">
                  <div className="w-10 h-10 rounded-full bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                    <span className="text-violet-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{step.title.replace(/^\d+\.\s/, '')}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              What our users say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="gradient-border-card rounded-xl p-6 space-y-5">
                <Quote className="h-5 w-5 text-violet-500/60" />
                <p className="text-white/60 text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                    <div className="text-white/40 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div
            className="rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a0a2e 0%, #0d0d1f 50%, #0a1628 100%)',
              border: '1px solid rgba(139,92,246,0.2)',
              boxShadow: '0 0 80px rgba(139,92,246,0.12), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.25) 0%, transparent 60%)',
              }}
            />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready to accelerate your business?
              </h2>
              <p className="text-white/50 text-lg">
                Join thousands of MSMEs already scaling smarter with AI-powered insights and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-violet-600 hover:bg-violet-700 text-white border-0 px-8 h-12 text-base cursor-pointer gap-2 shadow-lg shadow-violet-900/40"
                  >
                    Start for Free
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://pxconsulting.in/contact-pxc/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/15 text-white/80 hover:bg-white/[0.06] hover:text-white px-8 h-12 text-base cursor-pointer"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    Book a Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
