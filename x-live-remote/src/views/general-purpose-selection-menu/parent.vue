<template>
  <div>
    <GeneralPurposeMenu
      :input="input"
      @menu-action="menuAction"
      @setting-action="settingAction"
    />
    <StatisticsPanel
      :inputString="inputString"
      :outputString="outputString"
      @save-action="saveInput"
    />
  </div>
</template>

<script>
import GeneralPurposeMenu from "./general-purpose-menu.vue";
import StatisticsPanel from "@/components/statistics-panel.vue";

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
      outputString: "",
      output: {
        selectionValue: 1,
        detailedSetting: true,
      },
    };
  },
  created() {
    this.loadInput();
  },
  methods: {
    loadInput() {
      this.input.selectionItem = data.generalPurposeInput;
      this.inputString = JSON.stringify(this.input, null, "\n");
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
    menuAction(_selectionValue) {
      this.output.selectionValue = _selectionValue;
      this.outputString = JSON.stringify(this.output, null, "\n");
    },
    settingAction(_detailedSetting) {
      this.output.detailedSetting = _detailedSetting;
      this.outputString = JSON.stringify(this.output, null, "\n");
    },
  },
  components: {
    GeneralPurposeMenu,
    StatisticsPanel,
  },
};
</script>
