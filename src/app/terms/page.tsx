// src/app/terms/page.tsx
import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for oreliosattari.com - Understanding your rights and responsibilities when using our website.',
  openGraph: {
    title: 'Terms of Service | P. Orelio Sattari',
    description: 'Terms of Service for oreliosattari.com - Understanding your rights and responsibilities when using our website.',
    type: 'website'
  }
}

export default function TermsOfService() {
  return (
    <PageTransition>
      <Section background="white" width="narrow">
        <article className="prose prose-gray max-w-none">
          <h1>Terms of Service</h1>
          <p className="text-gray-600">Last updated: December 6, 2025</p>

          <h2>Welcome to oreliosattari.com</h2>
          <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.</p>

          <h2>Intellectual Property</h2>
          
          <h3>Content Ownership</h3>
          <p>All content on this website, including but not limited to text, articles, research papers, graphics, logos, and design elements, is the intellectual property of Payman Sattari and is protected by copyright and intellectual property laws.</p>

          <h3>Permitted Use</h3>
          <p>You may:</p>
          <ul>
            <li>Read and access content for personal, non-commercial use</li>
            <li>Share links to our content</li>
            <li>Quote brief excerpts with proper attribution</li>
          </ul>
          
          <p>You may not:</p>
          <ul>
            <li>Reproduce, distribute, or republish content without prior written permission</li>
            <li>Modify or create derivative works</li>
            <li>Use content for commercial purposes without explicit authorization</li>
            <li>Present the content as your own work</li>
          </ul>

          <h3>Citation and Attribution</h3>
          <p>When referencing or citing content from this website:</p>
          <ul>
            <li>Include proper attribution to P. Orelio Sattari</li>
            <li>Link back to the original content where applicable</li>
            <li>Follow standard academic citation practices</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">
            Note: Earlier works may be published under Payman Sattari.
          </p>

          <h2>User Conduct</h2>
          <p>When using this website, you agree to:</p>
          <ul>
            <li>Not interfere with the website's functionality</li>
            <li>Not attempt to gain unauthorized access</li>
            <li>Not use the site for any unlawful purpose</li>
            <li>Not harass, abuse, or harm others</li>
            <li>Not collect or harvest user information</li>
            <li>Not transmit malicious code or content</li>
          </ul>

          <h2>Disclaimers</h2>
          
          <h3>Content Accuracy</h3>
          <ul>
            <li>While we strive for accuracy, content is provided "as is"</li>
            <li>Research findings and theoretical frameworks are presented for academic discussion</li>
            <li>Verify information independently when necessary</li>
          </ul>

          <h3>External Links</h3>
          <ul>
            <li>Links to external websites are provided for convenience</li>
            <li>We are not responsible for external content</li>
            <li>External links do not imply endorsement</li>
          </ul>

          <h2>Newsletter and Communications</h2>
          <p>By subscribing to our newsletter:</p>
          <ul>
            <li>You agree to receive periodic updates</li>
            <li>You can unsubscribe at any time</li>
            <li>We will handle your information as described in our Privacy Policy</li>
          </ul>

          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site constitutes acceptance of any changes.</p>

          <h2>Limitation of Liability</h2>
          <p>To the fullest extent permitted by law:</p>
          <ul>
            <li>We are not liable for any damages arising from your use of this website</li>
            <li>We do not guarantee uninterrupted or error-free operation</li>
            <li>We are not responsible for decisions made based on website content</li>
          </ul>

          <h2>Governing Law</h2>
          <p>These terms are governed by and construed in accordance with the laws of the United States. Any disputes shall be subject to the exclusive jurisdiction of the courts in the United States.</p>

          <h2>Contact</h2>
          <p>If you have any questions about these Terms of Service, please contact us through our contact form at {' '}
            <a href="/contact">oreliosattari.com/contact</a>
          </p>
        </article>
      </Section>
    </PageTransition>
  )
}