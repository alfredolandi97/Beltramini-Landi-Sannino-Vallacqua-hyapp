<template>
    <div>
        <img id = "main-img" :src ="`${news.image}`" />
        <div id = "data-container">
            <p class = "data">Name: <span>{{ news.title }}</span></p>
            <p class = "data">Breed: <span>{{ news.caption }}</span></p>
            <p class = "data">Age: <span>{{ news.text }}</span></p>
            <p class = "data">Name: <span>{{ news.date }}</span></p>
        </div>
     </div>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: news} = await useFetch('/api/news/' + id)

    //const description = ref(newLineOnFullStop(dog.value.description))

</script>