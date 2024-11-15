// src/components/ui/Skeleton.tsx
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'title' | 'text' | 'image' | 'card' | 'circle'
  count?: number
}

export default function Skeleton({ 
  className,
  variant = 'text',
  count = 1
}: SkeletonProps) {
  const variants = {
    title: 'h-8 w-3/4',
    text: 'h-4 w-full',
    image: 'h-48 w-full',
    card: 'h-[300px] w-full',
    circle: 'h-48 w-48 rounded-full'
  }

  const elements = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={cn(
        'animate-pulse rounded-md bg-gray-200',
        variants[variant],
        className
      )}
    />
  ))

  return count === 1 ? elements[0] : <div className="space-y-3">{elements}</div>
}