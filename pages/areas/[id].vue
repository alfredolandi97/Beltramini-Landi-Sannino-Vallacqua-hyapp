<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" :src ="`${area.image}`" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ area.name }}</span></p>
                <p class = "data">Breed: <span>{{ area.info }}</span></p>
                <p class = "data">Age: <span>{{ area.description }}</span></p>
            </div>
        </div>
        <!-- TO-DO: mettere i related projects-->
    </main>
    <p class="parEndPag"> You are on the Description Areas page.</p>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: area} = await useFetch('/api/areas/' + id)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>