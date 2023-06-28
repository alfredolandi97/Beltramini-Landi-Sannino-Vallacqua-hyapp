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

<style>
    footer{
        background-color: #F8F0FB;
        flex-shrink: 0;
        margin-top: 5vw;
        margin-left: -3vw;
        color: #020122;
        text-align:leftmar;
        width: 103.76%;
        padding-left: 2.5vw;
        display: flex;
        align-items: center;
        height: 3.5vw;
        font-family: "nunito", sans-serif;
        letter-spacing: -0.3px;
        font-size: 0.9vw;
        

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
    margin-left: 69.5vw;
    margin-bottom: 0vw;
    pointer-events: auto;
    

  
  
  }
  
  .logoFT2 {
    width:1.2vw;
    height: 1.2vw;
    margin-bottom: 0vw;
    text-decoration: none;
    pointer-events: none;
  
  
}
    .logoimgFT2{
   
    width: 1.2vw;
    height: 1.2vw;
    margin-left: 60.5vw;
    margin-bottom: 0vw;
    pointer-events: auto;
    
  
  
  }
  .img-caption1{
    font-size: 1vw;
    margin-left: 71vw;
    position: relative; 
    top: -1.7vw;
    font-family: "nunito", sans-serif;
    color: #020122;
    pointer-events: auto;
  }
  .img-caption2{
    font-size: 1vw;
    margin-left: 62vw;
    position: relative;
     top: -1.7vw;
     font-family: "nunito", sans-serif;
     color: #020122;
     pointer-events: auto;
  }
  .nunito-text{
    font-family:'helvetica1', sans-serif;
    font-size: 1vw;
  }

  .nunito-text1{
    font-family:'nunito', sans-serif;
    font-size: 1vw;
  }
</style>