export default function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/60" />
      <span className="text-gold-500 text-lg">✦</span>
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/60" />
    </div>
  )
}