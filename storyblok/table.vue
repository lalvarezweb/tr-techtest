<template>
    <div v-editable="blok" class="flex flex-col text-center justify-center items-center relative">
        <img src="../assets/img/gradient-5.webp" class="absolute right-0" alt="">
        <div v-html="renderRichText(blok.title)" class="text-[50px] text-white font-bold leading-[4rem] w-[40%] mx-auto"></div>
        <div v-html="renderRichText(blok.subtitle)" class="mt-4 mb-8 text-[#898CA9] w-[30%] mx-auto"></div>
        <span class="text-[#B982FF] font-semibold">
            <div v-html="renderRichText(blok.cta)" ></div>
        </span>
    </div>
        
    <div class="rounded-xl overflow-hidden bg-[#1A1B23] w-[70%] mx-auto mt-12 relative">
        <table class="w-full text-center">
            <tbody class=" text-white bg-transparent">
                <tr 
                v-for="tableItem in blok.items"
                :key="tableItem._uid"
                class="font-semibold text-lg">
                    <td class="p-6"><div v-html="renderRichText(tableItem.coin)"></div></td>
                    <td class="p-6"><div v-html="renderRichText(tableItem.shorthand)" class=" text-[#B982FF]"></div></td>
                    <td class="p-6"><div v-html="renderRichText(tableItem.cash)"></div></td>
                    <td class="p-6"><div v-html="renderRichText(tableItem.stocks)" class=" text-[#0DBB7C]"></div></td>
                    <td class="p-6"><div><img class="mx-auto" :src="tableItem.graphic.filename" alt="Small graph"></div></td>
                    <td class="p-6"><div v-html="renderRichText(tableItem.cta)"></div></td>
                </tr>
            </tbody>
        </table>   
    </div>
        
</template>

<script setup>
defineProps({ blok: Object })
</script>