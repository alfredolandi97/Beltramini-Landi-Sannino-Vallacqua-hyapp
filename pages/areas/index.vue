<template>
    <h1 class="titolo">AREAS OF INTEREST</h1>
        <div id="card-container">
            <p class="descrPag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sint eum minima. Eius illum qui quas reprehenderit dolorum earum corporis adipisci nemo optio beatae explicabo, id dicta sit a magnam!</p>
            
            <AreaCard v-for = "area of areas" :name = "area.name" :info = "area.info" :description="area.description" :image="area.image" :link="'/areas/'+area.name"/>
        </div>
        <p class="parEndPag"> You are on the Areas Of Interest page.</p>
</template>

<script setup>
    const { data: areas } = await useFetch('/api/areas')
</script>