import React, { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const descRef = useRef(null)
  const btnsRef = useRef(null)
  const bgGlowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background entrance
      gsap.fromTo(
        bgGlowRef.current,
        { autoAlpha: 0, scale: 1.05 },
        { autoAlpha: 0.6, scale: 1, duration: 2.5, ease: 'power2.out' }
      )

      // Text stagger reveal
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo(
        [line1Ref.current, line2Ref.current],
        { yPercent: 120, rotateZ: 2 },
        { yPercent: 0, rotateZ: 0, duration: 1.4, stagger: 0.1, ease: 'expo.out' }
      )
        .fromTo(
          descRef.current,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.2, ease: 'power3.out' },
          '-=1.0'
        )
        .fromTo(
          btnsRef.current,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.2, ease: 'power3.out' },
          '-=1.0'
        )

      // Mouse Parallax (matching original index.html)
      const handleMouseMove = (e) => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 20
        const ny = (e.clientY / window.innerHeight - 0.5) * 20
        gsap.to(bgGlowRef.current, {
          x: nx * -1,
          y: ny * -1,
          duration: 2,
          ease: 'power2.out',
        })
        gsap.to([line1Ref.current, line2Ref.current], {
          x: nx,
          y: ny,
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.01,
        })
      }

      if (window.innerWidth > 768) {
        window.addEventListener('mousemove', handleMouseMove)
      }

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center pt-28 pb-16 px-4"
    >
      {/* Background ambient lighting & parallax field */}
      <div
        ref={bgGlowRef}
        className="absolute -inset-12 z-0 pointer-events-none hero-field"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--canvas)]/40 via-[var(--canvas)]/10 to-[var(--canvas)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,186,242,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--sky)]/10 blur-[160px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center max-w-6xl mx-auto">
        {/* Main Heading with Stagger Animation */}
        <h1 className="text-[14vw] md:text-[7.5vw] font-serif leading-[0.9] tracking-tight text-[var(--ink)] max-w-[95vw] md:max-w-6xl mx-auto flex flex-col items-center mb-6">
          <div className="overflow-hidden pb-4 -mb-4">
            <div ref={line1Ref} className="will-change-transform pt-4">
              We automate
            </div>
          </div>
          <div className="overflow-hidden pb-6 -mb-6">
            <div
              ref={line2Ref}
              className="will-change-transform pt-4 flex items-center justify-center md:gap-6"
            >
              <span className="italic text-[var(--muted)] mr-3 md:mr-6 font-serif">
                retail
              </span>{' '}
              operations.
            </div>
          </div>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="text-lg md:text-2xl text-[var(--muted)] max-w-3xl mt-8 font-sans font-light leading-relaxed px-4 will-change-transform"
        >
          Pushing the boundaries of autonomous retail intelligence. Deploy 24/7 AI agents for real-time sales monitoring, UPI fraud protection, and instant khata reconciliation for ambitious stores and restaurants.
        </p>

        {/* Action Button: Single White Launch App Button */}
        <div
          ref={btnsRef}
          className="mt-10 flex items-center justify-center z-20 will-change-transform"
        >
          <a
            href="#contact"
            className="px-9 py-4 bg-white text-[var(--ink)] border border-[var(--line)] rounded-full font-sans font-medium hover:border-[var(--sky)] hover:text-[var(--navy)] hover:shadow-md transition-all duration-300 cursor-pointer shadow-sm inline-flex items-center gap-2.5 group"
          >
            Launch App
            <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--navy)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </section>
  )
}
