<template>
    <h1>News</h1>
        <div id="card-container">
            <NewsCard v-for = "update of news" :title = "update.title" :caption = "update.caption" :text = "update.text" :image = "update.image"/>
        </div>

</template>

<script setup>
    const { data: news } = await useFetch('/api/news')
</script>