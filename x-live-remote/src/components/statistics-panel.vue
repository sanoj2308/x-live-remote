<template>
  <div>
    <div class="statistics">
      <div class="statistics-input">
        <label class="statistics-label">INPUT</label>
        <div class="statistics-sep" />
        <input class="stat-input" type="text" v-model="inputStringClone" />
        <div class="statistics-sep" />
        <button class="save-input" @click="updateOutput()">SAVE</button>
      </div>
      <div class="statistics-output">
        <label class="statistics-label">OUTPUT</label>
        <div class="statistics-sep" />
        {{ outputString }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsPanel",
  props: {
    inputString: {
      type: String,
      required: false,
    },
    data() {
      return {
        inputStringClone: "",
      };
    },
    outputString: {
      type: String,
      required: false,
    },
  },
  created() {
    this.inputStringClone = this.inputString;
  },
  methods: {
    updateOutput() {
      this.$emit("save-action", this.inputStringClone);

    },
  },
};
</script>