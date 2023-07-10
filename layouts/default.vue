<!--
    Default layout used by all the page
-->
<template>
    <div class="page">
      <TheHeader />
      <main class="content">
        <slot />
      </main>
      <TheFooter />
    </div>
  </template>


<style>
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        margin: 0;
        
    }
</style>