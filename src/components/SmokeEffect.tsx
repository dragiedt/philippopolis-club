import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  life: number
  maxLife: number
}

export default function SmokeEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()

    const spawn = () => {
      if (particles.length >= 20) return
      const centerX = canvas.offsetWidth * 0.5
      particles.push({
        x: centerX + (Math.random() - 0.5) * 6,
        y: canvas.offsetHeight * 0.92,
        size: 12 + Math.random() * 10,
        speedX: (Math.random() - 0.5) * 0.06,
        speedY: -(0.5 + Math.random() * 0.3),
        opacity: 0,
        life: 0,
        maxLife: 180 + Math.random() * 120,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      if (Math.random() < 0.15) spawn()

      particles = particles.filter((p) => {
        p.life++
        p.x += p.speedX + Math.sin(p.life * 0.006) * 0.08
        p.y += p.speedY
        p.size += 0.15

        const progress = p.life / p.maxLife
        if (progress < 0.1) {
          p.opacity = progress / 0.1
        } else if (progress > 0.5) {
          p.opacity = 1 - (progress - 0.5) / 0.5
        } else {
          p.opacity = 1
        }
        p.opacity *= 0.06

        if (p.life >= p.maxLife) return false

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(160, 175, 200, ${p.opacity})`)
        gradient.addColorStop(0.4, `rgba(140, 155, 180, ${p.opacity * 0.5})`)
        gradient.addColorStop(1, `rgba(120, 135, 160, 0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        return true
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
