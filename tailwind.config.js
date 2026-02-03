/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                background: '#FDFCF9',
                primary: '#1C1917',
                accent: '#0A2540',
                secondary: '#57534E',
                border: '#E7E5E4',
                card: '#FFFFFF'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif']
            },
            maxWidth: {
                hub: '520px'
            },
            boxShadow: {
                card: '0 1px 3px 0 rgb(0 0 0 / 0.05)',
                'card-hover': '0 4px 12px -2px rgb(0 0 0 / 0.08)'
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem'
            }
        }
    },
    plugins: []
}
