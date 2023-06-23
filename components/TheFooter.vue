<template>
    <span class="footerspan">
<p>
    <footer>
        <span class="nunito-text" style="font-family:'nunito', sans-serif;"> ©  </span>
         2023 NextFund - All Rights Reserved

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

<style>
    footer{
        background-color: #F8F0FB;
        flex-shrink: 0;
        margin-top: 5vw;
        margin-left: -3vw;
        color: #020122;
        text-align:leftmar;
        width: 105%;
        padding-left: 2.5vw;
        display: flex;
        align-items: center;
        height: 3.5vw;
        font-family: "nunito", sans-serif;
        letter-spacing: -0.3px;
        
        

    }
    .footerspan{
        
        height: 3.5vw;
        width: 100%;
        vertical-align: middle;
    }




    .logoFT1 {
    width:1.5vw;
    height: 1.5vw;
    margin-bottom: -0.2vw;
    text-decoration: none;
    pointer-events: none;
  
  
}
    .logoimgFT1 {
   
    width: 1.5vw;
    height: 1.5vw;
    margin-left: 66vw;
    margin-bottom: vw;
    pointer-events: auto;
    

  
  
  }
  
  .logoFT2 {
    width:1.5vw;
    height: 1.5vw;
    margin-bottom: -0.2vw;
    text-decoration: none;
    pointer-events: none;
  
  
}
    .logoimgFT2{
   
    width: 1.5vw;
    height: 1.5vw;
    margin-left: 56vw;
    margin-bottom: 0vw;
    pointer-events: auto;
    
  
  
  }
  .img-caption1{
    font-size: 1.2vw;
    margin-left: 68vw;
    position: relative; 
    top: -2vw;
    font-family: "nunito", sans-serif;
    color: #020122;
    pointer-events: auto;
  }
  .img-caption2{
    font-size: 1.2vw;
    margin-left: 58vw;
    position: relative;
     top: -2vw;
     font-family: "nunito", sans-serif;
     color: #020122;
     pointer-events: auto;
  }
</style>