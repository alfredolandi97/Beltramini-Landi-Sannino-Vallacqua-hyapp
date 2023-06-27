<template>
    <div class="cardNC">
       <div class="containerNC">
        <img class="imgNC" src="" />
        <span class="titleNC">{{title}}</span>
        <span class="captionNC">{{caption}}</span>
        <span class="textNC">{{text}}</span>
        <span class="dateNC">{{date}}</span>
       </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(["title", "caption", "text", "date"])
</script>

<style>
.containerNC{
    display: flex;
    flex-flow:column;
}
.imgNC
{
    width: 33vw;
    float: left;
  
}

.cardNC
{
    display: flex;
    flex-flow: column;
    padding: 20px;
    border: 2px solid #BBFB1E;
    width: fit-content;
    height: fit-content;
    margin-bottom: -1px;
    width: 104%;
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
margin-top: -18vw;
margin-left: 42vw;
margin-right: 2vw;
transition:color 0.2s;

}

.cardNC:hover .titleNC{
font-size:1.8vw;
color:#020122;
margin-left:10vw;
font-family: "stretch_pro", sans-serif;
text-transform: uppercase;
margin-top: -18vw;
margin-left: 42vw;
margin-right: 2vw;
}

.captionNC{
    font-size: 1.1vw;
    font-family:"nunito" ,sans-serif;
    color:  #d80c0c;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 42vw;
    margin-right: 2vw;

}

.textNC{
    font-size: 1vw;
    font-family:"nunito" ,sans-serif;
    color:  #ffffff;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 42vw;
    margin-right: 2vw;
}

.cardNC:hover .textNC{
    font-size: 1vw;
    font-family:"nunito" ,sans-serif;
    color:#020122;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 42vw;
    margin-right: 2vw;
}


.dateNC{
    font-size: 1.1vw;
    font-family:"nunito" ,sans-serif;
    color:  #ffffff;
    font-weight: 400;
    margin-top: -0.2vw;
    margin-left: 0.8vw;
}
</style>