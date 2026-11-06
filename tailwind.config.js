/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#16150f',
          soft: '#3a372e',
          muted: '#6f6a5e',
        },
        paper: {
          DEFAULT: '#f7f5f0',
          deep: '#efebe2',
          line: '#e3ded3',
        },
        forest: {
          DEFAULT: '#1f3d33',
          soft: '#2c5245',
          tint: '#dfe7e0',
        },
        clay: '#b4643c',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', '"Songti SC"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"PingFang SC"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        frame: '1240px',
      },
    },
  },
  plugins: [],
}
