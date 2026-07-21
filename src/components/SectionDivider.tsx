export default function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 40"
        className="w-full max-w-md h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-gold-500/30" />

        <path
          d="M50 20 C70 20, 85 10, 100 10 C112 10, 118 15, 125 15 C130 15, 135 12, 140 12 C145 12, 148 17, 150 20"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-gold-500/45"
        />
        <path
          d="M50 20 C70 20, 85 30, 100 30 C112 30, 118 25, 125 25 C130 25, 135 28, 140 28 C145 28, 148 23, 150 20"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-gold-500/45"
        />

        <ellipse cx="200" cy="20" rx="18" ry="13" stroke="currentColor" strokeWidth="0.75" className="text-gold-500/50" />
        <ellipse cx="200" cy="20" rx="13" ry="9" stroke="currentColor" strokeWidth="0.5" className="text-gold-500/35" />
        <circle cx="200" cy="20" r="2" fill="currentColor" className="text-gold-500/60" />

        <path
          d="M350 20 C330 20, 315 10, 300 10 C288 10, 282 15, 275 15 C270 15, 265 12, 260 12 C255 12, 252 17, 250 20"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-gold-500/45"
        />
        <path
          d="M350 20 C330 20, 315 30, 300 30 C288 30, 282 25, 275 25 C270 25, 265 28, 260 28 C255 28, 252 23, 250 20"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-gold-500/45"
        />

        <line x1="350" y1="20" x2="400" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-gold-500/30" />
      </svg>
    </div>
  )
}
