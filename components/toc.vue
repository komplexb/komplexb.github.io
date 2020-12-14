<template>
  <nav>
    <ul>
      <li v-for="link of article.toc" :key="link.id">
        <!--
          <a :href="`#${link.id}`">{{ link.text }}</a>
          -->
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>
