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
    
}

.image-containerPC{

    

}

.imgIntroProj{
    margin-top: 0vw;
    width: 11vw;
    height: 7vw;

}

.imgIntroProj:hover{
    transform: scale(1.15);
    transition: transform 0.2s;
}
</style>