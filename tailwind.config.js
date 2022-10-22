/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.hbs", "**/**/*.hbs", "!node_modules/**/*.hbs"],
    darkMode: "class",
    theme: {
        fontFamily: {
            display: ["Chomsky"],
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
