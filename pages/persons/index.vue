<template>
    <h1 class="titolo">OUR TEAM</h1>
    <div class="form-container">
      <p class="descrPag">Please, check out the profiles of our esteemed team members, which include their insightful biographies and reliable contact information.</p>
        <label for="name-filter"></label>
      </div>
    <div>
      <img src="~/assets/img/general/lente1.png" alt="Icona di ricerca" class="search-icon">
      <input id="Efilter" type="text" placeholder="Name filter" v-model="nameFilter">
    </div>
    
    
    <div id="card-containerPC">
      <PersonCard v-for="person of filteredPersons" :name="person.name" :role="person.role" :link="'/persons/' + person.id" :image="person.image" />
    </div>
    
    <p class="parEndPag">You are on the Our Team page.</p>
  </template>

<script setup>
const { data: persons } = await useFetch('/api/persons')

const nameFilter = ref('');

const filteredPersons = computed(() => {
  if (!nameFilter.value) {
    return persons.value;
  }

  const filteredList = persons.value.filter((person) => {
    const name = person.name.toLowerCase();
    const filter = nameFilter.value.toLowerCase();
    return name.includes(filter);
  });

  return filteredList;
});


</script>

<style>

#card-containerPC{
  display: flex;
 flex-wrap: wrap;
}

.parEndPag{
  font-family: "nunito", sans-serif;
  font-size: 1vw;
  position: relative;
  z-index: 1;
  margin-bottom: 5vw;
}
</style>