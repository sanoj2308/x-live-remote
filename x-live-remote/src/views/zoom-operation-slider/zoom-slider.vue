<template>
  <div class="container">
    <div class="slider-column">
      <button class="zoom-button">ズーム</button>
      <hr size="1" width="100%" color="lightgreen" />
      <draggable
        :list="zoomSliderData"
        :animation="500"
        ghost-class="ghost"
        group="tasks"
        :move="checkMove"
        handle=".handle"
        direction="vertical"
        style="display-block"
      >
        <button
          class="zoom-button"
          v-for="data in zoomSliderData"
          :key="data.id"
          :class="{ 'handle operation-bar direction': data.move }"
          @click="zoomAction(data.direction, data.speed, false)"
          :name="data.text"
        >
          {{ data.text }}
        </button>
      </draggable>
      <div class="zoom-button" v-if="zoomInput.presence">
        <hr size="1" width="100%" color="lightgreen" />
        <label class="switch">
          <input type="checkbox" id="togBtn" />
          <div class="slider round"></div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { data } from "../../shared";

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
      zoomSliderData: [],
    };
  },
  created() {
    this.zoomSliderData = data.zoomSliderData;
  },
  methods: {
    zoomAction(_direction, _speed, _digitalZoom) {
      this.$emit("zoom-action", _direction, _speed, _digitalZoom);
    },
    checkMove: function (evt) {
      switch (evt.draggedContext.futureIndex) {
        case 0:
          this.$emit("zoom-action", "T", 1, false);
          break;
        case 1:
          this.$emit("zoom-action", "T", 6, false);
          break;
        case 2:
          this.$emit("zoom-action", "T", 3, false);
          break;
        case 4:
          this.$emit("zoom-action", "W", 1, false);
          break;
        case 5:
          this.$emit("zoom-action", "W", 6, false);
          break;
        case 6:
          this.$emit("zoom-action", "W", 3, false);
          break;
      }

      return false;
    },
  },
  components: {
    draggable,
  },
};
</script>

<style scoped>
.ghost {
  opacity: 0.6;
}
</style>
