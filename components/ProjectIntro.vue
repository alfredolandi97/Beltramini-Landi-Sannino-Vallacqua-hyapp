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

<style scoped>
.Introproj{
    width: 50px;
    height: 50px;
}

.image-containerPC{

    width: 50px;
    height: 50px;

}

.imgIntroProj{
    width: 50px;
    height: 50px;

}


</style>