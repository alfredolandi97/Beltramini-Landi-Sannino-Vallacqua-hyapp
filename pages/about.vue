<template>

<div class="card1">
  <span class="textDiv" >METAVERSE</span>
</div>
  </template>
  
  
  <script>
  

  
  </script>
  
  
  
  <style>
  .card1 {
      
      width: 101vw;
      height: 180px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid #C0FF3B;
      margin-left: -8px;
      margin-top: 20px;
      transition: background-color 0.5s;
  }

  .card1:hover{
      background-color:#C0FF3B;;
      opacity:1;
      
      
    }
.textDiv{
          position:relative;
          bottom:5px;
          font-size: 100px;
          /* per creare lo spessore nel testo*/
          -webkit-text-stroke-width: 2.5px; /* Spessore del contorno */
          -webkit-text-stroke-color:#C0FF3B;
          color: transparent;
          background-clip: text;
          font-family: "Roboto", sans-serif;
          font-weight:800;
          margin-left: 50px;
          transition:color 0.5s;
      }     
      
      .card1:hover .textDiv {
  color:  pink; /* Colore desiderato quando passi sopra il div */
}

  </style>