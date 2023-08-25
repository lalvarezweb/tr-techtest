<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'The Rose TechTest | developed by lalvarezweb.es',
  meta: [
    { name: 'description', content: 'Tech test for job offer in The Rose Studio, developed by lalvarezweb using Nuxt3 & Storyblok' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>