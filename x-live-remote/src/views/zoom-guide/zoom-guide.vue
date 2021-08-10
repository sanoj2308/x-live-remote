<template>
  <div class="screen2">
    <span><img src="https://img.icons8.com/ios/50/000000/w.png" /></span>
    <span class="slider-container">
      <input
        type="range"
        min="1"
        max="100"
        :value="sliderValue"
        class="zoom-slider"
        id="myRange"
        disabled
      />
    </span>
    <span><img src="https://img.icons8.com/ios/50/000000/t.png" /></span>
  </div>
</template>
<script>
export default {
  name: "ZoomGuide",
  props: {
    input: {
      type: Object,
      default: function () {
        return { zoomPosition: 0 };
      },
    },
  },
  data() {
    return {
      sliderValue: this.input.zoomPosition,
    };
  },
  watch: {
    input: function (input) {
      console.log(input);
      this.sliderValue = input.zoomPosition;
    },
  },
};
</script>

<style scoped>
.zoom-slider {
  -webkit-appearance: none;
  width: 80%;
  height: 25px;
  background: white;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border: solid 2px;
}

.zoom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: black;
}

.zoom-slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}
img {
  height: 30px;
  width: 30px;
}
.slider-container {
  margin: 5px;
}
input[type="range" i]:disabled {
  background-color: initial;
  color: black;
}
</style>