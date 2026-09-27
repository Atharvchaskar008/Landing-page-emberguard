import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import gsap from 'gsap'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerContainerRef = useRef(null)

  useEffect(() => {
    // GSAP Header expansion animation on mount
    gsap.fromTo(
      headerContainerRef.current,
      { width: '0px', opacity: 0 },
      {
        width: '100%',
        maxWidth: '896px',
        opacity: 1,
        duration: 1.2,
        ease: 'expo.inOut',
        delay: 0.2,
      }
    )

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Workforce', href: '#workforce' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Platform', href: '#manifesto' },
    { name: 'FAQ', href: '#faq' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const topOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl flex justify-center">
        <div
          ref={headerContainerRef}
          className={`bg-[#0A0A0A]/80 border border-white/15 h-[64px] px-6 rounded-full flex justify-between items-center backdrop-blur-2xl transition-colors duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden ${
            scrolled ? 'border-white/25 bg-[#0A0A0A]/95 shadow-[0_8px_32px_rgba(59,130,246,0.12)]' : ''
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="28" viewBox="0 0 135 28" role="img" aria-label="Cortex">
              <path d="M2 14 14 2l12 12-12 12L2 14Z" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
              <path d="M9 14h10M14 9v10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              <text x="36" y="20" fill="#FFFFFF" fontFamily="ui-sans-serif, sans-serif" fontSize="18" fontWeight="700" letterSpacing="3">CORTEX</text>
            </svg>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-7 text-sm font-medium text-white/70">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#3B82F6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:inline-flex items-center justify-center text-xs uppercase tracking-wider font-semibold bg-white text-black hover:bg-[#3B82F6] hover:text-white transition-all px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            >
              Launch App
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex justify-center items-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between px-8 pt-28 pb-10 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3B82F6] opacity-10 blur-[100px] rounded-full pointer-events-none" />

        <ul className="flex flex-col space-y-7 text-left relative z-10 my-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-3xl font-serif text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-6 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 text-xl font-sans text-[#3B82F6] hover:text-white transition-colors"
            >
              Launch Command Center <ArrowRight className="w-5 h-5" />
            </a>
          </li>
        </ul>

        <div className="flex flex-col gap-2 text-xs font-mono text-white/40 uppercase tracking-widest relative z-10">
          <span>Autonomous Store Intelligence</span>
          <span>Retail POS &amp; Webhooks</span>
        </div>
      </div>
    </>
  )
}
