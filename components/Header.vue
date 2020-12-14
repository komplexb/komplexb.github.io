<template>
  <header class="header">
    <a href="/" class="logo" aria-label="Home">
      <svg class="icon">
        <use xlink:href="#logo"></use>
      </svg>
    </a>
    <nav>
      <a href="/#about-me"> About Me </a>

      <a href="/#work"> Work </a>

      <a href="/blog"> Blog </a>

      <a href="/#contact"> Contact </a>
    </nav>

    <h1 class="header__title"><span>Blog</span></h1>
    <p class="kicker">Byron Buckley</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header__title {
  margin: 0 auto;
}
.header__title span {
  /* width: 60%; */
}
.kicker {
  margin-top: 20px;
}

header {
  &.blog,
  &.blog-slug {
    @media (max-width: 640px) {
      height: 50vh;
    }
    @media (max-width: 380px) {
      height: 70vh;
    }
  }
}
</style>
