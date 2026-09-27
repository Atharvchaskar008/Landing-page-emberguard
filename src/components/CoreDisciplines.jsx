import React, { useEffect, useRef } from 'react'
import { Bot, BookOpenCheck, ShieldAlert, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CoreDisciplines() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  const cards = [
    {
      number: '01',
      title: 'Autonomous Workforce',
      desc: 'Deploy specialized AI agents like Priya, Aman, and Vikram working 24/7. They actively monitor counter sales, guard against UPI fraud, and manage daily store operations with zero human fatigue.',
      icon: <Bot className="w-8 h-8 text-[var(--navy)]" />,
      pill: 'Real-time AI Agents',
    },
    {
      number: '02',
      title: 'Khata & Reconciliation',
      desc: 'Eliminate end-of-day ledger discrepancies with Munim. Automated daily book balancing, supplier payment tracking, and real-time cash-to-digital audits sync directly with Tally and GSTIN.',
      icon: <BookOpenCheck className="w-8 h-8 text-[var(--navy)]" />,
      pill: 'Zero Discrepancy',
    },
    {
      number: '03',
      title: 'Smart Procurement & Expiry',
      desc: 'Predictive inventory engine that tracks 420+ SKUs, halts dead stock, automates purchase orders, and alerts staff to perishable expiration before it damages your bottom line.',
      icon: <ShieldAlert className="w-8 h-8 text-[var(--navy)]" />,
      pill: 'Waste Minimization',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardElements = cardsRef.current.querySelectorAll('.discipline-card')
      gsap.fromTo(
        cardElements,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="w-full bg-[var(--canvas)] text-[var(--ink)] py-32 md:py-44 border-t border-[var(--line)] relative z-10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--sky)] opacity-[0.06] blur-[220px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
        <span className="text-xs font-mono text-[var(--navy)] uppercase tracking-[0.3em] mb-4 border border-[var(--navy)]/20 px-3.5 py-1 rounded-full bg-[var(--navy)]/5">
          Core Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-[var(--ink)] tracking-tight text-center mb-16">
          Architected for modern counter operations
        </h2>

        {/* 3 Grid Cards with LINE BORDER and ALWAYS VISIBLE TEXT */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="discipline-card group relative w-full min-h-[460px] md:h-[580px] rounded-3xl overflow-hidden border border-[var(--line)] hover:border-[var(--sky)]/60 bg-[var(--card)] transition-all duration-500 cursor-default p-8 md:p-10 flex flex-col justify-between shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_35px_rgba(0,41,112,0.1)] will-change-transform"
            >
              {/* Background sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)]/80 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Glowing hover accent */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--sky)] opacity-[0.04] group-hover:opacity-[0.14] blur-[100px] rounded-full transition-opacity duration-700 pointer-events-none z-0" />

              {/* Card Header */}
              <div className="relative z-20 flex justify-between items-start">
                <div className="font-serif text-6xl text-[var(--line)] group-hover:text-[var(--muted)]/40 transition-colors duration-500">
                  {card.number}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[var(--canvas)] border border-[var(--line)] flex items-center justify-center transform group-hover:scale-110 group-hover:border-[var(--sky)]/60 transition-all duration-500">
                  {card.icon}
                </div>
              </div>

              {/* Card Content - ALWAYS VISIBLE */}
              <div className="relative z-20 flex flex-col gap-4 mt-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--canvas)] border border-[var(--line)] w-fit text-xs font-mono text-[var(--navy)]">
                  <Sparkles className="w-3 h-3" />
                  {card.pill}
                </div>

                <h3 className="text-3xl lg:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight">
                  {card.title}
                </h3>

                <div className="w-full h-px bg-[var(--line)] transition-transform duration-500" />

                {/* Text is always visible */}
                <p className="text-sm md:text-base text-[var(--muted)] font-sans leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
