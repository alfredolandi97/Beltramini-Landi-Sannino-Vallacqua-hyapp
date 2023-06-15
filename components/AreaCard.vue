<template>
    <div class="cardAC">
        <div class="imageAC">
            <img class="imgAC" :src="getImagePath()"/>
        </div>
       <div class="textWrapper">
             <span class="AC-name">{{name}}</span>
       </div>
       <div class="infoDescWrapper">       
             <span class="AC-info">{{info}}</span>
             <span class="AC-desc">{{description}}</span> 
       </div>       
          
    </div>
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
      height: 180px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid #C0FF3B;
      margin-left: -8px;
      margin-top: 10px;
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
    padding: 2px;
    width: 70px;
    height: 70px;
    filter: invert(100%);
   
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
    margin-left: 100px;
    
}



.textWrapper {
    display: flex;
    flex-direction:center;
    margin-left: 20px;
}

.infoDescWrapper {
  display: flex;
  flex-direction:column;
  margin-left: 1300px;
  margin-top:-150px;
  margin-right:40px;
}

.AC-name
{
          text-transform: uppercase;
          position:relative;
          bottom:5px;
          font-size: 100px;
          /* per creare lo spessore nel testo*/
          -webkit-text-stroke-width: 2.5px; /* Spessore del contorno */
          -webkit-text-stroke-color:#C0FF3B;
          color: transparent;
          background-clip: text;
          font-family: "Roboto", sans-serif;
          font-weight:800;
          margin-left: 80px;
          margin-top:20px;
          transition:color 0.5s;
}


.cardAC:hover .AC-name{
          position:relative;
          bottom:5px;
          font-size: 100px;
          /* per creare lo spessore nel testo*/
          -webkit-text-stroke-width: 4px; /* Spessore del contorno */
          -webkit-text-stroke-color: #05041D;
          color: transparent;
          background-clip: text;
          font-family: "Roboto", sans-serif;
          font-weight:800;
          margin-left: 80px;
          transition:color 0.5s;
}
.AC-info{
    font-size: 25px;
    color:rgb(226, 230, 188);
    
}

.cardAC:hover .AC-info{
color:#05041D;
font-size: 26px;
}

.AC-desc{
    font-size: 15px;
    color: rgb(255, 255, 255);
}

.cardAC:hover .AC-desc{
color: #05041D;
font-size: 16;
}
</style>