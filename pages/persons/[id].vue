<template>
    <main>
        <div class = "info-groupOT">

                <div class="pagNamOT">
                <span class="pageOT"> OUR TEAM / </span>
                <span class = "nameOT"> <span>{{ person.name }}</span></span>
                </div>
                <span> <p class="descrPag"> Please, check out the profiles of our esteemed team members, which include their insightful biographies and reliable contact information.</p></span>
                <span class = "roleOT"> <span>{{ person.role }}</span></span>
                <div>
                    <img class = "imgOT" :src ="`${person.image}`"/>
                    <span id="textField" class="captionOT"><span> {{ person.caption }}</span></span>
                </div>
                <div>
                <span class="numEmaOT">
                    <span class = "numberOT"><span>{{ person.number }}</span></span>
                    <span class = "emailOT"><span>{{ person.email }}</span></span>
                </span>
                </div>

                
                <span id="textField"  class = "bioOT"><span>{{ person.bio }}</span></span>
                

            </div>

            
           
            <div v-if="`${person.projects}`" class="projectOT">
                <span class="textOT" > <p> SUPERVISED PROJECTS </p></span>
                

                    <div class="projectOTIN">
                    <ProjectIntro v-for="project of person.projects" :logo="project.logo" :link="'/topprojects/' + project.id" class="projectIntroOT" />
                   </div>
        </div>
    </main>
    <p class="parEndPag"> You are on the Description Persons page.</p>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: person} = await useFetch('/api/persons/' + id)

    

</script>

<style scoped>

.info-groupOT{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: -2vw;
      
}

.pagNamOT{
    display: flex;
    flex-direction: column;
}
.pageOT{

font-size: 1.5vw;
-webkit-text-stroke-width: 1.1px;
-webkit-text-stroke-color:#BBFB1E;
color: transparent;
background-clip: text;
font-family: "stretch_pro", sans-serif;
position: relative;
top: -1.5vw;
}


.nameOT{

font-size:3.3vw;
color: #BBFB1E;
font-family: "stretch_pro", sans-serif;
text-transform: uppercase;
margin-bottom: -1.5vw;
position: relative;
top: -2.5vw;
}

.imgOT{

width: 56vw;
height: 41vw;
clip-path: polygon(0 0, 94% 0, 100% 8%, 100% 100%, 6% 100%, 0 92%);
float: left;
margin-top: 0.5vw;
position: relative;
top: -1.8vw;
}

.roleOT{

font-family: "stretch_pro", sans-serif;
font-size: 1.1vw;
text-transform: uppercase;
position: relative;
left: 59vw;
}


.captionOT{
font-size: 1.5vw;
font-family: "nunito", sans-serif;
line-height: 1.6vw;
position: relative;
bottom: -2vw;
left: 3vw;
text-align: justify;
}

.numEmaOT{
display: flex;
flex-direction: column;
position: relative;
bottom: 6vw;
left: 59vw;
}

.emailOT,
.numberOT{
font-family: "nunito", sans-serif;
font-size: 1.5vw;
}



.bioOT{

font-family: "nunito", sans-serif;
font-size: 1.5vw;
line-height: 1.6vw;
text-align: justify;
position: relative;
top:-2vw;

}
.projectOT {
margin-left: -6vw;

  
}
.textOT{
  position: relative;
  left: 6vw;
  top: 2vw;
  font-family: "stretch_pro", sans-serif;
  font-size: 1.1vw;
  color: #BBFB1E;


}

.projectOTIN{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;
  left: 32vw;
}

.projectIntroOT{
    padding-left: 6vw;
    position: relative;
    top: 3vw;
    left: -31vw;
 

}

.parEndPag{
  font-family: "nunito", sans-serif;
  font-size: 1vw;
  position: relative;
  top: 3vw;
}
</style>


