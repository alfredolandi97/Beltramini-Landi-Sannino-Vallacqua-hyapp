<template>
    <main>
        <div class = "info-groupDAC">
            <span class="pageDAC"> INVESTMENT AREAS/</span>
            <p class = "nameDAC"><span>{{ area.name }}</span></p>
            <p class = "descrPag captionDAC"><span>{{ area.info }}</span></p>
            <img class = "imgDAC" :src ="`${area.image}`" />
            <div class = "data-containerDAC">
            <p class = "descDAC"><span>{{ area.description }}</span></p>
            </div>
        </div>
        <!-- TO-DO: mettere i related projects-->
    </main>
    <p class="parEndPag"> You are on the Description Areas page.</p>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: area} = await useFetch('/api/areas/' + id)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>

<style>

.pageDAC{

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


.imgDAC{
    width: 100%;
    margin-bottom: 1.6vw;
}

.nameDAC{
font-size:3.3vw;
color: #BBFB1E;
font-family: "stretch_pro", sans-serif;
margin-top:-0.1vw;
margin-bottom: 1.4vw;
text-transform: uppercase;
margin-top: -1vw;
margin-bottom: 6vw;
}


.pageDAC{

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


.descDAC{

font-family: "nunito", sans-serif;
font-size: 1.5vw;
line-height: 1.6vw;
text-align: justify;
}

</style>