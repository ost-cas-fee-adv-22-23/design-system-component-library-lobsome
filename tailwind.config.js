/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                xxs: '4px',
                xs: '8px',
                s: '16px',
                m: '24px',
                l: '32px',
                xl: '48px',
                xxl: '64px',
            },
            lineHeight: {
                125: '125%',
                140: '140%',
                145: '145%',
            },
            transitionDuration: {
                350: '350ms',
            },
            backgroundImage: {
                'gradient-50': 'linear-gradient(90deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%);',
                'gradient-70': 'linear-gradient(90deg, var(--tw-gradient-from) -12.56%, var(--tw-gradient-to) 62.92%);',
                'gradient-80': 'linear-gradient(90deg, var(--tw-gradient-from) -15.33%, var(--tw-gradient-to) 38.87%);',
            },
        },
    },
    plugins: [],
};
