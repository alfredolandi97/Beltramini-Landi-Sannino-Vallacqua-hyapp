<template>
  <div class="card1" :class="{ active: showDescription }">
    <div class="rectangle">
      <span class="textDiv">METAVERSE</span>
      <div class="click-area" @click="toggleDescription"></div>
      <div class="details" v-if="showDescription">
        <div class="details-content" v-for="item in additionalDetails" :key="item.id">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <img :src="item.imageSrc" alt="Extra Image">
        </div>
      </div>
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



<style scoped>
.card1 {
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid yellow;
  margin-left: -2px;
}

.card1:hover {
  border: 2px solid blue;
}

.rectangle {
  width: 100vw;
  height: fit-content;
  background-color: blue;
  transition: background-color 0.5s;
  display: flex;
  flex-flow: column;
  position: relative;
}

.rectangle:hover .textDiv {
  color: blue;
}

.textDiv {
  color: yellow;
  font-size: 100px;
  margin-left: 50px;
  transition: color 0.5s;
}

.click-area {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.details {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
  background-color: yellow;
}

.active .details {
  display: block;
}

.active .textDiv {
  color: blue;
}
</style>