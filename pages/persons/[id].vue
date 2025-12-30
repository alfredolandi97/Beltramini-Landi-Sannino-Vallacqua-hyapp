<template>
    <Head>
        <Title>{{ person.name }} - NextFund</Title>
        <Meta name="author" content="Alfredo Landi" />
    </Head>
    <main>
        <div class = "info-group">
            <div id = "data-container">
                <span class="pageDP"> OUR TEAM / </span>
                <p class = "namePD"><span>{{ person.name }}</span></p>
                <p class="descrPag">Please, check out the profiles of our esteemed team members, which include their insightful biographies and reliable contact information.</p>
                <div class="row">
                    <img class = "imgDP" :src ="`${person.image}`"/>
                <div class="column">
                    <p class = "rolePD"> <span>{{ person.role }}</span></p>
                    <p id = "textField" class="captionPD"><span> {{ person.caption }}</span></p>
                    <p class = "numberPD"><span>{{ person.number }}</span></p>
                    <p class = "emailPD1"><span>{{ person.email }}</span></p>
                </div>
                </div>
                
                
                <p id = "textField" class = "bioPD"><span>{{ person.bio }}</span></p>
                
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
    margin-bottom: -2.3vw;
}


.bioPD{

font-family: "nunito", sans-serif;
font-size: 1.5vw;
line-height: 1.6vw;
margin-right: -3vw;
position: relative;
top: 0vw;
white-space: inherit;
}

.emailPD1{
font-family: "nunito", sans-serif;
font-size: 1.5vw;
}


.numberPD{
    font-size: 1.5vw;
    font-family: "nunito", sans-serif;
}

.captionPD{
margin-top: 4vw;
font-size: 1.5vw;
font-family: "nunito", sans-serif;
line-height: 1.6vw;
white-space: pre-line;
}

.projectPC {
  display: flex;
  flex-direction: row;
}


.textPD1{

    margin-top: 7vw;
}

.column{
    margin-left: 4vw;
    display: flex;
    flex-direction: column;
}

.row{
    display: flex;
    flex-direction: row;
}
</style>