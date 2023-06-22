<template>
    <h1 class="titolo">OUR TEAM</h1>
    <p class="descrPag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sint eum minima. Eius illum qui quas reprehenderit dolorum earum corporis adipisci nemo optio beatae explicabo, id dicta sit a magnam!</p>
        <div id="card-containerPC">
            <PersonCard v-for = "person of persons" :name = "person.name" :role = "person.role" :bio = "person.bio" :email = "person.email" :number = "person.number" :image = "person.image" :caption="person.caption" :link="'/persons/'+person.id"/>

        </div>
        <p class="parEndPag"> You are on the Our Team page.</p>
</template>

<script setup>
    const { data: persons } = await useFetch('/api/persons')
</script>



<style>
#card-containerPC {
    display: flex;
    flex-wrap: wrap;
}
</style>