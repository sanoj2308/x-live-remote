<template>
  <div>
    <ZoomSlider :zoomInput="zoomInput" @action="ZoomAction" />
    <div class="statistics">
      <div class="statistics-input">
        <label class="statistics-label">INPUT</label>
        <div class="statistics-sep" />
        <input
          class="stat-input"
          type="text"
          name="stat-input"
          v-model="zoomInputString"
        />
        <div class="statistics-sep" />
        <button class="save-input" @click="saveInput()">SAVE</button>
      </div>
      <div class="statistics-output">
        <label class="statistics-label">OUTPUT</label>
        <div class="statistics-sep" />
        {{ JSON.stringify(zoomOutput, null, "\n ") }}
      </div>
    </div>
  </div>
</template>

<script>
import ZoomSlider from "./zoom-slider.vue";

export default {
  name: "ZoomSliderParent",
  data() {
    return {
      zoomInput: {
        presence: true,
        digitalZoom: false,
      },
      zoomInputString: "",
      zoomOutput: {
        direction: "T",
        speed: 1,
        digitalZoom: false,
      },
    };
  },
  created() {
    this.zoomInputString = JSON.stringify(this.zoomInput, null, "\n ");
  },
  methods: {
    saveInput() {
      try {
        let parsedInput = JSON.parse(this.zoomInputString);
        this.zoomInput = parsedInput;
      } catch (exception) {
        alert(exception);
        this.zoomInputString = "";
      }
    },
    ZoomAction(_direction, _speed, _digitalZoom) {
      this.zoomOutput.direction = _direction;
      this.zoomOutput.speed = _speed;
      this.zoomOutput.digitalZoom = _digitalZoom;
    },
  },
  components: {
    ZoomSlider,
  },
};
</script>
