/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            screens: {
                'sm': '327px',
                'md': '689px',
                'lg': '1110px',
            },
            padding: {
                'sm': '1.5rem'
            }
        },
        extend: {
            colors: {
                'black': '#000000',
                'lightBlack': '#101010',
                'white': '#FFFFFF',
                'gray': '#F1F1F1',
                'lightGray': '#FAFAFA',
                'orange': '#D87D4A',
                'lightOrange': '#FBAF85'
            },
            backgroundImage: {
                'heroMobile': 'url(/assets/home/mobile/image-header.jpg)',
                'heroTablet': 'url(/assets/home/tablet/image-header.jpg)',
                'heroDesktop': 'url(/assets/home/desktop/image-hero.jpg)',
            },
        },
    },
    plugins: [],
};
