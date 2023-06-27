<template>
  <header class="header-white"></header>
  <header ref="navbar">
             
              <NuxtLink to="/" class="logo-link">
                <img class="logo" src="../assets/img/general/logopagina.png" alt="Logo NextFund">
              </NuxtLink>
              
          <nav>
              <NuxtLink to = "/about"  class="nav-link">About us</NuxtLink>
              <NuxtLink to = "/areas"  class="nav-link">Investment areas</NuxtLink>
              <NuxtLink to = "/topprojects"  class="nav-link">Top projects</NuxtLink>
              <NuxtLink to = "/persons"  class="nav-link">Our team</NuxtLink>
              <NuxtLink to = "/news"  class="nav-link">News</NuxtLink>
              <NuxtLink to = "/contact"  class="nav-link">Contacts</NuxtLink>
          </nav>



      </header>
</template>

<style>

.header-white {
  position: fixed;
  top: 0;
  background-color: white;
  padding-left: 1%;
  margin-bottom: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 66%);
  width: 100%;
  height: 8.3vw;
  z-index: 998;

}
  header
  {
      position: sticky;
      top: 0%;
      background-color: #6320EE;
      padding-left: 1%;
      margin-bottom: 2%;
      margin-left: -3vw;
      height: 7vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 65%);
      width:106%;
      height:8vw;
      z-index:999;
     
  }

  nav {
      display: flex;
      margin-right:0.5%;
      margin-bottom:3.5%;
      
      
  }

  .nav-link {
    margin-left: 1vw;
    
    
    
}

 .logo {
  max-width:18vw;
  height: 2.7vw;
  margin-bottom: 2vw;
  margin-left: 2vw;
  
  
}
.logo-link {
   
  max-width: 30vw;
  max-height: 3vw;
  margin-bottom: 2.5vw;

  
  
  }

  nav a {
color: #FFFFFF; /* Colore dei link normali */
opacity:0.7;
text-decoration: none;
padding: 0.6vw;
font-family: "stretch_pro", sans-serif;
font-weight:500;
font-size: 1vw;
text-transform: uppercase;
transition: all 0.1s ease;


}


nav a:hover {
transform: scale(1.05); /* Aumenta leggermente la scala durante il passaggio del mouse */
opacity:1;
-webkit-text-stroke: 0.1px white;


}

/* custom scrollbar, qui si regolano le dimensioni */
::-webkit-scrollbar {
width: 27px;
height: 80%
}


/* questo è per lo sfondo della scrollbar*/
::-webkit-scrollbar-track {
background-color: transparent;
}

/* caratteristiche della scrollbar stessa*/
::-webkit-scrollbar-thumb {
background-color: #F3F4EF;
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

