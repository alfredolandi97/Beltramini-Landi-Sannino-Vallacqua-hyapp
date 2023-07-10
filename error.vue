<template>
    <NuxtLayout>
        <main>
            <div class="errorContainer">
            <img  class="errorImg" src="~/assets/img/general/errore.png" alt=""> 
            <h1 class="titolo">OOOPS!</h1>
            <span ><p class="errorPar">Looks like you have found a glitch.</p></span>
               <span><p class="errorPar">The page you were looking for is not available.</p> </span>

            <NuxtLink to = "/"> <button class="errorButton"> GO BACK</button></NuxtLink>
        </div>
        <p class="parEndPag"> You are on the Error page.</p>
        </main>
    </NuxtLayout>

</template>




<style>

.errorContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 33vw;
}

.errorImg{
    width: 8vw;
}

.errorPar{
  font-family: "nunito", sans-serif;
  font-size: 1.4vw;
  text-align: justify;
  margin-bottom: -1vw;
}

.errorButton{
    background-color:#BBFB1E;
    color:#020122;
    width: 8vw;
    font-family: "stretch_pro", sans-serif;
    margin-top: 4vw;
    cursor: pointer;
}

</style>