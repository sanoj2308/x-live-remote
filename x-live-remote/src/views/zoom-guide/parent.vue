<template>
  <div>
    <zoom-guide v-bind:input="zoomInput"/>
    <div class="statistics">
      <div class="statistics-input">
        <label class="statistics-label">INPUT</label>
        <div class="statistics-sep" />
        <input
          class="stat-input"
          type="text"
          name="stat-input"
          v-model="inputString"
        />
        <div class="statistics-sep" />
        <button class="save-input" @click="updateInput()">SAVE</button>
      </div>
      <div class="statistics-sep" />
    </div>
  </div>
</template>

<script>
import ZoomGuide from './zoom-guide.vue';

export default {
  name: "ZoomSliderParent",
  data() {
    return {
      zoomInput: {
        zoomPosition: 0,
      },
      inputString: ""
    };
  },
  created() {
    this.inputString =  JSON.stringify(this.zoomInput, null, "\n ")
  },
  methods: {
    updateInput() {
      try {
        this.zoomInput = JSON.parse(this.inputString);
      } catch (e) {
        alert(e);
        this.inputString = "";
      }
      console.log(this.zoomInput);
    }
  },
  components: {
    ZoomGuide
  },
};
</script>
