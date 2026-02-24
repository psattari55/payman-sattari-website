// src/components/layout/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    /* Restore the grey background and use a very light top border */
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Navigation: Using the refined, spaced-out label style */}
        <nav className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-4 mb-10 mx-auto max-w-[320px] md:max-w-none">
          {[
            { name: 'About', href: '/about' },
            { name: 'Writing', href: '/writing' },
            { name: 'Books', href: '/books/science-of-energy' },
            { name: 'Contact', href: '/contact' },
            { name: 'RSS', href: '/writing/rss.xml' },
            { name: 'Privacy', href: '/privacy' },
            { name: 'Terms', href: '/terms' },
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Copyright: Centered and subtle */}
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-300 mt-8">
            © {currentYear} P. Orelio Sattari · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}