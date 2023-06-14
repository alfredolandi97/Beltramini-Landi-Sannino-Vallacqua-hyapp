<template>
  <header ref="navbar">
              <h1 class="logo">
              <NuxtLink to="/" class="logo-link">NextFund</NuxtLink>
              </h1>
          <nav>
              
              <NuxtLink to = "/persons">Our team</NuxtLink>
              <NuxtLink to = "/areas">Areas of interest</NuxtLink>
              <NuxtLink to = "/topprojects">Top projects</NuxtLink>
              <NuxtLink to = "/contact">Contacts</NuxtLink>
              <NuxtLink to = "/news">News</NuxtLink>
              <NuxtLink to = "/about">About us</NuxtLink>
          </nav>



      </header>
</template>

<style>
  header
  {
      position: sticky;
      top: 0px;
      background-color: #1107FF;
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
      margin-right:60px;
      margin-bottom: 40px;
  }


  h1.logo {
  padding: 0px 0px 40px 0px;
}


.logo-link {
  text-decoration: none;
  color: black; 
}  

  nav a {
color: #FFFFFF; /* Colore dei link normali */
opacity:0.7;
text-decoration: none;
padding: 30px;
font-family: "Roboto", sans-serif;
font-weight:500;
font-size: 18pt;
transition: all 0.1s ease;

}


nav a:hover {
transform: scale(1.05); /* Aumenta leggermente la scala durante il passaggio del mouse */
opacity:1;
-webkit-text-stroke: 0.3px white;

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



/*
.fade-in {
animation: fade-in 0.5s ease-in;

}

@keyframes fade-in {
from {
  transform: translateY(-100%);
}
to {
  transform: translateY(0);
}
}
*/

/*
<script>
export default {
mounted() {
  window.addEventListener('scroll', this.handleScroll);
},
methods: {
  handleScroll() {
    const headerHeight = this.$refs.navbar.offsetHeight;

    if (window.pageYOffset > headerHeight) {
      this.$refs.navbar.style.display = 'flex';
      this.$refs.navbar.classList.add('fade-in');
    } else {
      this.$refs.navbar.style.display = 'none';
      this.$refs.navbar.classList.remove('fade-in');
    }
  }
},
beforeDestroy() {
  window.removeEventListener('scroll', this.handleScroll);
}
}
</script>
-->
*/
</style>