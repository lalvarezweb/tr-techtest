<template>
    <div v-editable="blok" class="flex-col justify-center items-center mx-auto pt-[15rem] pb-[25rem] text-center relative background">
        <Herobg/>
        <div v-html="renderRichText(blok.title)" class="text-[85px] text-white font-bold w-[45%] leading-[6.5rem] relative"></div>
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
    background-image: url("../assets/img/circles-hero.webp");
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: right;
}
</style>