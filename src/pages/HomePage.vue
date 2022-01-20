<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12 text-center">
        <h1 class="page-heading">Website Template</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
export default {
  name: "Home",
  setup() {
    const state = reactive({
      message: "",
    });
    return {
      state,
      showMessage() {
        state.message = "Welcome to this app";
      },
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
