<template>
    <p class="descrPag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sint eum minima. Eius illum qui quas reprehenderit dolorum earum corporis adipisci nemo optio beatae explicabo, id dicta sit a magnam!</p>
    <div id="card-containerPC">
            <ProjectCard v-for = "topproject of topprojects" :title = "topproject.title" :area_name="topproject.area_name" :info="topproject.info" :image = "topproject.image" :link="'/topprojects/'+topproject.id"/>

    </div>
    <p class="parEndPag"> You are on the Top Project page.</p>
</template>

<script setup>
    const { data: topprojects } = await useFetch('/api/topprojects')
</script>