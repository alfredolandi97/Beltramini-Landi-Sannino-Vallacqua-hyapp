<template>
    <div class="card">
        <div class="image-container">
            <!--img class="dog-img" src="~/assets/img/home-image.jpg" /-->
        </div>
        <span class="dog-name">{{title}}</span>
        <span class="dog-breed">{{caption}}</span>
        <span class="dog-name">{{text}}</span>
        <span class="dog-breed">{{date}}</span>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    defineProps(["title", "caption", "text", "image", "date"])
</script>

<style>
     .image-container
{
    display: flex;
    justify-content: center;
    border: 2px dashed red;
    border-radius: 10px;
    padding: 2px;
    width: 250px;
    height: 250px;
}

.dog-img
{
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    margin: auto;
}

.card
{
    display: flex;
    flex-flow: column;
    padding: 20px;
    border: 2px solid black;
    border-radius: 20px;
    width: fit-content;
    height: fit-content;
}

.dog-name
{
    font-size: 2em;
    font-weight: bold;
}
</style>