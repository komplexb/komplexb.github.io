<template>
  <article class="container w-full md:max-w-3xl mx-auto pt-8">
    <div
      class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style="font-family: Georgia, serif"
    >
      <div class="font-sans">
        <p class="text-base md:text-sm font-bold">
          <NuxtLink to="/blog" class="back-link"> &lt; Back to Blog </NuxtLink>
        </p>
        <h1
          class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
        >
          {{ article.title }}
        </h1>
        <p class="published">Published {{ article.createdAt | formatDate }}</p>
        <p v-if="article.description" class="">{{ article.description }}</p>
      </div>
      <ul class="toc">
        <li
          v-for="link of article.toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
        >
          <NuxtLink :to="`/blog/${$route.params.slug}#${link.id}`">{{
            link.text
          }}</NuxtLink>
        </li>
      </ul>
      <nuxt-content :document="article" />
    </div>
    <hr class="border-b-2 border-gray-400 mb-8 mx-4" />
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
import getSiteMeta from '../../utils/getSiteMeta'

export default {
  filters: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug) // use the surround() method and pass in the slug from params so that it can get the correct slug for the previous and next
      .fetch()

    return { article, prev, next }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.image,
      }
      return getSiteMeta(metaData)
    },
  },
  methods: {
    showThis(value) {
      return !(typeof value === 'undefined')
    },
  },
  head() {
    return {
      title: `${this.article.title} | Byron Buckley`,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://byronbuckley.com/blog/${this.$route.params.slug}`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
p {
  @apply py-6;

  & + p {
    @apply pt-0 pb-6;
  }

  & + h1,
  & + h2,
  & + h3,
  & + h4,
  & + h5,
  & + h6 {
    padding-top: 0.5rem;
  }
}
.published {
  @apply text-sm md:text-base font-normal text-gray-600;

  padding: 0;
}
</style>

<style lang="scss">
.nuxt-content {
  a {
    @apply text-green-500 no-underline hover:underline;

    transition: all 0.3s ease-in-out;
  }

  /** style inline code **/
  li,
  p {
    code {
      @apply bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4;

      padding: 0.25rem;
      border: 1px solid;
    }
  }

  p {
    @apply py-6;
  }

  ol {
    @apply list-decimal;

    li {
      @apply py-3;
    }
  }

  ul {
    @apply list-disc;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply py-2 font-sans;

    font-weight: bold;
    padding-top: 1.75rem;

    & + p {
      padding-top: 0.5rem;
    }
  }

  h2 {
    @apply text-2xl;
  }

  h1 {
    @apply text-3xl;

    .icon {
      display: none;
    }

    & + h2 {
      padding-top: 0.5rem;
    }

    small {
      @apply text-base font-normal;
    }
  }

  h3 {
    @apply text-xl;

    .icon {
      display: none;
    }
  }

  blockquote {
    @apply border-l-4 border-green-500 italic my-8 pl-8 md:pl-12;
  }
}

.nuxt-content-highlight {
  pre {
    @apply text-base p-2 md:p-4;

    code {
      @apply break-words whitespace-pre-wrap;
    }
  }
}

article img {
  margin: 0 auto;
}

.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 15px 15px;
  background-repeat: no-repeat;
}

.back-link {
  @apply text-base md:text-sm text-green-500 font-bold no-underline hover:underline;
}

.gist-it-gist .gist-file .gist-data,
.gist .blob-wrapper.data {
  max-height: 35vh;
  overflow: auto;
}
</style>
