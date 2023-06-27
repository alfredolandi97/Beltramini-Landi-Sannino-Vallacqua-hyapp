<template>
    <NuxtLink :to="link">
        <div class="IntroProj">
        <div class="image-containerPC">
            <img class="imgIntroProj" :src="`${logo}`">
        </div>
    </div>
    </NuxtLink>
</template>

<script setup>
    import { defineProps } from 'vue';
    defineProps(["logo", "link"])
</script>