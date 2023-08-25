<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'The Rose TechTest',
  meta: [
    { name: 'description', content: 'Tech test for job offer in The Rose Studio' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>