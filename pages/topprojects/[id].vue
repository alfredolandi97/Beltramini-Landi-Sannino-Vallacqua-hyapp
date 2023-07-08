<template>
    <div>
        <span class="pageTP"> TOP PROJECTS/ </span>
        <p class = "titleTP"><span>{{ project.title }}</span></p>
        <p class = "descrPag captionTP"><span>{{ project.info }}</span></p>
        <img class = "imgTP" :src ="`${project.image}`" />
        <div class= "data-containerTP">
            <p id="textField" class = "descTP"><span>{{ project.description }}</span></p>
            <NuxtLink class="linkTP" :to="project.link"><span>{{ project.link }}</span></NuxtLink>
        </div>
        <p class="ProjPers1"> Check the supervisor:</p>
        <p><NuxtLink class="ProjPers" :to="'/persons/' + project.persons.id"> {{ project.persons.name }}</NuxtLink></p>

        <p class="AreaPers1"> Check the area: </p>
        <p><NuxtLink class="AreaPers" :to="'/areas/' + project.areas.id">{{ project.areas.name }}</NuxtLink></p>
     </div>
     <p class="parEndPag"> You are on the Description Project page.</p>
</template>



<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: project} = await useFetch('/api/topprojects/' + id)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>

<style scoped>

.imgTP{
    width: 60%;
    height: 50%;
    margin-bottom: 1.6vw;
    float: left;
    
}


.titleTP{
font-size:3.3vw;
color: #BBFB1E;
font-family: "stretch_pro", sans-serif;
margin-top:-0.1vw;
margin-bottom: 1.4vw;
text-transform: uppercase;
margin-top: -1vw;
margin-bottom: 4vw;
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
margin-right: 2vw;
position: relative;
left: 2.5vw;
}

.linkTP{
font-family: "nunito", sans-serif;
font-size: 1vw;
position: relative;
top: 18.5vw;
left: 24vw;
color: #ffffff;
background-color: pink;
}

.ProjPers1{
   text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#BBFB1E;
   position: relative;
   top: 6.42vw;
   left: -55vw;
}

.AreaPers1{
    text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#BBFB1E;
   position: relative;
   top: 1vw;
   left: 65vw;
}

.ProjPers{
   text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#ffffff;
   position: relative;
   top: 3.8vw;
   left: -33vw;
}

.AreaPers{
    text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#ffffff;
   position: relative;
   top: -1.6vw;
   left: 81vw;
}


</style>