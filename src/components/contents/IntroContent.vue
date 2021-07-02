<template>
  <div class="intro-container" :class="{ mobile: mobile }">
    <!-- CONTENT -->
    <div v-if="!mobile" class="two-tone">
      <div class="span-image">
        <img id="intro-img" src="../../assets/intro_img.png" />
      </div>
      <div class="upper">
        <div class="wrapper-grid">
          <span class="title-text">
            Gallery Cafe <span class="blue-text">Blue</span>
          </span>
          <span class="upper-text">
            <p>{{ introText_A }}</p>
            <p>{{ introText_B }}</p>
          </span>
        </div>
      </div>
      <div class="lower">
        <div class="wrapper-grid">
          <span class="lower-text">
            <p>{{ introText_C }}</p>
            <p>{{ introText_D }}</p>
          </span>
        </div>
      </div>
    </div>
    <!-- CONTENT MOBILE -->
    <div v-if="mobile" class="two-tone mobile">
      <div class="span-image mobile">
        <img id="intro-img" class="mobile" src="../../assets/intro_img.png" />
      </div>
      <div class="upper mobile">
        <div class="wrapper-grid mobile">
          <span class="title-text mobile">
            Gallery Cafe <span class="blue-text">Blue</span>
          </span>
        </div>
      </div>
      <div class="lower mobile">
        <div class="wrapper-grid mobile">
          <span class="lower-text mobile">
            <p class="muted">{{ introText_C }}</p>
            <p class="muted">{{ introText_D }}</p>
            <p class="highlight">
              {{ introText_E }}
            </p>
            <p class="signature">_____BLUE</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CONSTANTS from "./constants";

export default {
  props: ["isMobile"],
  data() {
    return {
      mobile: this.isMobile,
      introText_A: CONSTANTS.INTRO_TEXT_DESKTOP_A,
      introText_B: CONSTANTS.INTRO_TEXT_DESKTOP_B,
      introText_C: CONSTANTS.INTRO_TEXT_DESKTOP_C,
      introText_D: CONSTANTS.INTRO_TEXT_DESKTOP_D,
      introText_E: CONSTANTS.INTRO_TEXT_DESKTOP_E,
    };
  },
};
</script>

<style lang="scss" scoped>
.intro-container {
  @include flex-column(center, flex-start);
  @include transition(opacity);
  @include fade-in-on-enter(1000ms);

  width: 100%;
  gap: 3rem;

  &.mobile {
    @include flex-column(flex-start, flex-start);
    animation: none;
    gap: 0;
  }
}

.two-tone {
  display: grid;
  grid-template-rows: 300px 300px;
  position: relative;
  width: 100%;

  &.mobile {
    grid-template-rows: 164px 170px;
  }

  /* WRAPPER FOR TEXTS */
  .wrapper-grid {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    width: 100%;

    &.mobile {
      grid-template-columns: 1fr;
      height: 80%;
    }
  }

  /* UPPER PART */
  .upper {
    @include flex-row-center;
    grid-row: 1;
    background-color: $light-blue-color;

    &.mobile {
      @include flex-row(flex-start, center);
    }

    .title-text {
      @include font-title;
      place-self: center center;
      grid-column: 1;

      height: 150px;

      &.mobile {
        place-self: start start;
        font-size: 2rem;
        margin-left: 2rem;
        margin-top: 1rem;
      }

      .blue-text {
        color: $blue-color;
      }
    }
    .upper-text {
      @include font-normal;
      @include flex-column;
      gap: 1rem;
      grid-column: 2;
      place-self: center start;
      color: $blue-color;
    }
  }

  /* LOWER PART */
  .lower {
    @include flex-row-center;
    grid-row: 2;
    background-color: $blue-color;

    &.mobile {
      @include flex-row(center, center);
    }

    .lower-text {
      @include flex-column(flex-end, flex-start);
      @include font-normal;

      grid-column: 2;
      place-self: start start;

      gap: 1rem;

      /* MOBILE EXCLUSIVES */
      &.mobile {
        @include font-small;
        font-size: 0.65rem;
        grid-column-start: 1;
        grid-column-end: 2;
        place-self: center center;
        height: 100%;
        width: auto;
        margin-top: 1rem;
        gap: 0;
      }
    }

    .muted {
      opacity: 0.65;
    }

    .highlight {
      margin-top: 1rem;
    }

    .signature {
      width: 100%;
      text-align: right;
      margin-top: 0.5rem;
      margin-bottom: 1.75rem;
    }
  }

  .span-image {
    @include absolute-center(-85%, -30%);

    &.mobile {
      @include translate(-55%, -65%);
      width: 100%;
    }

    img#intro-img {
      @include image-options;
    }
  }
}

@media only screen and (max-width: 768px) {
  .loader {
    width: 100vw;
    min-height: 400px;
  }
}
</style>