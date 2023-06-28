<template>
    <div>
        <span class="pageNW"> NEWS/ </span>
        <p class = "titleNW"><span>{{ news.title }}</span></p>
        <p class="descrPag captionNW"><span>{{ news.caption }}</span></p>
        <img class= "imgNW" :src ="`${news.image}`" />
        <div class = "data-containerNW">
            <p class = "textNW"><span>{{ news.text }}</span></p>
            <p class = "dateNW"><span>{{ news.date }}</span></p>
        </div>
     </div>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: news} = await useFetch('/api/news/' + id)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>

<style>

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

/* per creare lo spessore nel testo*/
-webkit-text-stroke-width: 1.1px; /* Spessore del contorno */
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
margin-top: 4vw;
margin-left: 86vw;
}
</style>