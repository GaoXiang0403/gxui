/*
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2024-11-21 00:44:22
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2024-12-12 19:27:52
 * @FilePath: /gxdemo/nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  experimental: {
    inlineRouteRules: true,
  },
  css: ["~/assets/scss/common.scss"],
  app: {
    baseURL: "/gxui/",
    head: {
      titleTemplate: "%s %separator %siteName",
      templateParams: {
        seperator: "—", // choose a seperator
        siteName: "MyApp", // set a site name
      },
      meta: [
        { name: "description", content: "My amazing Nuxt 3 app" },
        { name: "keywords", content: "nuxt,vue,seo" },
        { property: "og:title", content: "%s %separator %siteName" },
        { property: "og:description", content: "%description" },
      ],

      link: [
        { rel: "canonical", href: "https://gaoxiang0403.github.io/gxui/" },
      ],
    },
  },
  appConfig: {
    // you don't need to include this: only for testing purposes
    buildDate: new Date().toISOString(),
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate", "@nuxt/ui"],
  // robots: {},
  // site: {
  //   indexable: true,
  // },
  vite: {
    clearScreen: false,
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // 使用现代 API
          // 如果需要，可以添加以下配置来静音警告
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
          "ie >= 8",
        ],
      },
    },
  },
  devtools: { enabled: true },
});
