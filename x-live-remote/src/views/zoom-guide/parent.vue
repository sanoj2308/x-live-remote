<template>
  <div>
    <zoom-guide v-bind:input="input" />
    <StatisticsPanel
      :inputString="inputString"
      @save-action="saveInput"
    />
  </div>
</template>

<script>
import ZoomGuide from "./zoom-guide.vue";
import StatisticsPanel from "@/components/statistics-panel.vue";

export default {
  name: "ZoomGuideParent",
  data() {
    return {
      input: {
        zoomPosition: 0,
      },
      inputString: "",
    };
  },
  created() {
    this.loadInput();
    
  },
  methods: {
    loadInput() {
      this.inputString = JSON.stringify(this.input, null, "\n ");
    },
    saveInput(updatedString) {
      try {
        let parsedInput = JSON.parse(updatedString);
        this.input = parsedInput
      } catch (exception) {
        alert(exception);
      }
    },
  },
  components: {
    ZoomGuide,
    StatisticsPanel,
  },
};
</script>
