<template>
  <h1 class="titolo">ABOUT US</h1>
  <div>

      <p class="descrPag">We are delighted to welcome you to the future with Next Fund, the premier venture capital firm dedicated to investing in your tomorrow!</p>

      <div class="firstsec">
        <img  class="firstimg" src="../assets/img/about/sopra.png" alt=""> 

        <p class="firstpar"> At Next Fund, we are driven by a passion for innovation and a desire to shape the future. As a venture capital company specializing in the metaverse, artificial intelligence, cyber-security, and blockchain, we are at the forefront of cutting-edge technologies that are revolutionizing industries and transforming the way we live, work, and play.</p>

          <p class="secondpar">Founded in Milan in 2015, Next Fund has emerged as a leading player in the investment landscape, providing strategic capital and expertise to visionary entrepreneurs and disruptive startups. We understand that breakthrough ideas require not just funding, but also mentorship, guidance, and a strong network of industry connections.
                              That's why we offer more than just capital—we offer a partnership built on trust, collaboration, and shared ambition.</p>

                              <p class="thirdpar"> Our expertise lies in identifying and nurturing talent with the potential to redefine industries. We believe that the metaverse holds immense possibilities, bridging the gap between the digital and physical realms and creating entirely new experiences. With our deep knowledge and insights into this evolving landscape, we actively seek opportunities to invest in metaverse platforms, virtual reality, augmented reality, and immersive technologies.</p>

  <p class="forthpar"> Artificial intelligence is another key focus area for us. We recognize its transformative power across various sectors, from healthcare and finance to manufacturing and logistics. Our team of experts is dedicated to identifying and supporting AI startups that have the potential to revolutionize industries and unlock new levels of efficiency and productivity.</p>

  <p class="fifthpar"> In an increasingly connected world, cyber-security has become a critical concern for businesses and individuals alike.
                      At Next Fund, we prioritize investments in innovative cyber-security solutions that protect against evolving threats and safeguard valuable digital assets. We support startups developing advanced encryption technologies, threat intelligence platforms, and proactive defense mechanisms.
                      We have a keen interest in the transformative potential of blockchain technology. Blockchain offers secure and transparent decentralized solutions, revolutionizing finance, supply chain management, and digital identity verification. We actively seek out startups that are leveraging blockchain to drive innovation and disrupt traditional industries.</p>
  <p class="sixth">    As a team, we bring together diverse backgrounds and expertise to provide our portfolio companies with unparalleled support. We work closely with founders, offering strategic guidance, operational insights, and access to our extensive network of industry partners and investors.
                      At Next Fund, we are committed to driving positive change through technology and fostering innovation that shapes the future. Join us on this exciting journey as we invest in the brightest minds and game-changing ideas that will shape the metaverse, artificial intelligence, cyber-security, and blockchain industries.</p>
      </div>
      <div class="secondsec">
          <img class="secondimg" src="../assets/img/about/sotto.png" alt="">

        </div> 
  </div>
  <p class="parEndPag"> You are on the About Us page.</p>
</template>


<script setup>
  useHead({
    title: "About us - NextFund",
    meta:[
      {
        name: "description",
        content: "About page to describe what NextFund is and its worldwide mission"
      },
      {
        name:"keywords",
        content:"NextFund, About, information, mission"
      },
      {
        name:"author",
        content:"Alfredo Landi"
      }
    ]
  })
</script>
  

  
  
  
  <style scoped>
.firstsec{
margin-bottom: 9vw;
}

.firstpar{
  position: relative; 
  top: 1vw;
  left: 41vw;
  font-family: "nunito", sans-serif;
  margin-right: 41vw;
  font-size: 1.4vw;
  text-align: justify;

}

.secondpar{
   
  position: relative; 
  top: 2vw;
  left: 41vw;
  font-family: "nunito", sans-serif;
  margin-right: 41vw;
  font-size: 1.4vw;
  text-align: justify;
  }


.thirdpar{
  position: relative; 
  top: 3vw;
  left: 41vw;
  font-family: "nunito", sans-serif;
  margin-right: 41vw;
  font-size: 1.4vw;
  text-align: justify;

}

.forthpar {
  position: relative; 
  top: 5vw;
  left: 41vw;
  font-family: "nunito", sans-serif;
  margin-right: 41vw;
  font-size: 1.4vw;
  text-align: justify;
}
.fifthpar{
  position: relative; 
  top: 7vw;
  left: 41vw;
  font-family: "nunito", sans-serif;
  margin-right: 41vw;
  font-size: 1.4vw;
  text-align: justify;
}

.sixth{
  position: relative; 
  top: 8.5vw;
  left: 41vw;
  font-family: "nunito", sans-serif;
  margin-right: 41vw;
  font-size: 1.4vw;
  text-align: justify;
}


.firstimg{
    display: flex;
    justify-content: center;
    width: 100%;
  }
.secondimg {
    float: left;
    margin-right: 2vw;
    width: 38vw;
    height: 51vw;
    position: relative;
    bottom: 51vw;
    margin-bottom: -48vw;
  
} 

.parEndPag{
  font-family: "nunito", sans-serif;
  font-size: 1vw;
  position: relative;
  top: 2vw;
  left: -40vw;
}
  </style>


