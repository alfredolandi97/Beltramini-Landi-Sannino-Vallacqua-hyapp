<template>
    <div class="cardNC">
       <div class="containerNC">
        <img class="imgNC" :src="getImagePath()" />
        <span class="titleNC">{{title}}</span>
        <span class="captionNC">{{caption}}</span>
        <span class="textNC">{{text}}</span>
        <span class="dateNC">{{date}}</span>
       </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(["title", "caption", "text", "image", "date"])

    function getImagePath() {
        return new URL(`../assets/img/news/${props.image}`, import.meta.url)
    }
</script>

<style>
.containerNC{
    display: flex;
    flex-flow:column;
}
.imgNC
{
    width: 33vw;
    float: left;
  
}

.cardNC
{
    display: flex;
    flex-flow: column;
    padding: 20px;
    border: 2px solid #BBFB1E;
    border-radius: 20px;
    width: fit-content;
    height: fit-content;
    margin-bottom: 10px;
}

.titleNC
{
font-size:1.8vw;
color: #BBFB1E;
margin-left:10vw;
font-family: "stretch_pro", sans-serif;
text-transform: uppercase;
margin-top: -18vw;
margin-left: 40vw;
margin-right: 2vw;

}

.captionNC{
    font-size: 1.1vw;
    font-family:"nunito" ,sans-serif;
    color:  #d80c0c;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 40vw;
    margin-right: 2vw;

}

.textNC{
    font-size: 1vw;
    font-family:"nunito" ,sans-serif;
    color:  #ffffff;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 40vw;
    margin-right: 2vw;
}
.dateNC{
    font-size: 1.1vw;
    font-family:"nunito" ,sans-serif;
    color:  #ffffff;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 0.8vw;
}
</style>