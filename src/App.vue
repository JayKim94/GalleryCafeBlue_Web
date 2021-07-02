<template>
  <div id="app">
    <DynamicHeader :is-mobile="isMobile" />
    <router-view></router-view>
    <Footer :is-mobile="isMobile" />
  </div>
</template>

<script>
import DynamicHeader from "./components/DynamicHeader.vue";
import Footer from "./components/contents/Footer.vue";

export default {
  name: "App",
  components: {
    DynamicHeader,
    Footer,
  },
  data() {
    return {
      isMobile: null,
    };
  },
  methods: {
    updateSize() {
      this.isMobile = screen.width <= 768 ? true : false;
    },
  },
  created() {
    this.updateSize();
    window.addEventListener("resize", this.updateSize);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-size: 16pt;
  font-family: "Noto Sans KR", sans-serif;
}

#app {
  @include flex-column;
  width: inherit;
  height: inherit;
}
</style>
