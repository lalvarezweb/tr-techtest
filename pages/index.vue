<template>
        <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const story = await useAsyncStoryblok("home", {
    version: "draft",
    language: "es",
    fallback_lang: "default",
});
</script>
