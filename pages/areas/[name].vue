<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" src = "" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ area.name }}</span></p>
                <p class = "data">Breed: <span>{{ area.info }}</span></p>
                <p class = "data">Age: <span>{{ area.description }}</span></p>
            </div>
        </div>
        <h2>Description</h2>
        <!-- TO-DO: mettere i related projects-->
    </main>
</template>

<script setup>
    const route = useRoute()
    const name = route.params.name
    const { data: area} = await useFetch('/api/areas/' + name)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>