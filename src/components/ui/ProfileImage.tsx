// src/components/ui/ProfileImage.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Skeleton from '@/components/ui/Skeleton'

export default function ProfileImage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-48 h-48 relative rounded-full overflow-hidden bg-gray-200">
      {isLoading && <Skeleton variant="circle" className="absolute inset-0" />}
      <Image 
        src="/images/profile.jpg"
        alt="Payman Sattari"
        fill
        sizes="(max-width: 768px) 192px, 384px"
        className={`
          object-cover
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
        `}
        priority
        onLoadingComplete={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}