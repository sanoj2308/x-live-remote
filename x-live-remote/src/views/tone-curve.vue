<template>
  <div id="container">
    <img class="img" src="@/assets/cat.jpg" alt="" />
    <canvas id="imageCanvas" width="300" height="300"></canvas>
  </div>
</template>

<script>
export default {
  name: "ToneCurve",
  mounted() {
    var c = document.getElementById("imageCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.quadraticCurveTo(300, 150, 300, 0);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.stroke();
  },
};
</script> 

<style scoped>
.img {
  position: absolute;
  z-index: 1;
}

#container {
  display: inline-block;
  width: 302px;
  height: 302px;
  margin: 0 auto;
  background: black;
  position: relative;
  border: solid 1px;
}

#imageCanvas {
  position: relative;
  z-index: 20;
}
</style>
