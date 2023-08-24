<template>
    <div v-editable="blok" class="py-12 text-white flex flex-col align-center justify-center text-center relative">
    <img src="../assets/img/circles2.webp" class="absolute" alt="">
        <div v-html="renderRichText(blok.title)" class="text-[50px] font-bold"></div>
        <div class="flex flex-row text-center mx-auto gap-1">
            <div v-html="renderRichText(blok.subtitle)" class="text-[#898CA9]"></div> 
            <div v-html="renderRichText(blok.cta)" class="text-white"></div>
        </div>
        <div class="w-[338px] mt-12 flex mx-auto align-center justify-center z-20 rounded-xl">
            <input class="py-4 px-14 gradborder rounded-xl bg-transparent" type="text" placeholder="Email Address"/>
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