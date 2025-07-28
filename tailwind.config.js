/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./csr/index.html","./csr/script.js"],
  safelist: [{ pattern: /.*/ }], 
  theme: {
    extend: {
      colors:
      {
        slateish: '#616569',
        namadji: '#433f3b',
      },
    
      fontFamily:
      {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        gothic: ['SpecialGothicExpandedOne', 'sans-serif'],
        grotesk: ['SpaceGrotesk','sans-serif'],
      }
    },
  },
  plugins: [],
}

