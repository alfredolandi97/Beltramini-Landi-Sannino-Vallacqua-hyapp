<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" src = "" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ person.name }}</span></p>
                <p class = "data">Breed: <span>{{ person.role }}</span></p>
                <p class = "data">Age: <span>{{ person.bio }}</span></p>
                <p class = "data">Name: <span>{{ person.email }}</span></p>
                <p class = "data">Breed: <span>{{ person.number }}</span></p>
            </div>
        </div>
        <h2>Description</h2>
        <!-- TO-DO: mettere i supervised projects-->
    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: person} = await useFetch('/api/persons/' + id)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>