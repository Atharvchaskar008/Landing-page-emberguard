import React, { useState } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: 'How does Cortex connect with our billing counter and Soundbox?',
      a: 'Cortex connects seamlessly via local network and cloud webhooks directly with your Paytm or PhonePe soundbox hardware, billing desktop, and WhatsApp business channels. Setup takes less than 15 minutes with zero disruption to daily sales.',
    },
    {
      q: 'Can Cortex prevent fake UPI screenshot fraud?',
      a: 'Yes. Aman monitors live bank and soundbox webhooks. If a customer displays an altered or fake UPI payment screenshot without an authorized confirmation ping from the bank gateway, Cortex immediately triggers an audio alert on the soundbox and alerts the cashier.',
    },
    {
      q: 'How do the autonomous agents communicate with store managers?',
      a: 'All agents deliver instant high-priority alerts and daily summary reports directly to your preferred channels—WhatsApp, Telegram, or the central Cortex Command Center desktop app.',
    },
    {
      q: 'Can we customize or hire new AI agents for our specific business?',
      a: 'Yes. Through the Cortex Studio (/custom-agents), you can configure and hire custom agents tailored to your recipes, supplier rules, employee shifts, or custom inventory policies.',
    },
  ]

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="w-full bg-[#050505] text-white py-32 border-t border-white/10 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10">
        {/* Left Column */}
        <div className="w-full md:w-1/3">
          <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-[0.3em] mb-4 inline-block border border-[#3B82F6]/30 px-3.5 py-1 rounded-full bg-[#3B82F6]/5">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Frequently<br />
            <span className="italic text-white/40">Asked.</span>
          </h2>
          <p className="text-white/50 mt-6 font-sans font-light leading-relaxed">
            Answers regarding Cortex deployment, soundbox hardware integration, UPI fraud prevention, and multi-store operations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 text-sm font-mono text-white/80 uppercase hover:text-white transition-colors group"
          >
            Deploy on Your Counters
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Column: Accordion */}
        <div className="w-full md:w-2/3 flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="w-full border-b border-white/10 py-7 text-left flex flex-col cursor-pointer transition-colors"
                onClick={() => toggle(idx)}
              >
                <div className="w-full flex justify-between items-center gap-4 group">
                  <span className="text-xl md:text-2xl font-serif text-white/80 group-hover:text-white transition-colors duration-300">
                    {faq.q}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/20 transition-all duration-300">
                    {isOpen ? <Minus className="w-4 h-4 text-[#3B82F6]" /> : <Plus className="w-4 h-4 text-white" />}
                  </div>
                </div>

                {isOpen && (
                  <div className="pt-5 text-base md:text-lg text-white/60 font-sans font-light leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
