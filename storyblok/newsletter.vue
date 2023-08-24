<template>
    <div v-editable="blok" class="py-12 text-white flex flex-col align-center justify-center text-center relative">
    <img src="../assets/img/circles2.webp" class="absolute" alt="">
        <div v-html="renderRichText(blok.title)" class="text-[50px] font-bold"></div>
        <div class="flex flex-row text-center mx-auto gap-1">
            <div v-html="renderRichText(blok.subtitle)" class="text-[#898CA9]"></div> 
            <div v-html="renderRichText(blok.cta)" class="text-white"></div>
        </div>
        <div class="mt-10 w-[338px] mx-auto z-20">
            <div class="bg-gradient-to-t from-cyan-500 to-purple-500 p-1 rounded-xl">
                <input class="block w-full rounded-lg p-4 bg-[#0B0B0F] text-white" placeholder="Email Address">
            </div>
        </div>

    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>