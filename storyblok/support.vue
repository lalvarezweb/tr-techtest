<template>
    <div v-editable="blok" class="py-72 flex flex-row justify-center relative">
        <div class="flex items-center w-1/2">
            <img :src="blok.img.filename" class="left-0 absolute" alt="Shield Support">
        </div>
        <div class="w-1/4">
            <div v-html="renderRichText(blok.title)" class="text-[50px] font-bold leading-[4rem] text-white"></div>
            <div v-html="renderRichText(blok.subtitle)" class="mt-4 text-[#898CA9]"></div>
            <StoryblokComponent
            v-for="button in blok.button"
            :key="button._uid"
            :blok="button"
            />
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>