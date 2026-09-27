import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

    const cursor = cursorRef.current
    if (!cursor) return

    gsap.set(cursor, { xPercent: -50, yPercent: -50, autoAlpha: 0 })

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3' })

    let isVisible = false
    const handleMouseMove = (e) => {
      if (!isVisible) {
        isVisible = true
        gsap.to(cursor, { autoAlpha: 1, duration: 0.3 })
      }
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 3.5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        duration: 0.3,
        ease: 'expo.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#ffffff',
        border: '0px solid transparent',
        duration: 0.3,
        ease: 'expo.out',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input').forEach((el) => {
        if (!el.dataset.cursorBound) {
          el.addEventListener('mouseenter', handleMouseEnter)
          el.addEventListener('mouseleave', handleMouseLeave)
          el.dataset.cursorBound = 'true'
        }
      })
    }

    attachListeners()
    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
      document.querySelectorAll('a, button, [role="button"], input').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-white mix-blend-difference rounded-full pointer-events-none z-[999] opacity-0 invisible transform-gpu"
    />
  )
}
