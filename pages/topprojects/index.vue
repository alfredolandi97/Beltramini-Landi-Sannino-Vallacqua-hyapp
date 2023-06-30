<template>
  <h1 class="titolo">TOP PROJECTS</h1>
  <div class="containerFilterTP">
    <label for="area-filter"></label>
  </div>
  
  <div class="input-wrapper">
    <img src="~/assets/img/general/pngegg.png" alt="Icona di ricerca" class="search-icon">
    <input id="Efilter" type="text" placeholder="Area filter" v-model="areaFilter">
  </div>

  <main>
    <div id="card-containerTP">
      <ProjectCard v-for="topproject of filteredProjects" :title="topproject.title" :area_name="topproject.areas.name"
        :info="topproject.info" :link="'/topprojects/' + topproject.id" :logo="topproject.logo" />
    </div>
    <p class="parEndPag">You are on the Top Project page.</p>
  </main>
</template>

<script setup>
const { data: topprojects } = await useFetch('/api/topprojects');

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
.input-wrapper {
  position: relative;
}


input#Efilter {
  width: 17vw;
  opacity: 1;
  transition: width 0.3s, opacity 0.3s;
  background-color: #020122;
  border: 3px solid #BBFB1E;
  color: #BBFB1E;
  font-size: 1.1vw;
  font-family: "nunito";
  margin-bottom: 2vw;
  margin-left: 2vw;
}

#card-containerTP{
  display: flex;
 flex-wrap: wrap;
}

</style>
