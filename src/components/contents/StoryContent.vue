<template>
  <div class="container">
    <!-- FIRST RIBBON -->
    <div class="header" :class="{ mobile: mobile }">BLUE STORY</div>
    <div class="content-container" :class="{ mobile: mobile }">
      <p class="content" :class="{ mobile: mobile }">
        {{ contentTextA }}
      </p>
      <p class="content" :class="{ mobile: mobile }">
        {{ contentTextB }}
      </p>
    </div>
    <div class="gallery-container" :class="{ mobile: mobile }">
      <div class="panel">
        <img src="../../assets/story_1.jpg" class="story_1" />
        <img src="../../assets/story_3.jpg" class="story_3" />
        <img src="../../assets/story_5.jpg" class="story_5" />
        <img src="../../assets/story_6.jpg" class="story_6" />
      </div>
      <div class="panel">
        <img src="../../assets/story_2.jpg" class="story_2" />
        <img src="../../assets/story_4.jpg" class="story_4" />
      </div>
    </div>
    <div class="content-container" :class="{ mobile: mobile }">
      <div class="content" :class="{ mobile: mobile }">{{ contentTextC }}</div>
    </div>
    <div class="gallery-container reverse" :class="{ mobile: mobile }">
      <div class="panel">
        <img src="../../assets/story_7.jpg" alt="" class="story_7" />
        <img src="../../assets/story_10.jpg" alt="" class="story_10" />
      </div>
      <div class="panel">
        <img src="../../assets/story_8.jpg" alt="" class="story_8" />
        <img src="../../assets/story_9.jpg" alt="" class="story_9" />
        <img src="../../assets/story_11.jpg" alt="" class="story_11" />
      </div>
    </div>
    <!-- SECOND RIBBON -->
    <div class="header" :class="{ mobile: mobile }">EXHIBITION</div>
    <Slider
      identifier="exhibitionSlider"
      :is-mobile="isMobile"
      :images="images"
      :show-indicators="true"
      :image-width="isMobile ? 100 : 35"
      :shadow="true"
    />
  </div>
</template>

<script>
import CONSTANTS from "./constants";
import Slider from "../shared/Slider.vue";
import SliderImage_1 from "../../assets/story_slider_1.jpg";
import SliderImage_2 from "../../assets/story_slider_2.jpg";
import SliderImage_3 from "../../assets/story_slider_3.jpg";

export default {
  props: ["isMobile"],
  components: {
    Slider,
  },
  data() {
    return {
      mobile: this.isMobile,
      contentTextA: CONSTANTS.STORY_TEXT_A,
      contentTextB: CONSTANTS.STORY_TEXT_B,
      contentTextC: CONSTANTS.STORY_TEXT_C,
      images: [
        {
          source: SliderImage_1,
          alt: "exhibition by gallery chang",
        },
        {
          source: SliderImage_2,
          alt: "exhibition by gallery chang",
        },
        {
          source: SliderImage_3,
          alt: "exhibition by gallery chang",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  @include fade-in-on-enter(4s);
  @include flex-column;
  background-color: $white-color;
  z-index: 100;
}

/* Ribbon headers */
.header {
  @include font-header;
  width: 500px;
  position: relative;
  left: -4px;
  margin-top: 5rem;
  padding: 5px 0;
  border-radius: 1px;
  background-color: $blue-color;

  &.mobile {
    width: 190px;
    padding: 1.5px 0;
    font-size: $header-text-size-mobile;
  }
}

/* Paragraphs */
.content-container {
  @include flex-column;
  gap: 4rem;
  margin: 8rem 0;

  &.mobile {
    gap: 2rem;
    margin: 3rem 0;
  }

  .content {
    @include font-content($blue-color);
    align-self: center;
    width: 800px;

    &.mobile {
      width: 80%;
      line-height: $line-height-normal;
      font-size: $content-text-size-mobile;
    }
  }
}

/* Galleries */
.gallery-container {
  $gaps: 12px;

  display: grid;
  grid-template-columns: 1.56fr 1fr;
  gap: $gaps;
  margin: 0 10%;
  position: relative;
  max-width: 100vw;

  &.reverse {
    grid-template-columns: 1fr 1.07fr;
  }

  &.mobile {
    grid-template-columns: 1.47fr 1fr;
    margin: 0;
  }

  &.mobile.reverse {
    grid-template-columns: 1fr 1.035fr;
  }

  .panel {
    @include flex-column;
    gap: $gaps;
  }

  img {
    @include image-options;
    z-index: 100;
    $padding_value: 25px;

    &.story_2 {
      padding-right: $padding_value;
    }

    &.story_5 {
      padding-left: $padding_value;
    }

    &.story_6 {
      padding-left: $padding_value;
    }

    &.story_7 {
      padding-left: $padding_value;
    }

    &.story_9 {
      padding-right: $padding_value;
    }

    &.story_11 {
      padding-right: $padding_value;
    }
  }
}
</style>