<template>
    <div class="ContainerNW">
        <span class="pageNW"> NEWS/ </span>
        <p class = "titleNW"><span>{{ news.title }}</span></p>
        <p class="captionNW"><span>{{ news.caption }}</span></p>
        <img class= "imgNW" :src ="`${news.image}`" />
        <div class = "data-containerNW">
            <p id="textField" class = "textNW"><span>{{ news.text }}</span></p>
            <p class = "dateNW"><span>{{ news.date }}</span></p>
        </div>
        <p class="parEndPag">You are on the Description News page.</p>
     </div>
    
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: news} = await useFetch('/api/news/' + id)
    console.log(news)



</script>

<style scoped>

.imgNW{
    width: 100%;
    margin-bottom: 1.6vw;
}

.titleNW{
font-size:3.3vw;
color: #BBFB1E;
font-family: "stretch_pro", sans-serif;
margin-top:-0.1vw;
margin-bottom: 1.4vw;
text-transform: uppercase;
margin-top: -1vw;
margin-bottom: 6vw;
}


.pageNW{

font-size: 1.5vw;


-webkit-text-stroke-width: 1.1px; 
-webkit-text-stroke-color:#BBFB1E;
color: transparent;
background-clip: text;
font-family: "stretch_pro", sans-serif;
position: relative;
top: -1.6vw;
}


.textNW{

font-family: "nunito", sans-serif;
font-size: 1.5vw;
line-height: 1.6vw;
text-align: justify;
}

.dateNW{
font-family: "nunito", sans-serif;
font-size: 1vw;
margin-left: 86vw;
position: relative;
top: 3vw;
}

.captionNW{
    white-space: pre-line;
    font-family: "nunito", sans-serif;
    font-size: 1.5vw;
}

.parEndPag{
  font-family: "nunito", sans-serif;
  font-size: 1vw;
  margin-bottom: 0vw;
  position: relative;
  top: 0vw;
}

.ContainerNW{
    margin-bottom: 1.8vw;
}


</style>