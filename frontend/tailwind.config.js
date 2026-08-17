/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors extracted from the Guardians logo
        'guardians-navy': '#1A3A6B',    // "GUARDIANS" text — deep navy blue
        'guardians-cyan': '#5BB3E4',    // Stethoscope body & "DIAGNOSTIC CENTER" — sky blue
        'guardians-red': '#E8392A',     // Medical cross — true red (not fire-engine)
        'guardians-dark': '#0F2440',    // Darkest navy for footer backgrounds
        'guardians-light': '#EBF5FB',   // Very light blue tint for backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}