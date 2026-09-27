import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Manifesto() {
  const containerRef = useRef(null)
  const paragraphRef = useRef(null)

  const words = `We believe retail counter operations should not be trapped in manual registers and chaotic ledgers. We architect autonomous intelligent agents that run store operations.`.split(' ')

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wordElements = paragraphRef.current.querySelectorAll('.manifesto-word')
      gsap.to(wordElements, {
        color: 'rgba(15, 23, 42, 1)',
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
      className="w-full bg-[var(--canvas)] text-[var(--ink)] py-32 md:py-48 px-6 md:px-24 flex flex-col items-center justify-center border-t border-[var(--line)] relative"
    >
      <span className="text-xs font-mono text-[var(--navy)] uppercase tracking-[0.3em] mb-12 text-center border border-[var(--navy)]/20 px-4 py-1.5 rounded-full bg-[var(--navy)]/5">
        Autonomous Retail Manifesto
      </span>

      <p
        ref={paragraphRef}
        className="text-3xl md:text-5xl lg:text-6xl font-serif text-center max-w-5xl w-full flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-y-4"
      >
        {words.map((word, idx) => (
          <span
            key={idx}
            className="manifesto-word text-[var(--muted)]/20 transition-colors duration-300 pointer-events-none"
          >
            {word}
          </span>
        ))}
      </p>
    </section>
  )
}
