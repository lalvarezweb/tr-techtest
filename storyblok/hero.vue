<template>
    <div v-editable="blok" class="background flex-col justify-center items-center mx-auto pt-[18rem] pb-[25rem] text-center">
        <div v-html="renderRichText(blok.title)" class="text-[85px] text-white font-bold w-[45%] leading-[6.5rem]"></div>
        <div v-html="renderRichText(blok.subtitle)" class="mt-8 text-base text-[#898CA9] w-[34%]"></div>
        <StoryblokComponent
        v-for="button in blok.button"
        :key="button._uid"
        :blok="button"
        />    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.background {
    background-image: url('../assets/img/bg-hero.webp');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
