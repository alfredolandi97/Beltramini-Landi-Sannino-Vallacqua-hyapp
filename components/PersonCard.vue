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
    width: 16vw;
    height: 16.3vw;
    margin-left: 0.99vw;
}

.imgPC
{
    vertical-align: middle;
    max-width: 130%;
    max-height: 100%;
    height: auto;
    width: auto;
    margin-bottom:2vw;
}

.cardPC
{
    margin-top:1.5vw;
    margin-left: 2.8vw;
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
    font-size: 1.7vw;
    font-family: "nunito", sans-serif;
    text-transform: uppercase;
    color: #BBFB1E;
    font-weight:bold;
    margin-top:-1.8vw;
    margin-left: 0.8vw;
    font-weight:500;
    transition:color 0.2s;
}

.cardPC:hover .namePC{
    font-size: 1.7vw;
    font-family: "nunito", sans-serif;
    text-transform: uppercase;
    color:  #020122;
    font-weight:bold;
    margin-top:-1.8vw;
    margin-left: 0.8vw;
    font-weight:500;
    transition:color 0.5s;
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

.buttonPC{
    background-color:  #BBFB1E;    
    color: #020122;
    border-width: 2px;
    border-color:#BBFB1E;
    border-radius: 4px;
    opacity: 0.8;
    cursor: pointer;
}
.cardPC:hover .buttonPC{
    background-color:   #020122;    
    color: #BBFB1E;
    border-width: 3px;
    border-color: #020122;
    border-radius: 4px;

}
.nuxtclassPC{
    margin: auto;
    margin-right:1vw;
}
</style>