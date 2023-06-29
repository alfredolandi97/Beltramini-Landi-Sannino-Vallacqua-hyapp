<template>
    <div>
      
      <h1 class="titolo">NEWS</h1>
      <div class="form-container">
        <label for="date-filter" class="filter-labelNews">Date Filter:</label>
        <input id="date-filter" type="text" placeholder="Date filter" v-model="dateFilter">
      </div>
      <p class="descrPag">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sint eum minima. Eius illum qui quas reprehenderit dolorum earum corporis adipisci nemo optio beatae explicabo, id dicta sit a magnam!</p>
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
  