/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    `./i18nConfig.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'paragraph-light-dark': '#18191F',
        'paragraph-dark-2': '#464359',
        'btn': '#1B5BF7',
        'title': '#1b5bf7',
        'card-1': '#e0e8ff',
        'delever': '#ff5521',
      },
      boxShadow: {
        'header-shadow': '0 1px 0 #e5e9f2;',
        'contact': '2px 10px 28px rgba(75, 0, 129, .12);',
      },
      backgroundColor: {
        menu: '#f5f8ff',
        truck: '#ffded4',
        devops: '#A8BFFF',
        frontend: '#C6D6FF',
        backend: '#BDDAED',
        mobile: '#DBE5FF',
        test: '#E1E9FE',
        structure: '#D1DDE8',
        design: '#CED6EE',
      },
      backgroundImage: {
        'bg-pattern': 'background-image:url(/images/background-pattern.jpeg)',
      },
      animation: {
        'loop-scroll': 'loop-scroll 30S linear infinite',
        'loop-reverse': 'loop-reverse 30S linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
        'loop-reverse': {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0%)',
          },
        },
      },
    },
  },
  plugins: [],
}
