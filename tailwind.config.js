/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/bg.png')",  // Ensure the path is correct
      },
    },
  },
  plugins: [],
}

