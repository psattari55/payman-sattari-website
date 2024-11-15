// src/components/features/PublicationCardSkeleton.tsx
import Skeleton from '@/components/ui/Skeleton'
import Card from '@/components/ui/Card'

export default function PublicationCardSkeleton() {
  return (
    <Card className="space-y-4">
      <Skeleton variant="title" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
      <Skeleton variant="text" className="w-1/3" />
      <div className="pt-2">
        <Skeleton variant="text" count={2} />
      </div>
    </Card>
  )
}