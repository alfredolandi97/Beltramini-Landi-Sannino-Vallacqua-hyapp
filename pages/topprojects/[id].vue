<template>
    <div>
        <img id = "main-img" :src ="`${project.image}`" />
        <div id = "data-container">
            <p class = "data">Name: <span>{{ project.title }}</span></p>
            <p class = "data">Breed: <span>{{ project.info }}</span></p>
            <p class = "data">Age: <span>{{ project.description }}</span></p>
            <p class = "data">Name: <span>{{ project.link }}</span></p>
        </div>
     </div>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: project} = await useFetch('/api/topprojects/' + id)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>