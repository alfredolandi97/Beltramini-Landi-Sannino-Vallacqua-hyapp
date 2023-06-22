<template>
    <h1 class="titolo">News</h1>

    <p class="descrPag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sint eum minima. Eius illum qui quas reprehenderit dolorum earum corporis adipisci nemo optio beatae explicabo, id dicta sit a magnam!</p>

        <div id="card-container">
            <NewsCard v-for = "update of news" :title = "update.title" :caption = "update.caption" :text = "update.text" :image = "update.image" :date="update.date"/>

            <p class="parEndPag"> You are on the News page.</p>
        </div>

</template>

<script setup>
    const { data: news } = await useFetch('/api/news')
</script>