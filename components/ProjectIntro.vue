<template>
    <div class="IntroProj">
        <div class="image-containerPC">
            <!--img class="imgIntroProj" src="~/assets/img/about/papa_francesco_02-696x557.jpg"-->
        </div>
        <span class="titleIntroProj">{{title}}</span>
        </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    defineProps(["title", "image"])
</script>