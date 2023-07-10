<template>
  <span class="footerspan">
<p>
  <footer>
      <span class="nunito-text"> ©  </span>
       <span class="nunito-text1">2023 NextFund - All Rights Reserved</span>

      <NuxtLink to="https://www.google.com/" class="logoFT1">
              <img class="logoimgFT1" src="../assets/img/general/logo_insta_icon.png" alt="Logo instagram">
              <span class="img-caption1">Instagram</span>
      </NuxtLink>
      <NuxtLink to="https://www.google.com/" class="logoFT2">
              <img class="logoimgFT2" src="../assets/img/general/logo_linkedin_icon.png" alt="Logo linkedin">
              <span class="img-caption2">Linkedin</span>
      </NuxtLink>
  </footer>
</p>
</span>
</template>

<style scoped>
  footer{
      background-color: #F8F0FB;
      flex-shrink: 0;
      margin-top: 1vw;
      margin-left: -3vw;
      color: #020122;
      text-align:leftmar;
      width: 103.76%;
      padding-left: 2.5vw;
      display: flex;
      align-items: center;
      height: 2vw;
      font-family: "nunito", sans-serif;
      letter-spacing: -0.3px;
      font-size: 0.9vw;
      padding-bottom: 1.6vw;
      
  }
  .footerspan{
      
      height: 3.5vw;
      width: 100%;
      vertical-align: middle;
  }




  .logoFT1 {
  width:1.2vw;
  height: 1.2vw;
  margin-bottom: 0vw;
  text-decoration: none;
  pointer-events: none;


}
  .logoimgFT1 {
 
  width: 1.2vw;
  height: 1.2vw;
  margin-left: 70.5vw;
  margin-bottom: 0vw;
  pointer-events: auto;
  position: relative;
  bottom: -0.8vw;
  



}

.logoFT2 {
  width:1.2vw;
  height: 1.2vw;
  margin-bottom: 0vw;
  text-decoration: none;
  pointer-events: none;
  position: relative;



}
  .logoimgFT2{
 
  width: 1.2vw;
  height: 1.2vw;
  margin-left: 62.5vw;
  margin-bottom: 0vw;
  pointer-events: auto;
  position: relative;
  bottom: -0.8vw;
  


}
.img-caption1{
  font-size: 1vw;
  margin-left: 72vw;
  position: relative; 
  top: -1vw;
  font-family: "nunito", sans-serif;
  color: #020122;
  pointer-events: auto;
}
.img-caption2{
  font-size: 1vw;
  margin-left: 64vw;
  position: relative;
   top: -1vw;
   font-family: "nunito", sans-serif;
   color: #020122;
   pointer-events: auto;
}
.nunito-text{
  font-family:'helvetica1', sans-serif;
  font-size: 1vw;
  position: relative;
  bottom: -0.8vw;
}

.nunito-text1{
  font-family:'nunito', sans-serif;
  font-size: 1vw;
  position: relative;
  bottom: -0.8vw;
}
</style>