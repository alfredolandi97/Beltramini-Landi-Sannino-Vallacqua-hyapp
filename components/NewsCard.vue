<template>
    <NuxtLink :to="link" class="nuxtclassNEWS">
        <div class="cardNC">
           
            <div class="containerNC">
                <img class="imgNC" :src="`${props.image}`" />
                <span class="titleNC">{{title}}</span>
                <span class="captionNC">{{caption}}</span>
                <span class="dateNC">{{date}}</span>
            </div>
        </div>
    </NuxtLink>
   
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(["title", "caption", "date", "link", "image"])
</script>

<style scoped>


.containerNC{
    display: flex;
    flex-flow:column;
 
}

.imgNC
{
    width: 68vw;
    height: 16vw;
    float: left;
    clip-path: inset(0vw 19vw 0vw 19vw);
    margin-left: -17vw;
    margin-top: 1vw;
   

  
}

.cardNC
{
    display: flex;
    flex-flow: column;
    padding: 20px;
    border-top: 2px solid #BBFB1E;
    border-bottom: 2px solid #BBFB1E;
    width: fit-content;
    height: fit-content;
    margin-bottom: -1px;
    width: 103.39%;
    height: 18vw;
    margin-left: -3.1vw;
    transition: background-color 0.2s;

}


.cardNC:hover{
      background-color:#BBFB1E;  
     
}

.titleNC
{
font-size:1.8vw;
color: #BBFB1E;
margin-left:10vw;
font-family: "stretch_pro", sans-serif;
text-transform: uppercase;
margin-top: -16.6vw;
margin-left: 35vw;
margin-right: 2vw;
transition:color 0.2s;



}

.cardNC:hover .titleNC{
font-size:1.8vw;
color:#020122;
margin-left:10vw;
font-family: "stretch_pro", sans-serif;
text-transform: uppercase;
margin-top: -16.6vw;
margin-left: 35vw;
margin-right: 2vw;


}

.captionNC{
    font-size: 1.5vw;
    font-family:"nunito" ,sans-serif;
    color: #ffffff;
    font-weight: 400;
    margin-top: 1vw;
    margin-left: 35vw;
    margin-right: 2vw;
    text-decoration: none;
    

}


.cardNC:hover .captionNC{
    font-size: 1.5vw;
    font-family:"nunito" ,sans-serif;
    color:#020122;
    font-weight: 400;
    margin-top: 1vw;
    margin-left: 35vw;
    margin-right: 2vw;
    text-decoration: none;
  

}

.dateNC{
    font-size: 1.1vw;
    font-family:"nunito" ,sans-serif;
    color:  #ffffff;
    font-weight: 400;
    margin-top: 8vw;
    margin-left: 84vw;
    

}


.cardNC:hover .dateNC{
    font-size: 1.1vw;
    font-family:"nunito" ,sans-serif;
    color:#020122;
    font-weight: 400;
    margin-top: 8vw;
    position: relative;
    margin-left: 84vw;
}


.nuxtclassNEWS{

    text-decoration: none;
}


</style>