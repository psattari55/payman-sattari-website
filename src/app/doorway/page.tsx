// src/app/doorway/page.tsx
import Doorway from '@/components/ui/Doorway'
import { Microscope, Eye, Lightbulb } from 'lucide-react'

export default function DoorwayPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Choose Your Path</h1>
      <div className="flex justify-center gap-12">
        <Doorway
          title="Scholar's Door"
          link="/research"
          icon={<Microscope className="w-8 h-8" />}
          color="#2563EB"
          gradient="from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
          description="Research & Theory"
          details="Dive deep into advanced research and theoretical frameworks."
          backgroundImage="images/doorway/scholarsdoor.webp"
        />
        <Doorway
          title="Observer's Door"
          link="/observers-door"
          icon={<Eye className="w-8 h-8" />}
          color="#7C3AED"
          gradient="from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200"
          description="Experience & Understanding"
          details="Discover through direct experience and insight how consciousness shapes our reality."
          backgroundImage="https://example.com/observer-background.jpg"
        />
        <Doorway
          title="Practitioner’s Door"
          link="/practice"
          icon={<Lightbulb className="w-8 h-8" />}
          color="#16A34A"
          gradient="from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200"
          description="Application & Integration"
          details="Apply these principles in daily life and experience transformation through practice."
          backgroundImage="https://example.com/practice-background.jpg"
        />
      </div>
    </div>
  )
}
