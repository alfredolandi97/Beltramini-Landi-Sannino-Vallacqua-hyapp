<template>
    <h1 class="titolo">NEWS</h1>

    <p class="descrPag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sint eum minima. Eius illum qui quas reprehenderit dolorum earum corporis adipisci nemo optio beatae explicabo, id dicta sit a magnam!</p>

        <div id="card-container">
            <NewsCard v-for = "update of news" :title = "update.title" :caption = "update.caption"  :date="update.date" :link="'/news/'+update.id" :image="update.image"/>

            <p class="parEndPag"> You are on the News page.</p>
        </div>

</template>

<script setup>
    const { data: news } = await useFetch('/api/news')
</script>