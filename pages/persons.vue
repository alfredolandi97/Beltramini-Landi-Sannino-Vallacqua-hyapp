<template>
    <h1>Persons</h1>
        <div id="card-container">
            <PersonCard v-for = "person of persons" :name = "person.name" :role = "person.role" :bio = "person.bio" :email = "person.email" :number = "person.number" :image = "person.image"/>
        </div>

</template>

<script setup>
    const { data: persons } = await useFetch('/api/persons')
</script>