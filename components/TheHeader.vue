<template>
    <header>
            <h1>HyperGroup!</h1>
            <nav>
                <NuxtLink to = "/">Home</NuxtLink>
                <NuxtLink to = "/dogs">Our team</NuxtLink>
                <NuxtLink to = "/locations">Areas of interest</NuxtLink>
                <NuxtLink to = "/about">Contacts</NuxtLink>
                <NuxtLink to = "/news">News</NuxtLink>
                <NuxtLink to = "/contact">About us</NuxtLink>
            </nav>
        </header>
</template>

<style>
    header
    {
        background-color: greenyellow;
        padding: 0px 20px 0px 20px;
        margin-bottom: 5px;
        border-bottom: 5px solid brown;
    
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        display: flex;
        gap: 30px;
        font-size: 17pt;
        font-weight: bold;
    }
</style>