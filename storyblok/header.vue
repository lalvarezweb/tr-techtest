<template>
    <nav v-editable="blok" class="flex flex-row justify-around items-center p-4 text-white sticky top-0 z-50 bg-[#0B0B0F]">
        <img src="../assets/img/logo.png" alt="Logo" width="110px" height="14px">
        <ul class="ml-8 flex flex-row gap-10 text-sm font-semibold">
            <li v-for="headerItem in blok.items"
            :key="headerItem._uid" >{{ headerItem.title }}</li>
        </ul>
        <div class="flex flex-row gap-2">
            <button class="border rounded-[10px] py-2 px-6 text-sm font-semibold">Sign In</button>
            <button class="rounded-[10px] py-2 px-6 text-sm font-semibold bg-gradient-to-b from-[#18C8FF] to-[#933FFE]">Sign Up</button>
        </div>
    </nav>
</template>

<script setup>
defineProps({ blok: Object })
</script>
