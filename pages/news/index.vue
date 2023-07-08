<template>
    <div>
      
      <h1 class="titolo">NEWS</h1>
      <div class="form-container">
        <label for="date-filter" class="filter-labelNews"></label>
        <img src="~/assets/img/general/pngegg.png" alt="Icona di ricerca" class="search-icon">
        <input id="Efilter" type="text" placeholder="Date filter" v-model="dateFilter">
      </div>
      <p class="descrPag">Read the latest updates, insightful analysis, and cutting-edge insights on finance, investments, and market trends from NextFund.</p>
      <div id="card-container">
        <NewsCard v-for="update of filteredNews" :title="update.title" :caption="update.caption" :date="update.date" :link="'/news/' + update.id" :image="update.image" />
      </div>
      <p class="parEndPag">You are on the News page.</p>
    </div>
  </template>
  
  <script setup>
    const { data: news } = await useFetch('/api/news')
  
    const dateFilter = ref('');
  
    const filteredNews = computed(() => {
      if (!dateFilter.value) {
        return news.value;
      }
  
      const filteredList = news.value.filter((update) => {
        const date = update.date.toLowerCase();
        const filter = dateFilter.value.toLowerCase();
        return date.includes(filter);
      });
  
      return filteredList;
    });
  </script>
  
  <style scoped>
  .filter-labelNews {
    margin-top: 10px;
  }
  </style>
  