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
  swaySpeed: number
  swayOffset: number
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
      if (particles.length >= 18) return
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      // Spawn near bottom center-ish, slightly randomized
      const spawnX = width * 0.5 + (Math.random() - 0.5) * (width * 0.4)
      particles.push({
        x: spawnX,
        y: height + 20,
        size: 25 + Math.random() * 20,
        speedX: (Math.random() - 0.5) * 0.04,
        speedY: -(0.25 + Math.random() * 0.2),
        opacity: 0,
        life: 0,
        maxLife: 300 + Math.random() * 200,
        swaySpeed: 0.003 + Math.random() * 0.003,
        swayOffset: Math.random() * Math.PI * 2,
      })
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      if (Math.random() < 0.08) spawn()

      particles = particles.filter((p) => {
        p.life++
        p.x += p.speedX + Math.sin(p.life * p.swaySpeed + p.swayOffset) * 0.12
        p.y += p.speedY
        p.size += 0.18

        const progress = p.life / p.maxLife
        // Very smooth bell curve fade for delicate appearance
        if (progress < 0.2) {
          p.opacity = progress / 0.2
        } else if (progress > 0.6) {
          p.opacity = 1 - (progress - 0.6) / 0.4
        } else {
          p.opacity = 1
        }
        // Ultra subtle max opacity
        p.opacity *= 0.028

        if (p.life >= p.maxLife || p.y < -p.size) return false

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        // Soft warm wispy cigar smoke palette
        gradient.addColorStop(0, `rgba(225, 215, 195, ${p.opacity})`)
        gradient.addColorStop(0.35, `rgba(190, 185, 175, ${p.opacity * 0.6})`)
        gradient.addColorStop(0.7, `rgba(160, 155, 145, ${p.opacity * 0.2})`)
        gradient.addColorStop(1, `rgba(140, 135, 125, 0)`)

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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0"
      aria-hidden="true"
    />
  )
}
