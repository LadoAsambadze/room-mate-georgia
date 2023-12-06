/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                tablet: '768px',
                tablet2: '1024px',
                desktop: '1440px',
            },
            boxShadow: {
                boxItem: '0px 7px 16px 0px rgba(170, 170, 170, 0.25)',
            },
        },
    },
    plugins: [],
}
