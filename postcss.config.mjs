const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      fontFamily: {
        chelsea: ['"Chelsea Market"', 'cursive'], // Note the quotes around the font name
      },
    },
  },
};

export default config;
