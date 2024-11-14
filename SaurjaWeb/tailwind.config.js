/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'pattern': "url('/pattern.png')", // Add custom background image
    },
  },
};
export const plugins = [];
