import { cn } from "@/lib/utils"

interface CategoryCardProps {
  name: string
  href: string
  className?: string
}

export function CategoryCard({ name, href, className }: CategoryCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex items-center justify-center h-32 w-32 flex-col  rounded-full bg-zinc-900 transition-all duration-300 hover:bg-purple-900 border-2 border-transparent hover:border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]",
        className,
      )}
    >
      <span className="font-display text-xl font-bold text-white text-center ml-2 mr-2">{name}</span>
      <span className="mt-1 text-xs text-purple-300">Explore</span>
    </a>
  )
}
