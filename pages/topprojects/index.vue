<template>
  <h1 class="titolo">TOP PROJECTS</h1>
  <div class="containerFilterTP">
    <p class="descrPag">Inspect the most popular and rewarding projects of NextFund: witness the profound impact and transformative potential of our firm.</p>
    <label for="area-filter"></label>
  </div>
  
  <div class="input-wrapper">
    <img src="~/assets/img/general/lente1.png" alt="Icona di ricerca" class="search-icon">
    <input id="Efilter" type="text" placeholder="Area filter" v-model="areaFilter">
  </div>

  <main>
    <div id="card-containerTP">
      <ProjectCard v-for="topproject of filteredProjects" :title="topproject.title" :area_name="topproject.areas.name"
        :info="topproject.info" :link="'/topprojects/' + topproject.id" :logo="topproject.logo" />
    </div>
  </main>
  <p class="parEndPag">You are on the Top Project page.</p>
</template>

<script setup>
  useHead({
    title:"Top projects - NextFund",
    meta:
    [
      {
        name:"author",
        content:"Alfredo Landi"
      }
    ]
  })
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


#card-containerTP{
  display: flex;
 flex-wrap: wrap;
}

.parEndPag{
  font-family: "nunito", sans-serif;
  font-size: 1vw;
  position: relative;
  top: 0vw;
}
</style>
