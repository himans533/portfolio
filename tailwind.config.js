/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors - Enhanced for elite feel
        'primary': '#6366f1',
        'primary-dark': '#4f46e5',
        'primary-light': '#818cf8',
        'primary-lighter': '#c7d2fe',
        
        // Neutrals for dark theme - Refined for readability
        'dark-bg': '#0a0e27',
        'dark-surface': '#1a1f3a',
        'dark-surface-alt': '#242d47',
        'dark-text': '#f8fafc',
        'dark-text-secondary': '#cbd5e1',
        'dark-text-tertiary': '#94a3b8',
        
        // Light theme - Optimized contrast
        'light-bg': '#ffffff',
        'light-surface': '#f9fafb',
        'light-surface-alt': '#f3f4f6',
        'light-text': '#111827',
        'light-text-secondary': '#6b7280',
        'light-text-tertiary': '#9ca3af',
        
        // Accents & States
        'accent': '#ec4899',
        'accent-hover': '#db2777',
        'success': '#10b981',
        'warning': '#f59e0b',
        'danger': '#ef4444',
      },
      spacing: {
        // Enhanced spacing scale for better rhythm
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
      },
      fontSize: {
        // Professional typography scale
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #818cf8 0%, #f472b6 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
        'gradient-cool': 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
      },
      backdropFilter: {
        'blur': 'blur(20px)',
        'blur-sm': 'blur(12px)',
        'blur-lg': 'blur(32px)',
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.08)',
        'glass-dark': 'rgba(15, 23, 42, 0.85)',
        'glass-light': 'rgba(248, 250, 252, 0.7)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.375rem',
        'base': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        'full': '9999px',
      },
      boxShadow: {
        // Enhanced shadow system for depth
        'none': 'none',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'base': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'elevated': '0 10px 40px -15px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-accent': '0 0 30px rgba(236, 72, 153, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          'from': { opacity: '0', transform: 'translateY(-10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      fontFamily: {
        'sans': ['Raleway', 'system-ui', 'sans-serif'],
        'display': ['Raleway', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'elastic': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
        'slower': '500ms',
      },
      opacity: {
        '2': '0.02',
        '5': '0.05',
        '8': '0.08',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
