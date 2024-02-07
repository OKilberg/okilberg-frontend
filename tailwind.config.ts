import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'assistant':['Assistant','sans-serif'],
      'cairo':['Cairo','serif'],
    },
    extend: {
      aspectRatio: {
        '21/9':'21 / 9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        'dark':'0 2px 2px rgba(0, 0, 0, 0.75)',
      },
      height: {
        'screen-1/2':'calc(50vh)',
        'screen-3/4':'calc(75vh)',
        'screen-5/8':'calc(62.5vh)',
        'screen-3/8':'calc(37.5vh)'
      },
      width: {
        'screen-1/2':'calc(50vw)',
        'screen-3/4':'calc(75vw)',
        'screen-5/8':'calc(62.5vh)',
        '10ch':'10ch'
      },
      colors: {
        'navy-blue':'#242938',
        'navy-blue-lighter':'#2C3244',
        'gray-button1':'#808080',
        'black-gradient':'rgba(0, 0, 0, 0.50)',
        'gray-title':'#D9D9D9',
        'dark-button':'#262626',
        'dark-button-2':'#3F3F3F',
        'gray-stroke':'#BFBFBF',
        'gray-stroke-2':'#CCCCCC',
        'white-grey':'#E5E5E6'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
      },
      saturate: {
        '80':'.80'
      },
      borderWidth: {
        '1':'1px'
      },
      blur: {
        'xs':'2px'
      }
    },
  },
  plugins: [],
}
export default config
