/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: '#b1ffee',
            pink: '#FFE0E6',
            red: '#FF2D55',
            yellow: '#FFF4D9',
            orange: '#FFB870',
            lightGreen: '#D9F3F0',
            green: '#00AF9B',
            darkGreen: 'rgb(45 212 191)',
            blue: 'rgb(37 99 235)',
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        mark: {
                            backgroundColor: '#b1ffee',
                            padding: '3px 5px',
                            borderRadius: '3px',
                        },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
