import React, { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

export default function StoreVoices() {
  const testimonials = [
    {
      text: 'With Priya and Aman monitoring our counters, we stopped UPI payment spoofing completely and saved 2 hours of manual reconciliation every single evening.',
      name: 'Ramesh Gupta',
      role: 'Proprietor, Ramesh Sweets & Restaurant',
    },
    {
      text: 'Vikram handles our procurement orders before we even notice stock is running low. It feels like having an experienced store manager on duty 24/7.',
      name: 'Sunil Verma',
      role: 'Managing Director, Verma Supermarket',
    },
    {
      text: 'Munim reconciled three months of pending vendor khata in minutes. Our accounts are balanced daily without manual data entry errors.',
      name: 'Deepak Sharma',
      role: 'Operations Head, Sharma Daily Mart',
    },
  ]

  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="w-full bg-[var(--canvas)] text-[var(--ink)] py-32 md:py-48 flex items-center justify-center relative overflow-hidden border-t border-[var(--line)]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[var(--sky)]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <span className="text-xs font-mono text-[var(--navy)] uppercase tracking-[0.3em] mb-12 border border-[var(--navy)]/20 px-3.5 py-1 rounded-full bg-[var(--navy)]/5">
          Store Owner Voices
        </span>

        {/* Quote Icon */}
        <Quote className="w-12 h-12 text-[var(--sky)]/60 mb-8" />

        {/* Testimonial Quote */}
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[var(--ink)] leading-[1.3] md:leading-[1.25] tracking-tight mb-12 min-h-[160px] md:min-h-[120px] flex items-center justify-center transition-all duration-500">
          "{testimonials[activeIdx].text}"
        </h3>

        {/* Author info */}
        <div className="flex flex-col items-center gap-1.5 transition-all duration-300">
          <h4 className="text-[var(--navy)] font-semibold text-base md:text-lg uppercase tracking-wider">
            {testimonials[activeIdx].name}
          </h4>
          <span className="text-sm font-sans text-[var(--muted)]">
            {testimonials[activeIdx].role}
          </span>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeIdx === idx ? 'w-8 bg-[var(--navy)]' : 'w-2.5 bg-[var(--line)] hover:bg-[var(--muted)]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
