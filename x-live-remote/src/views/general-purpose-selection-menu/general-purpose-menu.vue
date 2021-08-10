<template>
  <div class="scrollable-container">
    <div class="scrollable-container-column">
      <label class="selection-heading">
        {{ input.title }}
      </label>
      <hr size="1" width="100%" color="lightgreen" />
      <div class="scrollable-column">
        <div class="scrollable-column-child">
          <li
            class="selection-menu"
            v-for="item in input.selectionItem.data"
            :key="item.id"
            @click="menuAction(item.id)"
          >
            {{ item.text }}
          </li>
        </div>
      </div>
      <div class="selection-menu" v-if="input.presenceForDetailedSetting">
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
export default {
  name: "GeneralPurposeMenu",
  props: {
    input: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    menuAction(_itemId) {
      this.$emit("menu-action", _itemId);
    },
  },
};
</script>
