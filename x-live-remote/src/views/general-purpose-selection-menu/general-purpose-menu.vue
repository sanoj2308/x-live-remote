<template>
  <div class="scrollable-container">
    <div class="scrollable-container-column">
      <div class="selection-menu">
        <label class="selection-heading">
          {{ input.title }}
        </label>
      </div>
      <hr size="1" width="100%" color="lightgreen" />
      <div class="scrollable-column">
        <div class="scrollable-column-child">
          <li
            class="selection-menu"
            v-for="item in input.selectionItem.data"
            :key="item.id"
            @click="menuAction(item.id)"
          >
            <div class="" v-if="item.text">
              {{ item.text }}
            </div>
            <div class="" v-if="item.class">
              <span>
                <img :src="item.class.icon" width="20" height="15" />
                {{ item.class.name }}
              </span>
            </div>
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
