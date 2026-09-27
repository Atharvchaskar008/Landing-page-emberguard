import React from 'react'
import { ArrowUpRight, ShieldCheck, Radio } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#050505] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Top CTA Row */}
      <div className="px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-28 gap-12">
        <h2 className="text-[11vw] md:text-[6.5vw] font-serif leading-[0.85] tracking-tighter mix-blend-difference z-10 w-full md:w-2/3">
          Ready to automate<br />
          <span className="italic text-white/40">your store?</span>
        </h2>

        <div className="w-full md:w-1/3 flex md:justify-end z-10">
          <a
            href="mailto:contact@cortexretail.ai"
            className="group relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-white text-black hover:scale-105 transition-all duration-500 cursor-pointer shadow-[0_0_50px_rgba(255,255,255,0.15)]"
          >
            <span className="absolute inset-0 bg-[#3B82F6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0" />
            <span className="font-sans font-medium text-lg relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
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
              <path d="M2 14 14 2l12 12-12 12L2 14Z" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
              <path d="M9 14h10M14 9v10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              <text x="36" y="20" fill="#FFFFFF" fontFamily="ui-sans-serif, sans-serif" fontSize="18" fontWeight="700" letterSpacing="3">CORTEX</text>
            </svg>
          </div>
          <p className="text-white/40 font-sans text-sm leading-relaxed max-w-xs">
            Autonomous store workforce &amp; command center built for retail counters, multi-branch stores, and restaurants.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2">Navigation</h4>
          <a href="#hero" className="text-white/60 hover:text-white font-sans text-sm transition-colors">Command Center</a>
          <a href="#workforce" className="text-white/60 hover:text-white font-sans text-sm transition-colors">Workforce Roster</a>
          <a href="#capabilities" className="text-white/60 hover:text-white font-sans text-sm transition-colors">Capabilities</a>
          <a href="#integrations" className="text-white/60 hover:text-white font-sans text-sm transition-colors">Integrations</a>
          <a href="#faq" className="text-white/60 hover:text-white font-sans text-sm transition-colors">FAQ</a>
        </div>

        {/* Hardware & Channels */}
        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2">Active Channels</h4>
          <div className="flex items-center gap-2 text-white/70 font-sans text-sm">
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
            <span>Paytm Soundbox (88%)</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 font-sans text-sm">
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Business API</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 font-sans text-sm">
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            <span>Telegram Channel Sync</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 font-sans text-sm">
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pine Labs Terminal Webhook</span>
          </div>
        </div>

        {/* Platform Architecture */}
        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2">Platform</h4>
          <div className="flex items-center gap-2 text-white font-serif text-base">
            <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
            <span>Enterprise Counter AI</span>
          </div>
          <p className="text-white/40 font-mono text-xs">Zero-Disruption Counter Architecture</p>
          <p className="text-white/50 font-sans text-xs mt-2">
            Base Endpoint: <code>localhost:3200/api/cortex</code>
          </p>
        </div>
      </div>

      {/* Clean Bottom Bar - removed Command Center v2.4 (React + Vite) and Soundbox & UPI Verified */}
      <div className="px-6 md:px-24 max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono tracking-wider relative z-10">
        <p className="text-white/40">
          © 2026 CORTEX Autonomous Retail Systems. All rights reserved.
        </p>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[350px] bg-[#3B82F6] opacity-[0.04] blur-[180px] pointer-events-none" />
    </footer>
  )
}
