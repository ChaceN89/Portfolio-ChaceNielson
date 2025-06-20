/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans'],
        'roboto': ['Roboto', 'sans'],
        'lato': ['Lato', 'sans'],
        'montserrat': ['Montserrat', 'sans'],
        'nunito': ['Nunito', 'sans'],
        'chalkduster': ['Chalkduster', 'cursive'],
        'wingdings': ['Wingdings'], 

      },
      fontSize: {
        medium: '0.950rem',
      },
      maxHeight: {
        '102': '28rem',
        '108': '32rem',
        '111': '33rem',
        '114': '36rem',
        '120': '40rem',
        '126': '44rem',
        '132': '48rem',
        '138': '52rem',
        '144': '56rem',
        '152': '60rem',
        '158': '64rem',
        '164': '68rem',
        '170': '72rem',
      },
      height: {
        '102': '28rem',
        '108': '32rem',
        '111': '33rem',
        '114': '36rem',
        '120': '40rem',
        '126': '44rem',
        '132': '48rem',
        '138': '52rem',
        '144': '56rem',
        '152': '60rem',
        '158': '64rem',
        '164': '68rem',
        '170': '72rem',
      }
    },
  },
  plugins: [],
}