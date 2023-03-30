const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                'blue': '#1475F5',
                'primary': '#0092BD',
                'primary-500': '#1b819f',
                'primary-700': '#276c81',
                'gray': '#CBCBCB',
                'gray-500': '#F6F6F7',
                'black-500': '#42474D',
                'text-gray': '#4D4D4D',
                'black': '#000000',
                'white-99': '#FEFEFE',
                'dark-cyan': '#3F3D56',
                'light-gray': '#E5E5E5',
                'light-cyan': '#2F2E41',
                'light-pink': '#FFB7B7',
                'dark-whtie': '#F1F1F1'
            },
            screens: {
                // '2xl': {'max': '1535px', 'min': '1280px'},
                // 'xl': {'max': '1279px', 'min': '1024px'},
                // 'lg': {'max': '1023px', 'min': '768px'},
                // 'md': {'max': '767px', 'min': '640px'},
                'sm': {'max': '639px'},
            }
        },
        
    },

    plugins: [require('@tailwindcss/forms')],
};
