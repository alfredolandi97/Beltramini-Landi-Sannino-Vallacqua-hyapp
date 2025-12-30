<template>
    <Head>
        <Title>{{ project.title }} - NextFund</Title>
        <Meta name="author" content="Alfredo Landi" />
    </Head>
    <div class="ContainerTP">
        <div class="pagNamTP">
        <span class="pageTP"> TOP PROJECTS/ </span>
        <p class = "titleTP"><span>{{ project.title }}</span></p>
        </div>
        <p class = "descrPag captionTP"><span>{{ project.info }}</span></p>
        <div class= "data-containerTP">
            <img class = "imgTP" :src ="`${project.image}`" />
            <p id="textField" class = "descTP"><span>{{ project.description }}</span></p>

            

        <div class="row"> 
            <div class="ProjPers1"> Check the supervisor: <NuxtLink class="ProjPers" :to="'/persons/' + project.persons.id">{{ project.persons.name }}</NuxtLink></div>
       
       <div class="AreaPers1"> Check the area: <NuxtLink class="AreaPers" :to="'/areas/' + project.areas.id"> {{ project.areas.name }}  </NuxtLink></div>
        </div>

        <div class="DivLinkTP">
                <NuxtLink class="linkTP" :to="project.link"><span>{{ project.link }}</span></NuxtLink>
            </div>
        </div>
        <p class="parEndPag"> You are on the Description Project page.</p>
    </div>
    

   
</template>



<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: project} = await useFetch('/api/topprojects/' + id)

</script>

<style scoped>

.ContainerTP{

display: flex;
flex-direction: column;
margin-bottom: 3vw;

}


.imgTP{
    width: 60%;
    height: 50%;
    margin-bottom: 1.6vw;
    float: left;
    
}

.pagNamTP {
    display: flex;
    flex-direction: column;
    margin-top: 3vw;
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


-webkit-text-stroke-width: 1.1px; 
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
top: -1.5vw;
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

.row{
    display: flex;
    flex-direction: row;
}


.ProjPers1{
   text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#BBFB1E;
   position: relative;
   top: 6.5vw;
   margin-left: -55vw;

}


.AreaPers1{
   text-decoration: none;
   text-transform: uppercase;
   font-family: "stretch_pro", sans-serif;
   font-size: 1.1vw;
   color:#BBFB1E;
   position: relative;
   top: 6.5vw;
   margin-left: 27vw;
   margin-bottom: 2vw;
   
  
}

.linkTP{
font-family: "nunito", sans-serif;
font-size: 1vw;
color: #ffffff;
position: relative;
top: -14.5vw;
left: -21.8vw;

}

.DivLinkTP{
   position: relative;
   top: 10.2vw;
   margin-left: 80vw;
}

.parEndPag{
  font-family: "nunito", sans-serif;
  font-size: 1vw;
  position: relative;
  top: 6vw;
}

</style>