/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
                "cursor-blink": {
                    "0%": {
                        opacity: "0",
                    },
                    "50%": {
                        opacity: "1",
                    },
                    "100%": {
                        opacity: "0",
                    },
                },
                "fade-in-left": {
                    "0%": {
                        opacity: "0.5",
                        transform: "translateX(-3rem)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                "fade-in-right": {
                    "0%": {
                        opacity: "0.5",
                        transform: "translateX(3rem)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-in-out",
                "fade-in-from-left": "fade-in-left 0.5s ease-in-out",
                'fade-out-from-left': 'fade-in-left 0.5s ease-in-out reverse',
                "fade-in-from-right": "fade-in-right 0.5s ease-in-out",
                'fade-out-from-right': 'fade-in-right 0.5s ease-in-out reverse',
                "cursor-blink": "cursor-blink 1s step-end infinite",
            },
            blur: {
                xs: "1px",
                sm: "4px",
                md: "8px",
                lg: "12px",
                xl: "16px",
            },
        },
    },
    plugins: [],
};
