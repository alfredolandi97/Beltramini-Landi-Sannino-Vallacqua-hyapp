<template>
    <p class="descrPag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sint eum minima. Eius illum qui quas reprehenderit dolorum earum corporis adipisci nemo optio beatae explicabo, id dicta sit a magnam!</p>
    <div id="card-containerPC">
        <ProjectCard v-for = "topproject of topprojects" :title = "topproject.title" :area_name="topproject.areas.name" :info="topproject.info" :link="'/topprojects/'+topproject.id" :logo="topproject.logo"/>
    </div>
    <p class="parEndPag"> You are on the Top Project page.</p>
</template>

<script setup>
    const { data: topprojects } = await useFetch('/api/topprojects')
</script>