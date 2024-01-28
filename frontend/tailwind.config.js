/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { colors: {
      'darkPurple': '#28293E',
      'lightGray': 'rgba(255, 255, 255, 0.3)'
    },
    inset: {
      '0.9rem': '0.9rem',
      '0.8rem': '0.8rem'
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      "epilogue": ['"Epilogue"']
    }
},
   
  },
  plugins: [],
}

