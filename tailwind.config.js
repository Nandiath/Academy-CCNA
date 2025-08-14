/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0A192F',
        'dark-teal': '#0F2D3D',
        'bright-teal': '#00BFA5',
        'light-gray': '#A0AEC0',
        'dark-gray': '#2D3748',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0A192F 0%, #0F2D3D 100%)',
        'gradient-teal': 'linear-gradient(135deg, #00BFA5 0%, #26A69A 100%)',
      }
    },
  },
  plugins: [],
}

