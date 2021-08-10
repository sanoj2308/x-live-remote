<template>
  <div>
    <GeneralPurposeMenu
      :input="input"
      @menu-action="menuAction"
      @setting-action="settingAction"
    />
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
        <button class="save-input" @click="saveInput()">SAVE</button>
      </div>
      <div class="statistics-output">
        <label class="statistics-label">OUTPUT</label>
        <div class="statistics-sep" />
        {{ JSON.stringify(output, null, "\n ") }}
      </div>
    </div>
  </div>
</template>

<script>
import GeneralPurposeMenu from "./general-purpose-menu.vue";
import { data } from "../../shared";

export default {
  name: "GeneralPurposeMenuParent",
  data() {
    return {
      input: {
        title: "タイトル",
        selectionItem: {},
        selectionValue: 1,
        presenceForDetailedSetting: true,
        detailedSetting: true,
      },
      inputString: "",
      output: {
        selectionValue: 1,
        detailedSetting: true,
      },
    };
  },
  created() {
    this.loadInput();
    this.inputString = JSON.stringify(this.input, null, "\n");
  },
  methods: {
    loadInput() {
      this.input.selectionItem = data.generalPurposeInput;
    },
    saveInput() {
      try {
        let parsedInput = JSON.parse(this.inputString);
        this.input = parsedInput;
      } catch (exception) {
        alert(exception);
        this.inputString = "";
      }
    },
    menuAction(_selectionValue) {
      this.output.selectionValue = _selectionValue;
    },
    settingAction(_detailedSetting) {
      this.output.detailedSetting = _detailedSetting;
    },
  },
  components: {
    GeneralPurposeMenu,
  },
};
</script>
