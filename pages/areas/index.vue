<template>
    <h1 class="titolo">AREAS OF INTEREST</h1>
        <div id="card-container">
            <AreaCard v-for = "area of areas" :name = "area.name" :info = "area.info" :description="area.description" :image="area.image" :link="'/areas/'+area.name"/>
        </div>

</template>

<script setup>
    const { data: areas } = await useFetch('/api/areas')
</script>