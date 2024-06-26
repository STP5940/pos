import { fileURLToPath } from "node:url";
import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt", "@vueuse/nuxt", "@nuxtjs/device", "@pinia/nuxt"],
  pwa: {
    manifest: {
      name: "PWA Nuxt 3",
      short_name: "PposNuxt",
      theme_color: "#8a8a5e",
      description: "Vuexy NuxtJS Admin Template",
      icons: [
        {
          sizes: "192x192",
          src: "icon192x192.png",
          type: "image/png",
        },
        {
          sizes: "512x512",
          src: "icon512x512.png",
          type: "image/png",
        },
      ],
      lang: "th",
    },
    workbox: {
      navigateFallback: "/",
    },
  },
  app: {
    head: {
      titleTemplate: "%s - NuxtJS Admin Template",
      title: "Vuexy",

      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },

  css: [
    "@core/scss/template/index.scss",
    "@styles/styles.scss",
    "@/plugins/iconify/icons.css",
  ],

  components: {
    dirs: [
      {
        path: "@/@core/components",
        pathPrefix: false,
      },
      {
        path: "~/components/global",
        global: true,
      },
      {
        path: "~/components",
        pathPrefix: false,
        extensions: [".js", ".jsx", ".mjs", ".ts", ".vue", ".tsx"],
      },
    ],
  },

  plugins: ["@/plugins/vuetify/index.ts", "@/plugins/iconify/index.ts"],

  imports: {
    dirs: ["./@core/utils", "./@core/composable/", "./plugins/*/composables/*"],
    presets: [],
  },

  hooks: {},

  experimental: {
    typedPages: true,
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@/*": ["../*"],
          "@themeConfig": ["../themeConfig.ts"],
          "@layouts/*": ["../@layouts/*"],
          "@layouts": ["../@layouts"],
          "@core/*": ["../@core/*"],
          "@core": ["../@core"],
          "@images/*": ["../assets/images/*"],
          "@styles/*": ["../assets/styles/*"],
          "@validators": ["../@core/utils/validators"],
          "@db/*": ["../server/fake-db/*"],
          "@api-utils/*": ["../server/utils/*"],
        },
      },
    },
  },

  // ℹ️ Disable source maps until this is resolved: https://github.com/vuetifyjs/vuetify-loader/issues/290
  sourcemap: {
    server: false,
    client: false,
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        tag === "swiper-container" || tag === "swiper-slide",
    },
  },

  vite: {
    define: { "process.env": {} },

    resolve: {
      alias: {
        "@": fileURLToPath(new URL(".", import.meta.url)),
        "@themeConfig": fileURLToPath(
          new URL("./themeConfig.ts", import.meta.url),
        ),
        "@core": fileURLToPath(new URL("./@core", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./@layouts", import.meta.url)),
        "@images": fileURLToPath(new URL("./assets/images/", import.meta.url)),
        "@styles": fileURLToPath(new URL("./assets/styles/", import.meta.url)),
        "@configured-variables": fileURLToPath(
          new URL("./assets/styles/variables/_template.scss", import.meta.url),
        ),
        apexcharts: fileURLToPath(
          new URL("node_modules/apexcharts-clevision", import.meta.url),
        ),
        "@db": fileURLToPath(new URL("./server/fake-db/", import.meta.url)),
        "@api-utils": fileURLToPath(
          new URL("./server/utils/", import.meta.url),
        ),
      },
    },

    build: {
      chunkSizeWarningLimit: 5000,
    },

    optimizeDeps: {
      exclude: ["vuetify"],
      entries: ["./**/*.vue"],
    },

    plugins: [
      vuetify({
        styles: {
          configFile: "assets/styles/variables/_vuetify.scss",
        },
      }),
      null,
    ],
  },

  build: {
    transpile: ["vuetify"],
  },
});
