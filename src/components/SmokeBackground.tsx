export default function SmokeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-brand-900/95 to-brand-900" />

      {/* Slow drifting smoke layers — pure CSS, no JS */}
      <div className="smoke-layer smoke-layer-1" />
      <div className="smoke-layer smoke-layer-2" />
      <div className="smoke-layer smoke-layer-3" />

      {/* Warm amber glow from below — like a cigar ember */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/[0.03] rounded-full blur-[100px]" />
    </div>
  )
}
