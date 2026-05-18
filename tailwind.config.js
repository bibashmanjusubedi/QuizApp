/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode :'class',
    theme: {
        extend:{
            colors:{
                // "dark-navy": "#313E51",
                purple:{
                    600:'#A729F5',
                    500:'#C67EFB',
                },
            },
        },
    },
    plugins: [],
}