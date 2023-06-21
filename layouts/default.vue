<!--
    Default layout used by all the page
-->
<template>
    <div class = 'page'>
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>

<style>
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #020122;
        margin: 0;
    }
</style>