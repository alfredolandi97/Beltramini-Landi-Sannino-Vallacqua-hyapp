<template>
    <NuxtLink to = "/about" class="nuxtclassAC">
    <div class="cardAC">
        <div class="imageAC">
            <img class="imgAC" :src="getImagePath()"/>
        </div>
       <div class="textWrapper">
             <span class="AC-name">{{name}}</span>
       </div>
       <div class="infoDescWrapper">       
             <span class="AC-info">{{info}}</span>
       </div>       
          
    </div>
    </NuxtLink>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(["name", "info", "description", "image"])

    function getImagePath() {
        return new URL(`../assets/img/areas/${props.image}`, import.meta.url)
    }
</script>

<style>

.cardAC
{
      width: 100.3vw;
      height: 10vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid #C0FF3B;
      margin-left: -1vw;
      margin-top: 1vw;
      transition: background-color 0.5s;
}

.cardAC:hover{
      background-color:#C0FF3B;;
      opacity:1;
      
}



.imageAC
{
    display: flex;
    justify-content: center;
    padding: 1vw;
    width: 10%;
    height: 45%;
    filter: invert(100%);
    margin-bottom: -1%;
   
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
  margin-left: 62vw;
  margin-top:-8.5vw;
  margin-right:2vw;
}

.AC-name
{
          text-transform: uppercase;
          position:relative;
          bottom:0.4vw;
          font-size: 3.8vw;
          /* per creare lo spessore nel testo*/
          -webkit-text-stroke-width: 1px; /* Spessore del contorno */
          -webkit-text-stroke-color:#C0FF3B;
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
          -webkit-text-stroke-color: #05041D;
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
    color:rgb(226, 230, 188);
    font-family: "helvetica11" sans-serif;
    
}

.cardAC:hover .AC-info{
color:#05041D;
font-size: 1.5vw;
font-family: "helvetica11" sans-serif;

}
.nuxtclassAC{
    text-decoration: none;
}
</style>