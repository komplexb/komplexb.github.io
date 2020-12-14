<template>
  <div
    class="blog-navigation font-sans flex justify-between content-center px-4 pb-12"
  >
    <div v-if="prev" class="text-left">
      <span class="text-xs md:text-sm font-normal text-gray-600"
        >&lt; Previous Post</span
      ><br />
      <p>
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
          class="md:text-sm"
        >
          {{ prev.title }}
        </NuxtLink>
      </p>
    </div>
    <div v-if="next" class="text-right">
      <span class="text-xs md:text-sm font-normal text-gray-600"
        >Next Post &gt;</span
      ><br />
      <p>
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
          class="md:text-sm"
        >
          {{ next.title }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogNavigation',
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  @apply break-normal text-base text-green-500 font-bold no-underline;

  &:hover {
    @apply underline;
  }
}
</style>
