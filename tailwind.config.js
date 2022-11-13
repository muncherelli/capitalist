/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.hbs", "**/**/*.hbs", "!node_modules/**/*.hbs"],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Libre Franklin"],
            display: ["Libre Franklin"],
        },
        extend: {},
        screens: {
            mini: "320px",
            mobile: "375px",
            tablet: "768px",
            desktop: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px",
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
