<template>
    <div class="allContPROJ">
    <NuxtLink :to = "link" class="nuxtclassPROJ">
        <div class="cardPROJ">
        
        <div class="image-containerPROJ">
            <img class="imgPROJ" :src="`${props.logo}`">
        </div>
        <span class="titlePROJ">{{title}}</span>
        <span class="areaPROJ">{{area_name}}</span>
    
        </div>
  </NuxtLink>
</div>
</template>

<script setup>
    const props = defineProps(["title", "area_name", "info", "link", "logo"])
</script>

<style scoped>

.allContPROJ{

    display: flex;
 flex-wrap: wrap;
}

.image-containerPROJ
{
    display: flex;
    justify-content: center;
    width: 18vw;
    height: 15vw;
    margin-left: 0vw;
    position: relative;
    border: 1.7px solid #BBFB1E;
    border-top: none;
    border-left: none;
    background-color:#020122;
}

.cardPROJ:hover{
background-color: #BBFB1E;

}

.imgPROJ
{
    vertical-align: middle;
    max-width: 75%;
    max-height: 50%;
    height: auto;
    width: auto;
    position: relative;
    top: 3.5vw;
   

    
   
}



.cardPROJ
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



.cardPROJ:hover {
background-color: #BBFB1E;

}


.cardPROJ:hover .image-containerPROJ{
    transform: scale(1.1);
    transform-origin: bottom;
    overflow: hidden;
    transition: transform 0.2s;
}

.titlePROJ
{
    font-size: 1.2vw;
    font-family: "stretch_pro", sans-serif;
    text-transform: uppercase;
    color: #BBFB1E;
    font-weight:bold;
    margin-top:0.2vw;
    margin-left: 0.8vw;
    font-weight:500;
    transition:color 0.2s;
}

.cardPROJ:hover .titlePROJ{
    font-size: 1.2vw;
    font-family: "stretch_pro", sans-serif;
    text-transform: uppercase;
    color:  #020122;
    font-weight:bold;
    margin-top:0.2vw;
    margin-left: 0.8vw;
    font-weight:500;
    transition:color 0.2s;
}

.areaPROJ
{
    font-size: 1vw;
    font-family:"nunito" ,sans-serif;
    color: #BBFB1E;
    font-weight: 300;
    margin-top: -0.2vw;
    margin-left: 0.8vw;
}

.cardPROJ:hover .areaPROJ{
    font-size: 1vw;
    font-family:"nunito" ,sans-serif;
    color:  #020122;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 0.8vw;
}

.nuxtclassPROJ{
    margin: auto;
    margin-right:1vw;
}

.nuxtclassPROJ{
    text-decoration: none;
}
</style>