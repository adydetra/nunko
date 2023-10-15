export default defineNuxtConfig({
  modules: ["@nuxtjs/hanko", "@nuxtjs/tailwindcss"],
  hanko: {
    apiURL: process.env.NUXT_PUBLIC_HANKO_API_URL,
  },

  devtools: { enabled: false },
});
