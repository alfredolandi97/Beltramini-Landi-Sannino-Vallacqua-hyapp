<template>
    <NuxtLink :to="link" class="nuxtclassAC">
        <div class="cardAC">
            <div class="imageAC">
                <img class="imgAC" :src="`${props.icon}`" />
            </div>
            <div class="textWrapper">
                <span class="AC-name">{{ name }}</span>
            </div>

            <div class="infoDescWrapper">
                <span class="AC-info">{{ info }}</span>
            </div>
        </div>
    </NuxtLink>
    <div class="projectIntroContainer">

        <span><p class="ACPar">EXPLORE THE PROJECTS</p></span>
        
        <ProjectIntro v-for="project of projects" :logo="project.logo" :link="'/topprojects/' + project.id"  class="projectIntroConInt"/>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';
const props = defineProps(["name", "info", "description", "link", "projects", "icon"])
</script>

<style scoped>


.cardAC {
    width: 106.5%;
    height: 10vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #BBFB1E;
    margin-top: -1px;
    margin-left: -3.1vw;
    transition: background-color 0.5s;

}

.cardAC:hover {
    background-color: #BBFB1E;
    opacity: 1;
    border: 1px solid #020122;

}



.imageAC {
    display: flex;
    justify-content: center;
    padding: 1vw;
    width: 10%;
    height: 42%;
    filter: invert(100%);
    margin-bottom: 0vw;
    position: relative;
    top: 1vw;

}


.cardAC:hover .imageAC {
    filter: invert(0%);
}

.imgAC {
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    margin-left: -30%;

}



.textWrapper {
    display: flex;
    flex-direction: center;
}

.AC-name {
    text-transform: uppercase;
    position: relative;
    bottom: 0.4vw;
    font-size: 3.8vw;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #BBFB1E;
    color: transparent;
    background-clip: text;
    font-family: "stretch_pro", sans-serif;
    font-weight: 800;
    margin-left: -4vw;
    margin-top: 2vw;
    transition: color 0.5s;
}

.cardAC:hover .AC-name {
    position: relative;
    bottom: 0.4vw;
    font-size: 3.8vw;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #020122;
    color: transparent;
    background-clip: text;
    font-family: "stretch_pro", sans-serif;
    font-weight: 800;
    margin-left: -4vw;
    margin-top: 2vw;
    transition: color 0.5s;
}

.infoDescWrapper {
  display: flex;
  flex-direction:column;
  margin-left: 61vw;
  margin-top:-8.5vw;
  margin-right:4vw;
}

.AC-info{
    font-size: 1.5vw;
    color:#F8F0FB;
    font-family: "nunito", sans-serif;
    
}

.cardAC:hover .AC-info{
color:#020122;
font-size: 1.5vw;
font-family: "nunito", sans-serif;

}


.nuxtclassAC{
    text-decoration: none;
}

.ACPar{
    font-family: "stretch_pro", sans-serif;
    font-size: 1vw;
    position: relative;
    top: 1.9vw;
    left: 8vw;
}
.projectIntroContainer{
    display: flex;
    flex-direction: row;
    background-color: #6320EE;
    width: 106.4%;
    margin-left: -3vw;

    
}

.projectIntroConInt{
    margin-left: 3vw;
    position: relative;
    left: 19vw;
    
}
</style>