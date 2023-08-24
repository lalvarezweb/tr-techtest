<template>
    <div v-editable="blok" class="py-12 text-white flex flex-col align-center justify-center text-center relative">
    <img src="../assets/img/circles2.webp" class="absolute" alt="">
        <div v-html="renderRichText(blok.title)" class="text-[50px] font-bold"></div>
        <div class="flex flex-row text-center mx-auto gap-1">
            <div v-html="renderRichText(blok.subtitle)" class="text-[#898CA9]"></div> 
            <div v-html="renderRichText(blok.cta)" class="text-white"></div>
        </div>
        <div class="mt-12 flex align-center justify-center">
            <input class="py-4 px-14 bg-transparent border rounded-lg" type="text" placeholder="Email Address"/>
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>