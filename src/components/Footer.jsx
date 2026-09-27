import React from 'react'
import { ArrowUpRight, ShieldCheck, Radio } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[var(--card)] text-[var(--ink)] pt-32 pb-12 relative overflow-hidden border-t border-[var(--line)]">
      {/* Top CTA Row */}
      <div className="px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-28 gap-12">
        <h2 className="text-[11vw] md:text-[6.5vw] font-serif leading-[0.85] tracking-tighter text-[var(--ink)] z-10 w-full md:w-2/3">
          Ready to automate<br />
          <span className="italic text-[var(--muted)]">your store?</span>
        </h2>

        <div className="w-full md:w-1/3 flex md:justify-end z-10">
          <a
            href="mailto:contact@cortexretail.ai"
            className="group relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-[var(--sky)] text-white hover:scale-105 transition-all duration-500 cursor-pointer shadow-[0_10px_35px_rgba(0,186,242,0.35)]"
          >
            <span className="absolute inset-0 bg-[var(--navy)] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0" />
            <span className="font-sans font-medium text-lg relative z-10 text-white transition-colors duration-300 flex items-center gap-2">
              Launch App
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>

      {/* Grid columns */}
      <div className="px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24 z-10 relative">
        {/* Brand Col */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="28" viewBox="0 0 135 28" role="img" aria-label="Cortex">
              <path d="M2 14 14 2l12 12-12 12L2 14Z" fill="none" stroke="var(--sky)" strokeWidth="2.5" />
              <path d="M9 14h10M14 9v10" stroke="var(--navy)" strokeWidth="2.5" strokeLinecap="round" />
              <text x="36" y="20" fill="var(--navy)" fontFamily="ui-sans-serif, sans-serif" fontSize="18" fontWeight="700" letterSpacing="3">CORTEX</text>
            </svg>
          </div>
          <p className="text-[var(--muted)] font-sans text-sm leading-relaxed max-w-xs">
            Autonomous store workforce &amp; command center built for retail counters, multi-branch stores, and restaurants.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--navy)] mb-2">Navigation</h4>
          <a href="#hero" className="text-[var(--muted)] hover:text-[var(--ink)] font-sans text-sm transition-colors">Command Center</a>
          <a href="#workforce" className="text-[var(--muted)] hover:text-[var(--ink)] font-sans text-sm transition-colors">Workforce Roster</a>
          <a href="#capabilities" className="text-[var(--muted)] hover:text-[var(--ink)] font-sans text-sm transition-colors">Capabilities</a>
          <a href="#integrations" className="text-[var(--muted)] hover:text-[var(--ink)] font-sans text-sm transition-colors">Integrations</a>
          <a href="#faq" className="text-[var(--muted)] hover:text-[var(--ink)] font-sans text-sm transition-colors">FAQ</a>
        </div>

        {/* Hardware & Channels */}
        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--navy)] mb-2">Active Channels</h4>
          <div className="flex items-center gap-2 text-[var(--ink)]/80 font-sans text-sm">
            <Radio className="w-3.5 h-3.5 text-[var(--ok)]" />
            <span>Paytm Soundbox (88%)</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--ink)]/80 font-sans text-sm">
            <Radio className="w-3.5 h-3.5 text-[var(--ok)]" />
            <span>WhatsApp Business API</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--ink)]/80 font-sans text-sm">
            <Radio className="w-3.5 h-3.5 text-[var(--sky)]" />
            <span>Telegram Channel Sync</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--ink)]/80 font-sans text-sm">
            <Radio className="w-3.5 h-3.5 text-[var(--ok)]" />
            <span>Pine Labs Terminal Webhook</span>
          </div>
        </div>

        {/* Platform Architecture */}
        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--navy)] mb-2">Platform</h4>
          <div className="flex items-center gap-2 text-[var(--ink)] font-serif text-base">
            <ShieldCheck className="w-4 h-4 text-[var(--navy)]" />
            <span>Enterprise Counter AI</span>
          </div>
          <p className="text-[var(--muted)] font-mono text-xs">Zero-Disruption Counter Architecture</p>
          <p className="text-[var(--muted)] font-sans text-xs mt-2">
            Base Endpoint: <code className="bg-[var(--canvas)] text-[var(--navy)] px-1.5 py-0.5 rounded border border-[var(--line)]">localhost:3200/api/cortex</code>
          </p>
        </div>
      </div>

      {/* Clean Bottom Bar */}
      <div className="px-6 md:px-24 max-w-7xl mx-auto pt-8 border-t border-[var(--line)] flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono tracking-wider relative z-10">
        <p className="text-[var(--muted)]">
          © 2026 CORTEX Autonomous Retail Systems. All rights reserved.
        </p>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[350px] bg-[var(--sky)] opacity-[0.04] blur-[180px] pointer-events-none" />
    </footer>
  )
}
