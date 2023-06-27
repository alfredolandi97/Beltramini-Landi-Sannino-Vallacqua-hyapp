<template>
    <main>
        <div class = "info-group">
            <div id = "data-container">
                <span class="pageDP"> OUR TEAM / </span>
                <p class = "namePD"><span>{{ person.name }}</span></p>
                <p class="descrPag">Please, check out the profiles of our esteemed team members, which include their insightful biographies and reliable contact information.</p>
                <img class = "imgDP" :src ="`${person.image}`"/>
                <p class = "rolePD">Breed: <span>{{ person.role }}</span></p>
                <p class = "bioPD">Age: <span>{{ person.bio }}</span></p>
                <p class = "data">Name: <span>{{ person.email }}</span></p>
                <p class = "data">Breed: <span>{{ person.number }}</span></p>
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

<style>
.imgDP{

width: 58vw;
height: 38vw;
margin-left: -3vw;
clip-path: polygon(0 0, 94% 0, 100% 8%, 100% 100%, 6% 100%, 0 92%);
float: left;
}

.pageDP{

    font-size: 1.5vw;
    
    /* per creare lo spessore nel testo*/
    -webkit-text-stroke-width: 1.1px; /* Spessore del contorno */
    -webkit-text-stroke-color:#BBFB1E;
    color: transparent;
    background-clip: text;
    font-family: "stretch_pro", sans-serif;
    margin-top:-40px;
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
}


.bioPD{

font-family: "nunito", sans-serif;

}

</style>