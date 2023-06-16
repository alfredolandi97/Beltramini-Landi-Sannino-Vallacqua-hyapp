<template>
  <header ref="navbar">
             
              <NuxtLink to="/" class="logo-link">
                <img class="logo" src="../assets/img/general/image 15logo.png" alt="Logo NextFund">
              </NuxtLink>
              
          <nav>
              <NuxtLink to = "/about"  class="nav-link">About us</NuxtLink>
              <NuxtLink to = "/areas"  class="nav-link">Areas of interest</NuxtLink>
              <NuxtLink to = "/topprojects"  class="nav-link">Top projects</NuxtLink>
              <NuxtLink to = "/persons"  class="nav-link">Our team</NuxtLink>
              <NuxtLink to = "/news"  class="nav-link">News</NuxtLink>
              <NuxtLink to = "/contact"  class="nav-link">Contacts</NuxtLink>
          </nav>



      </header>
</template>

<style>
  header
  {
      position: sticky;
      top: 0%;
      background-color: #1107FF;
      padding-left: 2%;
      margin-bottom: 2%;
      height: 7vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 65%);
      width:100%;
      height:8.5vw;
      z-index:999;
     
  }

  nav {
      display: flex;
      margin-right:0.5%;
      margin-bottom:2%;
      
      
  }

  .nav-link {
    margin-left: 1vw;
    
    
    
}

 .logo {
  max-width:18vw;
  height: 2.7vw;
  margin-bottom: 2vw;
  
  
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
font-family: "helvetica11", sans-serif;
font-weight:500;
font-size: 1.4vw;
transition: all 0.1s ease;

}


nav a:hover {
transform: scale(1.05); /* Aumenta leggermente la scala durante il passaggio del mouse */
opacity:1;
-webkit-text-stroke: 0.3px white;

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
