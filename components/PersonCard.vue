<template>
    <NuxtLink :to = "link" class="nuxtclassPC">
        <div class="cardPC">
        
        <div class="image-containerPC">
            <img class="imgPC" :src="`${image}`">
        </div>
        <span class="namePC">{{name}}</span>
        <span class="rolePC">{{role}}</span>
    
        </div>
  </NuxtLink>
</template>

<script setup>
    import { defineProps } from 'vue';
    defineProps(["name", "role", "link", "image"])
    
</script>

<style>



.image-containerPC
{
    display: flex;
    justify-content: center;
    width: 18vw;
    height: 16.3vw;
    margin-left: 0vw;
    position: relative;
    overflow: hidden;
}


.imgPC
{
    vertical-align: middle;
    max-width: 140%;
    max-height: 110%;
    height: auto;
    width: auto;
    margin-bottom:2vw;
    transition: transform 0.2s;
    transform-origin: bottom;
}

.image-containerPC:hover .imgPC {
  transform: scale(1.1);

}
.cardPC
{
    margin-top:1.5vw;
    margin-left: 1.6vw;
    margin-right: 2vw;
    margin-bottom: 3vw;
    display: flex;
    flex-flow: column;
    padding-top: -1vw;
    border: 1.7px solid #BBFB1E;
    width: 18vw;
    height: 20vw;
    background-color:   #020122;
    transition: background-color 0.2s;
    /*clip-path: polygon(12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%);*/

}



.cardPC:hover {
background-color: #BBFB1E;


}

.namePC
{
    font-size: 1.2vw;
    font-family: "stretch_pro", sans-serif;
    text-transform: uppercase;
    color: #BBFB1E;
    font-weight:bold;
    margin-top:-1.4vw;
    margin-left: 0.8vw;
    font-weight:500;
    transition:color 0.2s;
}

.cardPC:hover .namePC{
    font-size: 1.2vw;
    font-family: "stretch_pro", sans-serif;
    text-transform: uppercase;
    color:  #020122;
    font-weight:bold;
    margin-top:-1.4vw;
    margin-left: 0.8vw;
    font-weight:500;
    transition:color 0.2s;
}

.rolePC
{
    font-size: 1vw;
    font-family:"nunito" ,sans-serif;
    color: #BBFB1E;
    font-weight: 300;
    margin-top: -0.2vw;
    margin-left: 0.8vw;
}

.cardPC:hover .rolePC{
    font-size: 1vw;
    font-family:"nunito" ,sans-serif;
    color:  #020122;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 0.8vw;
}

.captionPC
{
    font-size: 1vw;
    font-family: "nunito", sans-serif;
    color:#BBFB1E;
    margin: 0.3vw;
}
.emailPC
{
    font-size: 1vw;
    font-family: "proxima_nova", sans-serif;
    color: #BBFB1E;
    font-weight: bold;
    margin: 0.3vw;
}
.numberPC
{
    font-size: 1vw;
    font-family: "proxima_nova", sans-serif;
    color: #BBFB1E;
    font-weight: bold;
    margin: 0.3vw;
}

.nuxtclassPC{
    margin: auto;
    margin-right:1vw;
}

.nuxtclassPC{
    text-decoration: none;
}
</style>