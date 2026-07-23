import { useEffect, useRef, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  triggerChild?: boolean
}

const directionStyles = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: '',
}

export default function FadeIn({ children, className = '', delay = 0, direction = 'up', triggerChild = false }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('opacity-100', 'translate-x-0', 'translate-y-0')
          el.classList.remove('opacity-0', ...directionStyles[direction].split(' ').filter(Boolean))
          if (triggerChild) {
            const img = el.querySelector('[data-banner]')
            if (img) img.classList.add('banner-visible')
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction, triggerChild])

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-all duration-700 ease-out ${directionStyles[direction] ? directionStyles[direction].split(' ')[0] : ''} ${directionStyles[direction] ? directionStyles[direction].split(' ')[1] || '' : ''} ${className}`}
    >
      {children}
    </div>
  )
}