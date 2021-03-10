// import tailwindTypography from '@tailwindcss/typography'
import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Blog | Byron Buckley',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name', content: 'Byron Buckley' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Experienced Front-end Engineer available for full-time and contract-to-hire engagements.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'css, scss, sass, javascript, vue, vuejs, ui, ux, front-end, developer, engineer, usability, electron, aws, serverless',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: '/assets/img/svg/logo.svg' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://byronbuckley.com',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/blog.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-22514080-1',
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-ghcolors.css',
      },
      tocDepth: 2,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true, // prevents all.dist.css from being bundled into blog pages
  },

  sitemap: {
    hostname: 'https://byronbuckley.com',
    routes() {
      return getRoutes()
    },
  },
}
