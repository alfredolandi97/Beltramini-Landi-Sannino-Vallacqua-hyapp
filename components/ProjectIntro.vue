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
    width: 250px;
    height: 200px;
}

.image-containerPC{

    width: 250px;
    height: 200px;

}

.imgIntroProj{
    width: 250px;
    height: 200px;

}


</style>