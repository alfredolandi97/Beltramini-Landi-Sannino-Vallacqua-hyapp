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

<style scoped>

.header-white {
  position: fixed;
  top: 0;
  background-color: white;
  padding-left: 1%;
  margin-bottom: 2%;
  margin-left: -3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height: 5.6vw;
  z-index: 998;


}
  header
  {
      position: sticky;
      top: 0%;
      background-color: #020122;
      padding-left: -2%;
      margin-bottom: 2%;
      margin-left: -3vw;
      height: 7vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width:106.4%;
      height:5.5vw;
      z-index:999;
     
  }

  nav {
      display: flex;
      position: relative;
      top: -0.3vw;
      right: 0.2vw;
      
      
  }

  .nav-link {
    margin-left: 1vw;
    position: relative;
    left: -2vw;
    
    
    
}

 .logo {
  max-width:17vw;
  height: 2.5vw;
  position: relative;
  top: 1.4vw;  
  left: 2vw;
  
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

