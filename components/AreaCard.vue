
<template>
    <NuxtLink :to = "link" class="nuxtclassAC">
    <div class="cardAC">
        <div class="imageAC">
            <img class="imgAC" :src="`${props.icon}`"/>
        </div>
       <div class="textWrapper">
             <span class="AC-name">{{name}}</span>
       </div>
          
       <div class="infoDescWrapper">       
             <span class="AC-info">{{info}}</span>
       </div>
       <ProjectIntro v-for = "project of projects" :logo="project.logo" :link="'/topprojects/'+project.id"/>
    </div>
</NuxtLink>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(["name", "info", "description", "link", "projects", "icon"])
</script>

<style>

.cardAC
{
      width: 98.92vw;
      height: 10vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid #BBFB1E;
      margin-top: -1px;
      margin-left: -3.1vw;
      transition: background-color 0.5s;

}

.cardAC:hover{
      background-color:#BBFB1E;
      opacity:1;
      
}



.imageAC
{
    display: flex;
    justify-content: center;
    padding: 1vw;
    width: 10%;
    height: 42%;
    filter: invert(98%);
    margin-bottom: -1.1%;
  
   
}

.cardAC:hover .imageAC{
    filter: invert(0%);
      
}

.imgAC
{
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    margin-left: -30%;
   
    
    
}



.textWrapper {
    display: flex;
    flex-direction:center;
}

.infoDescWrapper {
  display: flex;
  flex-direction:column;
  margin-left: 61vw;
  margin-top:-8.5vw;
  margin-right:4vw;
}

.AC-name
{
          text-transform: uppercase;
          position:relative;
          bottom:0.4vw;
          font-size: 3.8vw;
          /* per creare lo spessore nel testo*/
          -webkit-text-stroke-width: 1px; /* Spessore del contorno */
          -webkit-text-stroke-color:#BBFB1E;
          color: transparent;
          background-clip: text;
          font-family: "stretch_pro", sans-serif;
          font-weight:800;
          margin-left: -4vw;
          margin-top:1.5vw;
          transition:color 0.5s;
}


.cardAC:hover .AC-name{
          position:relative;
          bottom:0.4vw;
          font-size: 3.8vw;
          /* per creare lo spessore nel testo*/
          -webkit-text-stroke-width: 2px; /* Spessore del contorno */
          -webkit-text-stroke-color: #020122;
          color: transparent;
          background-clip: text;
          font-family: "stretch_pro", sans-serif;
          font-weight:800;
          margin-left: -4vw;
          margin-top:1.5vw;
          transition:color 0.5s;
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
</style>