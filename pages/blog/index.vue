<template>
  <main class="container w-full md:max-w-3xl mx-auto pt-8">
    <div class="w-full px-4">
      <div v-for="article of articles" :key="article.slug" class="article">
        <div class="article__info">
          <h1 class="text-sm md:text-2xl">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              {{ article.title }}
            </NuxtLink>
          </h1>
          <span class="text-xs md:text-lg">{{ article.description }}</span>
        </div>
        <div class="article__meta">
          <span class="text-sm md:text-xl">{{
            article.createdAt | formatDate
          }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  filters: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'createdAt', 'slug'])
      .where({ hidden: { $ne: true } })
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  },
  methods: {
    showThis(value) {
      return !(typeof value === 'undefined')
    },
  },
}
</script>
<style lang="scss" scoped>
.nuxt-content {
  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 1rem;
  }
}
.article {
  border-bottom: 1px solid #eef2f7;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 150px;
}

.article__info {
  a {
    @apply text-green-500;

    transition: all 0.3s ease-in-out;

    &:hover {
      @apply text-green-700;
    }
  }
  h1 {
    font-weight: bold;
  }
  span {
    font-weight: 500;
    color: #a3b0c1;
  }
}

.article__meta {
  text-align: right;
  span {
    font-weight: bold;
    color: #cad4df;
  }
}
</style>
