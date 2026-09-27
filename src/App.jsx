import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from './components/Header'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import IntegrationsMarquee from './components/IntegrationsMarquee'
import CoreDisciplines from './components/CoreDisciplines'
import WorkforceRoster from './components/WorkforceRoster'
import StoreVoices from './components/StoreVoices'
import StoreCounters from './components/StoreCounters'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth inertial scrolling (identical to original website)
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCallback = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-[#3B82F6] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Custom Interactive Magnetic Cursor */}
      <CustomCursor />

      {/* Floating Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Philosophy / Manifesto with Word-by-Word Scroll Illumination */}
        <Manifesto />

        {/* Moving Integrations Marquee with Real Official Logos */}
        <IntegrationsMarquee />

        {/* 3 Core Architecture Disciplines (White Borders + Always Visible Text + GSAP Stagger) */}
        <CoreDisciplines />

        {/* Active Store Workforce Roster (Clean icon placing & telemetry stats) */}
        <WorkforceRoster />

        {/* Store Voices Testimonials Carousel */}
        <StoreVoices />

        {/* Telemetry Stats & GSAP Animated Counters */}
        <StoreCounters />

        {/* Expandable Accordion FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
