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
    const maxParticles = 60

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()

    const spawn = () => {
      if (particles.length >= maxParticles) return
      particles.push({
        x: canvas.offsetWidth * 0.3 + Math.random() * canvas.offsetWidth * 0.4,
        y: canvas.offsetHeight + 10,
        size: 20 + Math.random() * 40,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -(0.3 + Math.random() * 0.5),
        opacity: 0,
        life: 0,
        maxLife: 300 + Math.random() * 200,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      if (Math.random() < 0.15) spawn()

      particles = particles.filter((p) => {
        p.life++
        p.x += p.speedX + Math.sin(p.life * 0.01) * 0.2
        p.y += p.speedY
        p.size += 0.15

        const progress = p.life / p.maxLife
        if (progress < 0.15) {
          p.opacity = progress / 0.15
        } else if (progress > 0.7) {
          p.opacity = 1 - (progress - 0.7) / 0.3
        } else {
          p.opacity = 1
        }
        p.opacity *= 0.12

        if (p.life >= p.maxLife) return false

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(200, 190, 170, ${p.opacity})`)
        gradient.addColorStop(0.5, `rgba(180, 170, 150, ${p.opacity * 0.5})`)
        gradient.addColorStop(1, `rgba(160, 150, 130, 0)`)

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
