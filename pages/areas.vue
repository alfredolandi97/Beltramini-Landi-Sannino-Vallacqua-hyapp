<template>
    <h1>Areas</h1>
        <div id="card-container">
            <AreaCard v-for = "area of areas" :name = "area.name" :info = "area.info" />
        </div>

</template>

<script setup>
    const { data: areas } = await useFetch('/api/areas')
</script>