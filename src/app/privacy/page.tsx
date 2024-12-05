// src/app/privacy/page.tsx
import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for paymansattari.com - Learn how we collect, use, and protect your information.',
    openGraph: {
      title: 'Privacy Policy | Payman Sattari',
      description: 'Privacy Policy for paymansattari.com - Learn how we collect, use, and protect your information.',
      type: 'website'
    }
  }

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <Section background="white" width="narrow">
        <article className="prose prose-gray max-w-none">
          <h1>Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 6, 2024</p>

          <h2>Overview</h2>
          <p>This Privacy Policy explains how paymansattari.com ("we," "our," or "the Site") collects, uses, and protects your information when you visit our website. We respect your privacy and are committed to protecting your personal data.</p>

          <h2>Information We Collect</h2>
          
          <h3>Automatically Collected Information</h3>
          <p>We use Google Analytics to collect standard internet log information and details of visitor behavior patterns. This includes:</p>
          <ul>
            <li>Pages you visit on our site</li>
            <li>Time spent on each page</li>
            <li>Type of browser used</li>
            <li>Device type</li>
            <li>Referring site details</li>
            <li>General location (country/city level, not precise location)</li>
          </ul>
          <p>This information is processed in a way that does not identify anyone. We do not make, and do not allow Google to make, any attempt to find out the identities of those visiting our website.</p>

          <h3>Information You Provide</h3>
          <p>We collect information you voluntarily provide when you:</p>
          <ul>
            <li>Submit contact forms</li>
            <li>Sign up for our newsletter</li>
            <li>Send us emails</li>
          </ul>
          <p>This may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Message content</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Improve our website and user experience</li>
            <li>Respond to your inquiries</li>
            <li>Send newsletters (if you've subscribed)</li>
            <li>Analyze site usage</li>
            <li>Fix technical problems</li>
          </ul>

          <h2>Data Storage and Security</h2>
          <ul>
            <li>Newsletter subscriptions are managed through Ghost</li>
            <li>Contact form submissions are processed securely</li>
            <li>We use standard security measures to protect your data</li>
            <li>We retain your data only as long as necessary</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li>Google Analytics for website analytics</li>
            <li>Ghost for newsletter management</li>
            <li>Vercel for website hosting</li>
          </ul>
          <p>Each of these services has their own privacy policy and handles data according to their respective terms.</p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Unsubscribe from our newsletter at any time</li>
            <li>Opt out of Google Analytics tracking</li>
          </ul>

          <h2>Cookies</h2>
          <p>We use essential cookies to ensure our website functions properly. Through Google Analytics, we use analytical cookies to understand how visitors use our site. You can control cookies through your browser settings.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us through our contact form at {' '}
            <a href="/contact">paymansattari.com/contact</a>
          </p>

          <h2>Children's Privacy</h2>
          <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>

          <h2>International Users</h2>
          <p>This website is operated in the United States. If you are located outside of the United States, please be aware that information we collect will be transferred to and processed in the United States.</p>
        </article>
      </Section>
    </PageTransition>
  )
}