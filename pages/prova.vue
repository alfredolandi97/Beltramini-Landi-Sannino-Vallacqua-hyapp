<template>

    <div class="card1" :class="{ active: showDescription }">
      <div class="rectangle"></div>
        <div class="click-area" @click="toggleDescription">
          <span class="textDiv" >METAVERSE</span></div>
        <div class="details" v-if="showDescription" v-for="item in additionalDetails" :key="item.id">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <img :src="item.imageSrc" alt="Extra Image">
        </div>
      
    </div>
    </template>
    
    
    <script>
    
    export default {
      data() {
        return {
          showDescription: false,
          additionalDetails: [
            { id: 1, title: "Extra 1", description: "Extra description 1", imageSrc: "path/to/extra1.jpg" },
            { id: 2, title: "Extra 2", description: "Extra description 2", imageSrc: "path/to/extra2.jpg" },
            { id: 3, title: "Extra 3", description: "Extra description 3", imageSrc: "path/to/extra3.jpg" }
          ]
        };
      },
      methods: {
        toggleDescription() {
          this.showDescription = !this.showDescription;
        }
      }
    }
    
    
    </script>
    
    
    
    <style>
    
    .card1 {
      
      width: 110vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid #C0FF3B;
      margin-left: -8px;
      margin-top: 20px;
  }
  
    
    .card1:hover{
        border: 2px solid blue;
    }
    
    
    .rectangle {
          
          width: 100vw;
          height:80px;
          margin-top:100px;
          position:relative;
          bottom: 50px;
          background-color: transparent;
        }
  
    
    .textDiv{
          position:relative;
          bottom:40px;
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
      
    
    .details {
      display: none;
    }
    
    
    .active .rectangle {
      background-color: yellow;
    
    }
    
    .active .textDiv {
      color: blue;
    }
    
    
    .active .details {
      
        display: flex;
        flex-flow: column;
        padding: 20px;
        border: 2px solid rgb(0, 0, 0);
        border-radius: 20px;
        width: fit-content;
        height: fit-content;
        margin:auto;
    }
    
    .click-area {
        color:yellow;
        position:absolute;
        width: 100vw;
        height:110px;
        background-color:transparent;
        cursor: pointer;
       
      }
      
    
    
    
      .active .click-area{
        position:absolute;
        width: 100vw;
        height:110px;
        background-color:pink;
        cursor: pointer;
       
      }
  
    .click-area:hover {
      background-color: yellow;
      opacity:1;
      color:blue;
      
    }
  
    .click-area:hover .textDiv {
      color: blue;
       
    }
    
    </style>