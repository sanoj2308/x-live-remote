<template>
  <div>
    <ZoomSlider :zoomInput="input" @zoom-action="ZoomAction" />
    <StatisticsPanel
      :inputString="inputString"
      :outputString="outputString"
      @save-action="saveInput"
    />
  </div>
</template>

<script>
import ZoomSlider from "./zoom-slider.vue";
import StatisticsPanel from "@/components/statistics-panel.vue";

export default {
  name: "ZoomSliderParent",
  data() {
    return {
      input: {
        presence: true,
        digitalZoom: false,
      },
      inputString: "",
      outputString: "",
      output: {
        direction: "T",
        speed: 1,
        digitalZoom: false,
      },
    };
  },
  created() {
    this.loadInput();
  },
  methods: {
    loadInput() {
      this.inputString = JSON.stringify(this.input, null, "\n ");
      this.outputString = JSON.stringify(this.output, null, "\n");
    },
    saveInput(updatedString) {
      try {
        let parsedInput = JSON.parse(updatedString);
        this.input = parsedInput;
      } catch (exception) {
        alert(exception);
      }
    },
    ZoomAction(_direction, _speed, _digitalZoom) {
      this.output.direction = _direction;
      this.output.speed = _speed;
      this.output.digitalZoom = _digitalZoom;
      this.outputString = JSON.stringify(this.output, null, "\n");
    },
  },
  components: {
    ZoomSlider,
    StatisticsPanel,
  },
};
</script>
