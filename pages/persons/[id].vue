<template>
    <main>
        <div class = "info-group">
            <div id = "data-container">
                <span class="pageDP"> OUR TEAM / </span>
                <p class = "namePD"><span>{{ person.name }}</span></p>
                <p class="descrPag">Please, check out the profiles of our esteemed team members, which include their insightful biographies and reliable contact information.</p>
                <p class = "rolePD"> <span>{{ person.role }}</span></p>
                <img class = "imgDP" :src ="`${person.image}`"/>
                <p id="textField" class="captionPD"><span> {{ person.caption }}</span></p>
                <p id="textField" class = "bioPD"><span>{{ person.bio }}</span></p>
                <p class = "numberPD"><span>{{ person.number }}</span></p>
                <p class = "emailPD1"><span>{{ person.email }}</span></p>
            </div>
            <div v-if="`${person.projects}`">
                <h2 class="textPD1">SUPERVISED PROJECTS</h2>
                <div class="projectPC">
                    <ProjectIntro v-for="project of person.projects" :logo="project.logo" :link="'/topprojects/' + project.id" class="projectIntro" />
                </div>
            </div>
        </div>
    </main>
    <p class="parEndPag"> You are on the Description Persons page.</p>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: person} = await useFetch('/api/persons/' + id)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>

<style scoped>
.imgDP{

width: 58vw;
height: 38vw;
margin-left: 0vw;
clip-path: polygon(0 0, 94% 0, 100% 8%, 100% 100%, 6% 100%, 0 92%);
float: left;
margin-top: 1vw;
margin-bottom: -20vw;
}

.pageDP{

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

.namePD{

font-size:3.3vw;
color: #BBFB1E;
font-family: "stretch_pro", sans-serif;
margin-top:-0.1vw;
margin-bottom: 1.4vw;
text-transform: uppercase;
margin-top: -1vw;
margin-bottom: 6vw;


}

.rolePD{

    font-family: "stretch_pro", sans-serif;
    font-size: 1.1vw;
    text-transform: uppercase;
    margin-left: 61vw;
    margin-bottom: -2.3vw;
}


.bioPD{

font-family: "nunito", sans-serif;
font-size: 1.5vw;
line-height: 1.6vw;
margin-bottom: 25vw;
margin-top: 10vw;
text-align: justify;
}

.emailPD1{
font-family: "nunito", sans-serif;
font-size: 1.5vw;
margin-left: 61vw;
margin-bottom: -10vw;
position: relative;
bottom: 33vw;


}


.numberPD{
    font-size: 1.5vw;
    font-family: "nunito", sans-serif;
    margin-top: -25vw;
    margin-left: 61vw;
    position: relative;
    bottom: 27vw;
}

.captionPD{
margin-left: 61vw;
margin-top: 4vw;
font-size: 1.5vw;
font-family: "nunito", sans-serif;
line-height: 1.6vw;
text-align: justify;
}

.projectPC {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5vw;
  position: relative;
  top: 10vw;
}


.textPD1{
  position: relative;
  top: 9vw;
}

.projectIntro{
    padding-left: 5vw;
    position: relative;
    left: -5vw;
    
}
</style>


