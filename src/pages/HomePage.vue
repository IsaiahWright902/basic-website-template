<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12 text-center">
        <h1 class="page-heading">Website Template</h1>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-12 text-center">
        <p>
          This is a very lightweight vite build. Built for speed and compression
          including:
        </p>
        <p>Bootstrap</p>
        <p>Sass</p>
        <p>Sweet Alert</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <img
          class="img-fluid"
          src="https://ih1.redbubble.net/image.652172967.8484/flat,750x,075,f-pad,750x1000,f8f8f8.u6.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
export default {
  name: "Home",
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
