// src/components/writing/NewsletterSignup.tsx

'use client';

import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      setStatus('success');
      setEmail('');
      setName('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-10 rounded-lg bg-gray-50 px-8 py-10">
      <div className="mx-auto max-w-xl text-center">
        {/* Heading */}
        <h3 className="mb-2 text-xl md:text-[1.375rem] font-bold tracking-tight text-gray-950">
          Enjoyed this essay?
        </h3>
        
        {/* Description */}
        <p className="mb-8 text-gray-600 leading-relaxed max-w-sm mx-auto">
          Subscribe to receive new writing as it's published.
        </p>

        {/* Form */}
        {status !== 'success' ? (
          <form onSubmit={handleSubmit} className="space-y-3" suppressHydrationWarning>
            <div className="flex flex-col md:flex-row gap-3">
            {/* Email Input */}
            <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suppressHydrationWarning
                className="w-full md:flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder:text-gray-400 shadow-sm transition-shadow focus:border-gray-950 focus:ring-0 focus:shadow-md outline-none"
            />

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto rounded-md bg-gray-800 px-6 py-2 text-sm font-medium text-white hover:bg-black transition-colors disabled:opacity-50"
            >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </form>
        ) : (
          /* Success State */
          <div className="py-4">
            <p className="text-gray-900 font-medium">
              Thanks for subscribing!
            </p>
            <p className="mt-1 text-sm text-gray-600">
              You'll receive new essays as they're published.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}