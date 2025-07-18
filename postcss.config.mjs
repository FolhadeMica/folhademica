// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // <<-- GARANTA QUE ESTÁ AQUI
  },
};

export default config;