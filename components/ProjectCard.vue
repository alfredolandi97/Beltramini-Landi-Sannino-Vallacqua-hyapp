<template>
    <NuxtLink :to = "link" class="nuxtclassProJC">
        <div class="cardProJC">

            <div class="image-containerProJC">
                <img class="imgProJC" :src="`${props.logo}`">
            </div>
            <p><span class="titleProJC">{{title}}</span></p>
            <p><span class="area_nameProJC">{{area_name}}</span></p>
            <p><span class="infoProJC">{{info}}</span></p>
            
        </div>
    </NuxtLink>
    
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(["title", "area_name", "info", "link", "logo"])
</script>


<style>

.image-containerProJC
{
    display: flex;
    justify-content: center;
    width: 18vw;
    height: 16.3vw;
    margin-left: 0vw;
    position: relative;
}


.imgProJC
{
    vertical-align: middle;
    max-width: 140%;
    max-height: 110%;
    height: auto;
    width: auto;
    margin-bottom:2vw;
    
}

.cardProJC
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
    overflow: hidden;
    /*clip-path: polygon(12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%);*/

}



.cardProJC:hover {
background-color: #BBFB1E;



}


.cardProJC:hover .image-containerProJC{
    transform: scale(1.1);
    transform-origin: bottom;
    overflow: hidden;
    transition: transform 0.2s;
}

.titleProJC
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

.cardProJC:hover .titleProJC{
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

.area_nameProJC
{
    font-size: 1vw;
    font-family:"nunito" ,sans-serif;
    color: #BBFB1E;
    font-weight: 300;
    margin-top: -0.2vw;
    margin-left: 0.8vw;
}

.cardProJC:hover .area_nameProJC{
    font-size: 1vw;
    font-family:"nunito" ,sans-serif;
    color:  #020122;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 0.8vw;
}

.infoProJC
{
    font-size: 1vw;
    font-family: "nunito", sans-serif;
    color:#020122;
    margin: 0.3vw;
}

.cardProJC:hover .infoProJC{
    font-size: 1vw;
    font-family: "nunito", sans-serif;
    color:#BBFB1E;
    margin: 0.3vw;
}

.nuxtclassProJC{
    margin: auto;
    margin-right:1vw;
}

.nuxtclassProJC{
    text-decoration: none;
}


</style>