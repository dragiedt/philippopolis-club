export default function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-12 bg-brand-300" />
      <span className="text-gold-500 text-lg">✦</span>
      <div className="h-px w-12 bg-brand-300" />
    </div>
  )
}