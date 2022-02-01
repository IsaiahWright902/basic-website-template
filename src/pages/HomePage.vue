<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12 text-center">
        <h1 class="page-heading">Website Template</h1>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12 text-center">
        <p>This is a very lightweight vite build built for speed including:</p>
        <p>Bootstrap | Sass | Sweet Alert</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.container {
  height: 80vh;
}
</style>
