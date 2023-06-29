<template>
    <div>
        <span class="pageTP"> TOP PROJECTS/ </span>
        <p class = "titleTP"><span>{{ project.title }}</span></p>
        <p class = "descrPag captionTP"><span>{{ project.info }}</span></p>
        <img class = "imgTP" :src ="`${project.image}`" />
        <div class= "data-containerTP">
            <p class = "descTP"><span>{{ project.description }}</span></p>
            <p class = "linkTP"><span>{{ project.link }}</span></p>
        </div>
     </div>
     <p class="parEndPag"> You are on the Description Persons page.</p>
</template>



<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: project} = await useFetch('/api/topprojects/' + id)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>

<style>

.imgTP{
    width: 100%;
    margin-bottom: 1.6vw;
    height: 40vw;
}

.titleTP{
font-size:3.3vw;
color: #BBFB1E;
font-family: "stretch_pro", sans-serif;
margin-top:-0.1vw;
margin-bottom: 1.4vw;
text-transform: uppercase;
margin-top: -1vw;
margin-bottom: 6vw;
}


.pageTP{

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


.descTP{

font-family: "nunito", sans-serif;
font-size: 1.5vw;
line-height: 1.6vw;
text-align: justify;
margin-bottom: -4vw;
}

.linkTP{
font-family: "nunito", sans-serif;
font-size: 1vw;
margin-top: 4vw;
margin-left: 82.5vw;
position: relative;
top: 9.5vw;
}
</style>