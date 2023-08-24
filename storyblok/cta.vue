<template>
    <div v-editable="blok" class="flex-col justify-center items-center mx-auto text-center relative">
    <img src="../assets/img/spiral.webp" class="absolute right-8 mt-[14rem]" alt="">
    <img src="../assets/img/star2.webp" class="absolute right-[15rem] mt-8" alt="">
        <div v-html="renderRichText(blok.title)" class="w-[40%] text-[50px] text-white font-bold"></div>
        <div v-html="renderRichText(blok.subtitle)" class="w-[30%] mt-4 text-base text-[#898CA9]"></div>
        <StoryblokComponent
        v-for="button in blok.button"
        :key="button._uid"
        :blok="button"
        />
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>