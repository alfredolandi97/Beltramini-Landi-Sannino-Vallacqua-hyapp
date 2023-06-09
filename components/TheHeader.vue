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
        position: sticky;
        top: 0;
        background-color: #0652ff;
        padding: 0px 20px 0px 20px;
        margin-bottom: 10px;
        height: 130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 65%);
        width:100%;
        z-index:999;
    }

    nav {
        display: flex;
        gap: 30px;
        font-size: 17pt;
       
    }
    h1{
        padding: 0px 0px 40px 0px;

    }
    nav a {
    color: #FFFF33; /* Colore dei link normali */
    text-decoration: none;
  }



  /* custom scrollbar, qui si regolano le dimensioni */
::-webkit-scrollbar {
  width: 30px;
  height: 80%
}


/* questo è per lo sfondo della scrollbar*/
::-webkit-scrollbar-track {
  background-color: transparent;
}

/* caratteristiche della scrollbar stessa*/
::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

/* comportamento quando si va sopra la scrollbar*/
::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}


</style>