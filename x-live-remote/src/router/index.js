import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/zoom-slider",
    name: "ZoomSlider",
    component: () =>
      import(
        /* webpackChunkName: "zoom-slider" */ "../views/zoom-operation-slider/parent.vue"
      ),
  },
  {
    path: "/zoom-guide",
    name: "ZoomGuide",
    component: () =>
      import(
        /* webpackChunkName: "zoom-guide" */ "../views/zoom-guide/parent.vue"
      ),
  },
  {
    path: "/distance-slider",
    name: "DistanceSlider",
    component: () =>
      import(
        /* webpackChunkName: "distance-slider" */ "../views/distance-index-slider.vue"
      ),
  },
  {
    path: "/general-purpose-menu",
    name: "GeneralPurposeMenu",
    component: () =>
      import(
        /* webpackChunkName: "general-purpose-menu" */ "../views/general-purpose-selection-menu.vue"
      ),
  },
  {
    path: "/drum-roll",
    name: "DrumRoll",
    component: () =>
      import(
        /* webpackChunkName: "drum-roll" */ "../views/drum-roll.vue"
      ),
  },
  {
    path: "/tone-curve",
    name: "ToneCurve",
    component: () =>
      import(
        /* webpackChunkName: "tone-curve" */ "../views/tone-curve.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
