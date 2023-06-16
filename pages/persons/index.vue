<template>
    <h1 class="titolo">OUR TEAM</h1>
    <p class="parafPC" style="padding-left: 2vw; padding-right: 2vw;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nostrum nemo impedit reiciendis recusandae quaerat consequuntur expedita facilis. Enim doloribus porro totam exercitationem mollitia ex molestiae voluptatum ipsum nostrum repellat?</p>
        <div id="card-containerPC">
            <PersonCard v-for = "person of persons" :name = "person.name" :role = "person.role" :bio = "person.bio" :email = "person.email" :number = "person.number" :image = "person.image" :caption="person.caption" :link="'/persons/'+person.id"/>
        </div>

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