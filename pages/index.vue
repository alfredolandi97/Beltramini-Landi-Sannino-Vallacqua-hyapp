<template>
    <div class="HomeContainer">

        <div class="divHomeImg">
            <img  class="homeImg" src="../assets/img/general/background_new.png" alt="">
            <span class="p1p" > INVESTING </span>
            <span class="p2p">IN</span>
            <span class="p3p">THE</span>
            <span class="p4p">FUTURE</span>
        </div>
        <div class="HomeContainer1" id="homeContainer1">

            <a @click="scrollToSection" class="arrowLinkHome">
            <img src="../assets/img/general/downarrow_abajo_5820.png" alt="Arrow" class="arrowIconHome">
                </a>
        

            <span class="p5p" > A FUTURISTIC FIRM </span>

            <span class="p6p" > We are a leading venture capital company focused on investing in cutting-edge technologies, aiming to revolutionize industries and reshape the way we live, work, and play while providing strategic capital, mentorship, guidance, and a strong network of industry connections to visionary entrepreneurs and disruptive startups since our establishment in Milan in 2015. </span>

            
            <NuxtLink to = "/about"><button class="buttonHome"> LEARN MORE</button></NuxtLink>

            <span class="p9p">--</span>

            <span class="p7p" > A TEAM OF EXPERTS </span>

            <span class="p8p" > Our team comprises a diverse group of exceptional individuals, each bringing their own unique expertise, extensive experience, and unwavering dedication to delivering exceptional results. </span>

            
            <NuxtLink to = "/persons"><button class="buttonHome"> LEARN MORE</button></NuxtLink>
        </div>

        <div class="HomeContainer2"> <NuxtLink to="areas" class="arrowNuxtHome1">
            <span class="p10p"> <p class="parHome">CHECK THE AREAS OF INTEREST  </p>  
            <img src="../assets/img/general/frecciadestra.png" alt="Arrow" class="arrowIconHome2">
          </span> </NuxtLink>
        </div>

        <div class="HomeContainer3"> <NuxtLink to="/topprojects" class="arrowNuxtHome2">
            <span class="p11p"> <p class="parHome">INSPECT OUR BEST PROJECTS </p>
            <img src="../assets/img/general/frecciasinistra.png" alt="Arrow" class="arrowIconHome3"></span>
            </NuxtLink>
        </div>

        <div class="HomeContainer4"> <NuxtLink to="/news" class="arrowNuxtHome3" > 
            <span class="p12p"> <p class="parHome">LATEST NEWS </p>   
            <img src="../assets/img/general/pallino.png" alt="Arrow" class="pallinoHome"> <p class="parHome1">LATEST NEWS </p>  </span>
            </NuxtLink> 
        </div>
    </div>

    <div class="HomeContainer5">
            <span class="p13p"> <p class="parCont1">YOUR VOICE</p> <p class="parCont2">IS IMPORTANT </p></span>
            <span class="p14p">
                    DO YOU NE ED INFORMATION OR WANT TO SUBMIT A PROJECT?
                </span>
                <NuxtLink to = "/contact"><button class="buttonHomeCont">CONTACT US</button></NuxtLink>
        </div>
   <p class="parEndPag"> You are on the Home page.</p>
</template>




<script>
export default {
  methods: {
    scrollToSection() {
      const element = document.getElementById('homeContainer1');
      const offset = -50; 

      if (element) {
        const topPos = element.offsetTop + offset;

        window.scrollTo({
          top: topPos,
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>




<style scoped>
    .HomeContainer {
        flex-direction: column;
        align-items: center;
        margin-bottom: -1vw;
    }

    .divHomeImg{
        width: 100%;
       
    }
    .homeImg{
        width: 90%;
        position: relative;
        left: 7vw;
        top: -10vw;
    }
    
    .p1p{
        font-family: "stretch_pro", sans-serif;
        font-size: 5vw;
        color: #BBFB1E;
        position: relative;
        bottom: 45vw;
        left: 25vw;
    }
    .p2p{
        font-family: "stretch_pro", sans-serif;
        font-size: 5vw;
        position: relative;
        bottom: 51.6vw;
        left: 66vw;
    }
    .p3p{
        font-family: "stretch_pro", sans-serif;
        font-size: 5vw;
        position: relative;
        bottom: 47.5vw;
        left: 19vw;
    }
    .p4p{
        font-family: "stretch_pro", sans-serif;
        font-size: 5vw;
        color: #BBFB1E;
        position: relative;
        bottom: 47.4vw;
        left: 20.5vw;
    }
.HomeContainer1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -3vw;
  width: 106.45%;
  height: 48vw;
  background-color: #BBFB1E;
  position: relative;
  bottom: 36vw;
}

.p5p {
  font-family: "stretch_pro", sans-serif;
  font-size: 3vw;
  color: #020122;
  position: relative;
  top: 5vw;
  text-align: center;
}

.p6p {
  font-family: "nunito", sans-serif;
  font-size: 1.5vw;
  color: #020122;
  position: relative;
  top: 6vw;
  margin-left: 2vw;
  margin-right: 2vw;
  text-align: justify;
}

.buttonHome{
  margin-bottom: 9vw;
  position: relative;
  top: 8vw;
  background-color:#020122;
  color: white;
  font-size: 1.3vw;
  font-family: "stretch_pro", sans-serif;
  padding: 0.8vw 1.5vw;
  border: none;
  cursor: pointer;


}
.buttonHome:hover{
transform: scale(1.05); 
opacity:1;
-webkit-text-stroke: 0.4px white;
}
    


.p7p {
  font-family: "stretch_pro", sans-serif;
  font-size: 3vw;
  color: #020122;
  position: relative;
  top: 5vw;
  text-align: center;
}

.p8p {
  font-family: "nunito", sans-serif;
  font-size: 1.5vw;
  color: #020122;
  position: relative;
  top: 5vw;
  text-align: justify;
  margin-left: 2vw;
  margin-right: 2vw;
}

.p9p{
    font-family: "nunito", sans-serif;
  font-size: 2vw;
  color: #020122;
  position: relative;
  top: 2.1vw;
}

.arrowLinkHome {
  position: absolute;
  bottom: 45vw;
  text-align: center;
  transition: all 0.5s ease;
}

.arrowLinkHome:hover {
  transform: translateY(0.5vw);
}

.arrowIconHome {
  width: 2.5vw;
  height: 2.5vw;
  cursor: pointer;
}

.p10p{
    margin-left: -3vw;
    width: 106.45%;
    height: 10vw;
    background-color: #020122;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "stretch_pro", sans-serif;
    font-size: 3vw;
    color: #ffffff;
    position: relative;
    bottom: 36vw;
  }


 
    .p10p:hover .parHome{
        transition: all 0.2s ease;
    transform: translateX(-1vw);
    }

  .arrowIconHome2{
    width: 5vw;
    margin-left: 3vw;
    transition: all 0.2s ease;
  }


  .p10p:hover .arrowIconHome2{
    transform: scale(1.2) translateX(2vw);
}

.p11p{
    margin-left: -3vw;
    width: 106.45%;
    height: 10vw;
    background-color:#ffffff ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "stretch_pro", sans-serif;
    font-size: 3vw;
    color: #020122;
    position: relative;
    bottom: 36vw;
  }

  .p11p:hover .parHome{
        transition: all 0.2s ease;
    transform: translateX(1vw);
    }


  .p11p:hover .arrowIconHome3{
    transform: scale(1.2) translateX(-2vw);
    
  }

.arrowIconHome3{
    position: relative;
    left: -72vw;
    width: 5vw;
    margin-left: -5vw;
    transition: all 0.2s ease;
    
  }

  .p12p{
    margin-left: -3vw;
    width: 106.45%;
    height: 9vw;
    background-color:#BBFB1E;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "stretch_pro", sans-serif;
    font-size: 3vw;
    color: #ffffff;
    position: relative;
    bottom: 36vw;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #020122;
    color: transparent;
    transition: all 0.2s ease;
  
         

  }

  .p12p:hover .parHome{
    transition: all 0.2s ease;
    transform: translateX(-2vw);
}

.p12p:hover .parHome1{
    transition: all 0.2s ease;
    transform: translateX(2vw);
}
  .pallinoHome{
    width: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    margin-left: 4vw;
    margin-right: 4vw;

  }

  .p12p:hover .pallinoHome{
    transform: scale(1.2) 
  }



  .HomeContainer5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -3vw;
  width: 106.45%;
  height: 25vw;
  position: relative;
  bottom: 36vw;
}
 

.HomeContainer5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -3vw;
  width: 106.45%;
  height: 33vw;
  background-color: rgba(99, 32, 238, 0.7);
  position: relative;
  bottom: 34.9vw;
  margin-bottom: -43.5vw;
  
}

.p13p{
    
    font-family: "stretch_pro", sans-serif;
    font-size: 5vw;
    color: #ffffff;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #020122;
    color: transparent;
    position: relative;
    top: 3vw;
    text-align: center;

}

.parCont1{
    position: relative;
    top: -3vw;
}
.parCont2{
    position: relative;
    top: -4.6vw;
}

.p14p{
    font-family: "stretch_pro", sans-serif;
    font-size: 1.4vw;
    color: #020122;
    position: relative;
    top: -2.5vw;
}

.buttonHomeCont{
  position: relative;
  top: 0.5vw;
  background-color:#BBFB1E;
  color:#020122;
  font-size: 2.1vw;
  font-family: "stretch_pro", sans-serif;
  padding: 0.8vw 1.5vw;
  border: none;
  cursor: pointer;
  width: 25vw;
  opacity:1;


}

.buttonHomeCont:hover{
transform: scale(1.02); 
opacity:1;
}

.arrowNuxtHome1,
.arrowNuxtHome2,
.arrowNuxtHome3{
  text-decoration: none;
}
   
</style>


