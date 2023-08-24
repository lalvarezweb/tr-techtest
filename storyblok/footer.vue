<template>
    <div v-editable="blok" class="text-[#d9d9d975] text-sm flex flex-row justify-around items-start pt-40 relative">
    <img src="../assets/img/gradient-7.webp" class="absolute bottom-0 left-0 opacity-70" alt="">
        <div class="w-[21%] z-20">
            <img :src="blok.logo.filename" alt="">
            <div v-html="renderRichText(blok.description)" class="mt-8"></div>
            <div v-html="renderRichText(blok.info)" class="mt-8"></div>
            <div class="mt-10 w-[457px] mx-auto">
            <div class="bg-gradient-to-t from-cyan-500 to-purple-500 p-1 rounded-xl">
                <input class="block w-full rounded-lg p-4 bg-[#0B0B0F] text-white" placeholder="Email Address">
            </div>
        </div>            <div v-html="renderRichText(blok.copyright)" class="my-8"></div>
        </div>
        <div class="flex flex-col gap-6">
            <h4 class="font-semibold">Company</h4>
            <ul class="flex flex-col gap-6">
                <li v-for="companyItem in blok.company"
                :key="companyItem._uid"
                >{{ companyItem.companyItem }}</li>
            </ul>
        </div>
        <div class="flex flex-col gap-6">
            <h4 class="font-semibold">Privacy Policy and Terms of Service</h4>
            <ul class="flex flex-col gap-6">
                <li v-for="legalItem in blok.legal"
                :key="legalItem._uid"
                >{{ legalItem.legalItem }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.gradborder {
    border: 1px solid transparent; /* Establece un borde inicialmente transparente */
    border-image: linear-gradient(to bottom, #18C8FF, #933FFE); /* Aplica el gradiente como imagen de borde */
    border-image-slice: 1; /* Configura cómo se divide la imagen del borde */
}
</style>