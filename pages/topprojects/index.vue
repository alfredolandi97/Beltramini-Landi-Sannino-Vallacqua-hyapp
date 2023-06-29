<template>
    <h1 class="titolo">TOP PROJECTS</h1>
    <div class="containerFilterTP">
         <label for="area-filter">Area Filter:</label>
      </div>
       
      <input id="area-filter" type="text" placeholder="Area filter" v-model="areaFilter">
      
    <main>
        
      
      <div id="card-containerPC">
        <ProjectCard v-for="topproject of filteredProjects" :title="topproject.title" :area_name="topproject.areas.name" :info="topproject.info" :link="'/topprojects/' + topproject.id" :logo="topproject.logo" />
      </div>
      <p class="parEndPag">You are on the Top Project page.</p>
    </main>
  </template>
  
  <script setup>
  
    const { data: topprojects } = await useFetch('/api/topprojects')
  
    const areaFilter = ref('');
  
    const filteredProjects = computed(() => {
      
      if (!areaFilter.value) {
        return topprojects.value;
      }
  
 
      const filteredList = topprojects.value.filter((project) => {
        const areaName = project.areas.name.toLowerCase();
        const filter = areaFilter.value.toLowerCase();
        return areaName.includes(filter);
      });
  
      return filteredList;
    });
  </script>
  
  <style scoped>

</style>