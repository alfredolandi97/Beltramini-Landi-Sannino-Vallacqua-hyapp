<template>
    <div class="cardPC">
        
        <div class="image-containerPC">
            <img class="imgPC" src="~/assets/img/about/papa_francesco_02-696x557.jpg">
        </div>
        <span class="namePC">{{name}}</span>
        <span class="rolePC">{{role}}</span>
        <!-- <span class="captionPC">{{caption}}</span>-->
        <!-- <span class="emailPC">{{email}}</span>-->
        <!-- <span class="numberPC">{{number}}</span> -->
        <NuxtLink :to = "link" class="nuxtclassPC">
        <button class="buttonPC">More Info</button>
        </NuxtLink>
    </div>
  
</template>

<script setup>
    import { defineProps } from 'vue';
    defineProps(["name", "role", "email", "number", "image", "caption", "link"])
</script>

<style>



.image-containerPC
{
    display: flex;
    justify-content: center;
    margin: 0vw;
    width: 16vw;
    height: 16vw;
}

.imgPC
{
    vertical-align: middle;
    max-width: 120%;
    max-height: 100%;
    height: auto;
    width: auto;
    margin-bottom:1vw;
}

.cardPC
{
    margin:1.5vw;
    display: flex;
    flex-flow: column;
    padding-top: -1vw;
    border: 0px solid pink;
    width: 17vw;
    max-height: 100%;
    background-color:  #C0FF3B;
    clip-path: polygon(12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%);

}

.namePC
{
    font-size: 2vw;
    font-family: "helvetica11", sans-serif;
    color: #05041D;
    font-weight:bold;
    margin-top:-2vw;
}

.rolePC
{
    font-size: 1.5vw;
    font-family: "helvetica11", sans-serif;
    color: #05041D;
    font-weight: 500;
    margin: 0.3vw;
}

.captionPC
{
    font-size: 1vw;
    font-family: "helvetica11", sans-serif;
    color: #05041D;
    margin: 0.3vw;
}
.emailPC
{
    font-size: 1vw;
    font-family: "helvetica11", sans-serif;
    color: #05041D;
    font-weight: bold;
    margin: 0.3vw;
}
.numberPC
{
    font-size: 1vw;
    font-family: "helvetica11", sans-serif;
    color: #05041D;
    font-weight: bold;
    margin: 0.3vw;
}

.buttonPC{
    background-color: #05041D;    
    color: #C0FF3B;
}
.nuxtclassPC{
    margin: auto;
    margin-right:1vw;
}
</style>