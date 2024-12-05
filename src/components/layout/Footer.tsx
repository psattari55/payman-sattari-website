// src/components/layout/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/research" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Research
          </Link>
          <Link href="/books/science-of-energy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Books
          </Link>
          <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Terms
          </Link>
        </nav>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} Payman Sattari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}