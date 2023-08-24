<template>
    <div v-editable="blok" class="py-60 flex flex-row justify-center text-white gap-6 relative">
        <img src="../assets/img/circles.webp" alt="" class="absolute top-0">
        <div v-for="cardItem in blok.cards"
        :key="cardItem._uid"
        class="flex flex-col px-6 py-8 w-[26rem] rounded-3xl justify-center items-center text-center bg-[#1A1B23]">
            <img :src="cardItem.img.filename" alt="Trade Desk">
            <div v-html="renderRichText(cardItem.title)" class="font-bold text-3xl mt-6"></div>
            <div v-html="renderRichText(cardItem.subtitle)" class="text-[#898CA9] text-base mt-6 w-[22rem]"></div>
            <span class="text-[#B982FF] font-semibold mt-6">
                <div v-html="renderRichText(cardItem.cta)"></div>
            </span>
        </div>
        <img src="../assets/img/star-img.webp" alt="" class="absolute bottom-16 left-16">
        <img src="../assets/img/star3.webp" alt="" class="absolute bottom-40 left-10">
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>