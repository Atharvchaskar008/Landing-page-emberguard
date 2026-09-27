import React from 'react'
import {
  PaytmLogo,
  WhatsAppLogo,
  TelegramLogo,
  PhonePeLogo,
  RazorpayLogo,
  UpiLogo,
  ZohoLogo,
  PineLabsLogo,
  TallyLogo,
  GstinLogo,
} from './BrandLogos'

export default function IntegrationsMarquee() {
  const integrations = [
    { name: 'Paytm Soundbox', logo: <PaytmLogo className="w-16 h-8" />, detail: 'Hardware 88%' },
    { name: 'WhatsApp Business', logo: <WhatsAppLogo className="w-7 h-7" />, detail: 'Official API' },
    { name: 'Telegram Alerts', logo: <TelegramLogo className="w-7 h-7" />, detail: 'Instant Webhook' },
    { name: 'Pine Labs POS', logo: <PineLabsLogo className="w-24 h-7" />, detail: 'Terminal Sync' },
    { name: 'UPI Gateway', logo: <UpiLogo className="w-20 h-7" />, detail: 'NPCI Direct' },
    { name: 'GSTIN Portal', logo: <GstinLogo className="w-8 h-8" />, detail: 'Auto Compliance' },
    { name: 'Tally Prime', logo: <TallyLogo className="w-16 h-7" />, detail: 'Khata Export' },
    { name: 'Zoho Books', logo: <ZohoLogo className="w-8 h-8" />, detail: 'Ledger Cloud' },
    { name: 'PhonePe Merchant', logo: <PhonePeLogo className="w-7 h-7" />, detail: 'Soundbox Audio' },
    { name: 'Razorpay POS', logo: <RazorpayLogo className="w-7 h-7" />, detail: 'Counter Terminal' },
  ]

  // Double list for infinite seamless marquee loop
  const marqueeItems = [...integrations, ...integrations]

  return (
    <section id="integrations" className="w-full bg-[#050505] py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 relative">
      {/* Side gradient edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Header stated clearly above our integrations */}
      <div className="flex flex-col items-center text-center px-4 mb-16 relative z-20">
        <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-[0.3em] mb-4 border border-[#3B82F6]/30 px-3.5 py-1 rounded-full bg-[#3B82F6]/5">
          Our Integrations
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Connected with essential retail rails &amp; channels
        </h2>
        <p className="text-sm md:text-base text-white/50 font-sans mt-3 max-w-xl">
          Cortex links directly into your existing hardware soundboxes, messaging channels, and payment terminals without replacing your counter setup.
        </p>
      </div>

      {/* Continuous moving marquee with real official logos */}
      <div className="flex overflow-hidden w-full relative z-0 py-2">
        <div className="flex gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-fit">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0A0A0A] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group cursor-default"
            >
              <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {item.logo}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base md:text-lg font-serif text-white/90 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
