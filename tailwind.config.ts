// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
    fontFamily: {
      serif: ['var(--font-serif)', 'Charter', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      sans: ['var(--font-sans)', 'system-ui', 'Arial', 'sans-serif'],
      insight: ['var(--font-insight)', 'EB_Garamond', 'Georgia', 'serif'], // NEW
    },
      typography: {
        DEFAULT: {
          css: {
            // Base styling for prose
            maxWidth: 'none',
            color: 'inherit',
            
            // Links
            a: {
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },

            // Headings
            'h1, h2, h3, h4': {
              fontWeight: '700',
              letterSpacing: '-0.025em',
              textWrap: 'balance',
            },

            // Drop cap on first paragraph after h1
            '.prose-paragraph:first-of-type::first-letter': {
              float: 'left',
              fontSize: '5.25em', 
              lineHeight: '0.9',
              fontWeight: '400',
              marginRight: '0.5rem',
              marginTop: '0rem',
              fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              color: '#111827',
            },

            // Blockquotes
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '2px',
              paddingLeft: '1.5rem',
            },

            // Code blocks
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              fontWeight: '400',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
            },

            // Images
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },

            // Improved spacing
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              lineHeight: '1.8',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.8',
            
            // Larger drop cap for lg prose
            '.prose-lg h1 + p::first-letter': {
              fontSize: '4em',
              lineHeight: '0.85',
              marginRight: '0.12em',
            },
            
            p: {
              marginTop: '1.75em',
              marginBottom: '1.75em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;