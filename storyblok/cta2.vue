<template>
    <div v-editable="blok" class="p-60 flex flex-row justify-around relative">
        <img src="../assets/img/spiral2.webp" class="absolute left-0 top-[-30rem]" alt="">
        <img src="../assets/img/gradient-6.webp" class="absolute right-0 top-[-5rem]" alt="">
        <div class="w-[40%] relative">
            <div v-html="renderRichText(blok.title)" class="text-[50px] font-bold leading-[4rem] text-white"></div>
            <div v-html="renderRichText(blok.subtitle)" class="mt-4 text-[#898CA9]"></div>
            <button class="mt-8 text-white py-4 px-10 rounded-xl bg-gradient-to-b from-[#18C8FF] to-[#933FFE]">Get Started</button>   
        </div>
        <div class="flex items-center w-1/2 relative">
            <img class="ml-[8rem]" :src="blok.img.filename" alt="Suitcase">
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>