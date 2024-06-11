"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
};
exports.default = config;
