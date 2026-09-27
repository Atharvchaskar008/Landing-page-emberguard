import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StoreCounters() {
  const containerRef = useRef(null)

  const metrics = [
    {
      limit: 15,
      prefix: '₹',
      suffix: 'k+',
      label: 'Weekly Revenue Protected',
      detail: 'Live anomaly threshold',
    },
    {
      limit: 420,
      prefix: '',
      suffix: '+',
      label: 'Active SKUs Tracked',
      detail: 'Inventory & expiration',
    },
    {
      limit: 100,
      prefix: '',
      suffix: '%',
      label: 'Daily Auto-Reconciliation',
      detail: 'Zero manual ledger errors',
    },
    {
      limit: 6,
      prefix: '',
      suffix: '',
      label: 'Autonomous Store Agents',
      detail: 'Running on counter laptop',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = containerRef.current.querySelectorAll('.counter-val')
      counters.forEach((el, idx) => {
        const target = metrics[idx].limit
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
          onUpdate: () => {
            el.innerText = Math.ceil(obj.val)
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#050505] text-white py-24 md:py-32 border-t border-white/5 border-b border-b-white/5 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 text-left md:text-center">
        {metrics.map((m, idx) => (
          <div key={idx} className="flex flex-col gap-2 md:items-center group">
            <h4 className="text-4xl md:text-6xl font-serif tracking-tight text-white mb-1 flex items-baseline md:justify-center">
              {m.prefix && <span className="text-white/40 text-3xl md:text-5xl mr-1">{m.prefix}</span>}
              <span className="counter-val text-[#3B82F6]">0</span>
              {m.suffix && <span className="text-white/60 text-2xl md:text-4xl ml-1">{m.suffix}</span>}
            </h4>
            <p className="text-xs md:text-sm font-mono text-white/80 uppercase tracking-widest">
              {m.label}
            </p>
            <span className="text-xs font-sans text-white/40">
              {m.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
