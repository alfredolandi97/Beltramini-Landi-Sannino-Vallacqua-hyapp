<template>
    <h1 class="titolo">INVESTMENT AREAS</h1>
        <div id="card-container">
            <p class="descrPag">Explore the areas of interest of our cutting-edge technology firm: browse through our area pages or navigate through different projects</p>
            
            <AreaCard v-for = "area of areas" :name = "area.name" :info = "area.info" :description="area.description" :link="'/areas/'+area.id" :projects="area.projects" :icon="area.icon"/>

        </div>
        <p class="parEndPag"> You are on the Investment Areas page.</p>
</template>

<script setup>
    const { data: areas } = await useFetch('/api/areas')
</script>

<style scoped>
.parEndPag{
  font-family: "nunito", sans-serif;
  font-size: 1vw;
  position: relative;
  top: 3vw;
}
</style>