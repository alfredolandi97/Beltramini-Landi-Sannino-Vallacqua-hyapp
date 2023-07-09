<template>
    <div class="ContainerTP">
        <span class="pageTP"> TOP PROJECTS/ </span>
        <p class = "titleTP"><span>{{ project.title }}</span></p>
        <p class = "descrPag captionTP"><span>{{ project.info }}</span></p>
        <img class = "imgTP" :src ="`${project.image}`" />
        <div class= "data-containerTP">
            <p id="textField" class = "descTP"><span>{{ project.description }}</span></p>

            <div class="DivLinkTP">
            <NuxtLink class="linkTP" :to="project.link"><span>{{ project.link }}</span></NuxtLink>
            </div>
        </div>

        <div class="row"> 
            <div class="ProjPers1"> Check the supervisor: <NuxtLink class="ProjPers" :to="'/persons/' + project.persons.id">{{ project.persons.name }}</NuxtLink></div>
       
       <div class="AreaPers1"> Check the area: <NuxtLink class="AreaPers" :to="'/areas/' + project.areas.id"> {{ project.areas.name }}  </NuxtLink></div>

        </div>
        <p class="parEndPag"> You are on the Description Project page.</p>
    </div>
    

   
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


.AreaPers{
   text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#ffffff;
   position: relative;
   top: 0vw;
   left: 0vw;
}

.ProjPers{
   text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#ffffff;
   position:relative;
   
}
.ProjPers1{
   text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#BBFB1E;
   position: relative;
   top: 5vw;
   left: -55vw;

}

.AreaPers1{
    text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#BBFB1E;
   position: relative;
   top: 3.5vw;
   left: 9vw;
   margin-bottom: 2vw;
  
}

.linkTP{
font-family: "nunito", sans-serif;
font-size: 1vw;
color: #ffffff;

}

.DivLinkTP{
   position: relative;
   left: 25vw;
   top: 10.2vw;
}


</style>