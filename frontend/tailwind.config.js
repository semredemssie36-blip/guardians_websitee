/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'guardians-navy': '#1B365D',    // Main navy blue from logo
        'guardians-cyan': '#5CB3D9',    // Light blue from logo  
        'guardians-red': '#FF4444',     // Red from medical cross
        'guardians-dark': '#0F2A44',    // Darker navy for backgrounds
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        medical: {
          blue: '#1B365D',       // Navy blue from logo - main text color
          lightBlue: '#5CB3D9',  // Light cyan from logo - stethoscope color
          darkBlue: '#0F2A44',   // Darker navy for footer
          red: '#FF4444',        // Red from medical cross
          lightRed: '#FFEBEB',   // Light red backgrounds
          white: '#ffffff',
          gray: '#f8fafc',       // Very light gray
          darkGray: '#334155',   // Dark gray text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}