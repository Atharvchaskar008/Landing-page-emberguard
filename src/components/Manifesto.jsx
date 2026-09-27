import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Manifesto() {
  const containerRef = useRef(null)
  const paragraphRef = useRef(null)

  const words = `We believe retail counter operations should not be trapped in manual registers and chaotic ledgers. We architect autonomous intelligent agents that run store operations seamlessly in real-time, uniting hardware soundboxes, instant UPI verification, predictive procurement, and automated financial reconciliation.`.split(' ')

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wordElements = paragraphRef.current.querySelectorAll('.manifesto-word')
      gsap.to(wordElements, {
        color: 'rgba(255, 255, 255, 1)',
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: 1,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="manifesto"
      className="w-full bg-[#050505] text-white py-32 md:py-48 px-6 md:px-24 flex flex-col items-center justify-center border-t border-white/5 relative"
    >
      <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-[0.3em] mb-12 text-center border border-[#3B82F6]/30 px-4 py-1.5 rounded-full bg-[#3B82F6]/5">
        Autonomous Retail Manifesto
      </span>

      <p
        ref={paragraphRef}
        className="text-3xl md:text-5xl lg:text-6xl font-serif text-center max-w-5xl w-full flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-y-4"
      >
        {words.map((word, idx) => (
          <span
            key={idx}
            className="manifesto-word text-white/10 transition-colors duration-300 pointer-events-none"
          >
            {word}
          </span>
        ))}
      </p>
    </section>
  )
}
