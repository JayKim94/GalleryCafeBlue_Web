<template>
  <div class="content-container" :class="{ mobile: mobile }">
    <IntroContent :is-mobile="mobile" />
    <StoryContent :is-mobile="mobile" />
  </div>
</template>

<script>
import IntroContent from "./contents/IntroContent.vue";
import StoryContent from "./contents/StoryContent.vue";

export default {
  components: {
    IntroContent,
    StoryContent,
  },
  data() {
    return {
      mobile: screen.width < 768 ? true : false,
    };
  },
};
</script>

<style lang="scss" scoped>
.content-container {
  background-color: $white-color;
  z-index: 10;

  &.mobile {
    margin-top: 70px;
  }
}
</style>