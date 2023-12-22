// https://nuxt.com.cn/docs/api/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: "/static/",
    baseURL: "/pure-admin-utils-nuxt3/"
  },
  experimental: {
    payloadExtraction: false
  },
  devServer: {
    host: "0.0.0.0"
  },
  css: ["element-plus/theme-chalk/dark/css-vars.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@element-plus/nuxt"],
  vite: {
    build: {
      chunkSizeWarningLimit: 4000
    }
  }
});
