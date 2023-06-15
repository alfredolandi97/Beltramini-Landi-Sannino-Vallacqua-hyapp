<template>

<div class="card">
  <img src="path_to_your_image" alt="Image" class="image">
  <span class="textDiv" >METAVERSE</span>
</div>
  </template>
  
  
  <script>
  

  
  </script>
  
  
  
  <style>
  .card {
      
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

  .card:hover{
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
          margin-left: 80px;
          transition:color 0.5s;
      }     
      
      .card:hover .textDiv {
        position:relative;
          bottom:5px;
          font-size: 100px;
          /* per creare lo spessore nel testo*/
          -webkit-text-stroke-width: 4px; /* Spessore del contorno */
          -webkit-text-stroke-color: #05041D;
          color: transparent;
          background-clip: text;
          font-family: "Roboto", sans-serif;
          font-weight:800;
          margin-left: 80px;
          transition:color 0.5s;
}

.image {
  width: 50px; /* Regola la larghezza dell'immagine come preferisci */
  height: auto; /* Regola l'altezza dell'immagine come preferisci */
  margin-right: 10px; /* Aggiungi margine destro per separare l'immagine dal testo */
}

  </style>