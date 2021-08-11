<template>
  <div class="container">
    <div class="slider-column">
      <button class="zoom-button">
        {{ zoomSlider.heading }}
      </button>
      <hr size="1" width="100%" color="lightgreen" />
      <button class="zoom-button" @click="zoomAction('T', 1, false)">
        {{ zoomSlider.teleLowVelocity }}
      </button>
      <button class="zoom-button" @click="zoomAction('T', 6, false)">
        {{ zoomSlider.teleVelocity }}
      </button>
      <button class="zoom-button" @click="zoomAction('T', 3, false)">
        {{ zoomSlider.teleLowSpeed }}
      </button>
      <button
        class="zoom-button operation-bar"
        @click="zoomAction('T', 1, false)"
      >
        {{ zoomSlider.operationBar }}
      </button>
      <button class="zoom-button" @click="zoomAction('W', 1, false)">
        {{ zoomSlider.wideLowSpeed }}
      </button>
      <button class="zoom-button" @click="zoomAction('W', 6, false)">
        {{ zoomSlider.wideVelocity }}
      </button>
      <button class="zoom-button" @click="zoomAction('W', 3, false)">
        {{ zoomSlider.wideLowVelocity }}
      </button>
      <div class="zoom-button" v-if="zoomInput.presence">
        <hr size="1" width="100%" color="lightgreen" />
        <label class="switch" >
          <input type="checkbox" id="togBtn" />
          <div class="slider round"></div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZoomSlider",
  props: {
    zoomInput: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      zoomSlider: {
        heading: "ズーム",
        teleLowVelocity: "T",
        teleVelocity: "^^",
        teleLowSpeed: "^",
        operationBar: "=",
        wideLowSpeed: "v",
        wideVelocity: "vv",
        wideLowVelocity: "W",
      },
    };
  },
  methods: {
    zoomAction(_direction, _speed, _digitalZoom) {
      this.$emit("zoom-action", _direction, _speed, _digitalZoom);
    },
  },
};
</script>
