<template>
    <div v-editable="blok" class="text-[#d9d9d975] text-sm flex flex-row justify-around items-start pt-40 relative">
    <img src="../assets/img/gradient-7.webp" class="absolute bottom-0 left-0" alt="">
        <div class="w-[21%]">
            <img :src="blok.logo.filename" alt="">
            <div v-html="renderRichText(blok.description)" class="mt-8"></div>
            <div v-html="renderRichText(blok.info)" class="mt-8"></div>
            <button class="mt-8 text-white border py-4 px-32 rounded-xl">Email Address</button>
            <div v-html="renderRichText(blok.copyright)" class="my-8"></div>
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