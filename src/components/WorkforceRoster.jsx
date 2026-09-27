import React, { useEffect, useRef } from 'react'
import { PlusCircle, Activity, ShieldCheck, Boxes, BookOpenCheck, Users, Clock, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WorkforceRoster() {
  const containerRef = useRef(null)
  const rosterRef = useRef(null)

  const agents = [
    {
      id: '01',
      icon: <Activity className="w-6 h-6 text-[#3B82F6]" />,
      name: 'Priya',
      role: 'Revenue Guardian',
      mission: 'Real-time sales anomaly detection, counter revenue spikes, and automated channel telemetry.',
      channel: 'Soundbox + WhatsApp',
      metric: '₹14,800',
      metricSub: 'Weekly Sales Monitored',
    },
    {
      id: '02',
      icon: <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />,
      name: 'Aman',
      role: 'Payment Shield',
      mission: 'Live UPI webhook verification, fake payment screenshot interception, and instant audio hold alarms.',
      channel: 'Soundbox Audio Ping',
      metric: '18 Holds',
      metricSub: 'Fraud Intercepted',
    },
    {
      id: '03',
      icon: <Boxes className="w-6 h-6 text-[#3B82F6]" />,
      name: 'Vikram',
      role: 'Procurement AI',
      mission: 'Predictive stock replenishment, vendor rate comparison, and automated purchase orders.',
      channel: 'Vendor WhatsApp',
      metric: '2 SKUs',
      metricSub: 'Purchase Orders Pending',
    },
    {
      id: '04',
      icon: <BookOpenCheck className="w-6 h-6 text-[#3B82F6]" />,
      name: 'Munim',
      role: 'Khata & Accounts',
      mission: 'Daily cash-to-digital ledger reconciliation, supplier balance tracking, and GST calendar compliance.',
      channel: 'Tally / Zoho Sync',
      metric: '₹9,200',
      metricSub: 'Monthly Ledger Balanced',
    },
    {
      id: '05',
      icon: <Users className="w-6 h-6 text-[#3B82F6]" />,
      name: 'Meera',
      role: 'Staff & Shifts',
      mission: 'Biometric shift verification, counter cashier allocation, and overtime calculation.',
      channel: 'Telegram Shifts',
      metric: '5 / 6 Staff',
      metricSub: 'Counter Shift Coverage',
    },
    {
      id: '06',
      icon: <Clock className="w-6 h-6 text-[#3B82F6]" />,
      name: 'Expiry Guardian',
      role: 'Inventory Shelf-Life',
      mission: 'Batch expiry tracking, dynamic discount triggers, and zero-waste perishable stock management.',
      channel: 'Daily Store Report',
      metric: '420 SKUs',
      metricSub: 'Items Monitored',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = rosterRef.current.querySelectorAll('.roster-item')
      gsap.fromTo(
        items,
        { y: 35, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rosterRef.current,
            start: 'top 80%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="workforce"
      className="w-full bg-[#050505] text-white py-32 border-t border-white/10 min-h-screen"
    >
      {/* Section Header */}
      <div className="px-6 md:px-24 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-[0.3em] mb-4 inline-block border border-[#3B82F6]/30 px-3.5 py-1 rounded-full bg-[#3B82F6]/5">
            Store Command Center
          </span>
          <h2 className="text-5xl md:text-8xl font-serif tracking-tight mt-2">
            Active Store<br />
            <span className="italic text-white/40">Workforce.</span>
          </h2>
        </div>
        <p className="text-white/60 font-sans max-w-md text-base md:text-lg leading-relaxed">
          Autonomous specialized agents executing store operations in real-time. Continuous counter telemetry, audio pings, and automated task execution.
        </p>
      </div>

      {/* Workforce Roster - Clean, cohesive card-like SVGs, no emojis, no status tags */}
      <div ref={rosterRef} className="px-6 md:px-24 max-w-7xl mx-auto flex flex-col gap-4">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="roster-item group relative rounded-2xl bg-[#0A0A0A] border border-white/15 hover:border-white/40 p-6 md:p-8 transition-all duration-300 hover:bg-[#0E0E0E] shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.1)] flex flex-col lg:flex-row lg:items-center justify-between gap-6 overflow-hidden will-change-transform cursor-default"
          >
            {/* Subtle blue accent hover line */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3B82F6] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            {/* Left Column: ID + Matching Card SVG Container + Name + Role */}
            <div className="flex items-center gap-5 md:gap-6 min-w-[280px]">
              <span className="text-xs font-mono text-white/30 group-hover:text-white/70 transition-colors w-6">
                {agent.id}
              </span>
              <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-[#3B82F6]/60 transition-all duration-300 shadow-inner">
                {agent.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-[#3B82F6] transition-colors">
                  {agent.name}
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                  {agent.role}
                </span>
              </div>
            </div>

            {/* Center Column: Clean description & Channel */}
            <div className="flex-1 flex flex-col gap-1.5 max-w-xl">
              <p className="text-sm md:text-base text-white/70 font-sans leading-relaxed">
                {agent.mission}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                <span className="text-[#3B82F6]">●</span>
                <span>Channel: {agent.channel}</span>
              </div>
            </div>

            {/* Right Column: Clean Telemetry Metric */}
            <div className="flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t border-white/5 lg:border-t-0">
              <div className="flex flex-col text-left lg:text-right">
                <span className="text-xl md:text-2xl font-serif text-white font-medium group-hover:text-white transition-colors">
                  {agent.metric}
                </span>
                <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                  {agent.metricSub}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Studio Hire CTA Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 font-sans text-sm font-medium inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          >
            <PlusCircle className="w-4 h-4" />
            + Hire New Custom Agent (Studio)
          </a>
        </div>
      </div>
    </section>
  )
}
