<template>
  <div class="container">
    <div :class="{ titleText: titleText != null }">{{ titleText }}</div>
    <div
      class="slider-container"
      :id="identifier_name"
      :class="{ mobile: mobile }"
    >
      <div class="slides" :style="{ width: slidersWidth + 'px' }">
        <div
          class="slide"
          :class="{ static: item.description != null, mobile: isMobile }"
          v-for="(item, index) in items"
          :key="index"
        >
          <img
            :src="item.source"
            :alt="item.alt"
            :style="{ width: imgWidth + '%' }"
            :class="{
              shadow: boxShadow,
              mobile: mobile,
              full: item.description == null,
            }"
          />
          <div
            v-if="item.description != null"
            class="item-text"
            :class="{ mobile: mobile }"
          >
            <span>{{ item.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="indicators"
      class="current-indicators"
      :class="{ mobile: mobile }"
    >
      <div
        class="dot"
        v-for="(item, index) in items"
        :key="index"
        :class="{ current: currentIndex == index }"
      ></div>
    </div>
  </div>
</template>

<script>
const getPositionX = (event) => {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
};

export default {
  props: [
    "identifier",
    "isMobile",
    "images",
    "showIndicators",
    "imageWidth",
    "shadow",
    "title",
  ],
  data() {
    return {
      identifier_name: this.identifier,
      slider: null,
      slides: null,
      isDragging: false,
      startPos: 0,
      currentTranslate: 0,
      prevTranslate: 0,
      animationID: 0,
      currentIndex: 0,
      mobile: this.isMobile,
      items: this.images,
      indicators: this.showIndicators,
      imgWidth: this.imageWidth,
      boxShadow: this.shadow,
      titleText: this.title,
    };
  },
  methods: {
    touchStart: function (index) {
      var self = this;
      return function (event) {
        self.currentIndex = index;
        self.startPos = getPositionX(event);
        self.isDragging = true;

        self.animationID = requestAnimationFrame(self.animation);
        self.slider.classList.add("grabbing");
      };
    },
    touchEnd: function () {
      this.isDragging = false;
      this.slider.classList.remove("grabbing");

      const movedBy = this.currentTranslate - this.prevTranslate;

      if (movedBy < -10 && this.currentIndex < this.slides.length - 1) {
        console.log(this.slides.length);
        this.currentIndex += 1;
      }
      if (movedBy > 10 && this.currentIndex > 0) {
        this.currentIndex -= 1;
      }

      this.setPositionByIndex();

      cancelAnimationFrame(this.animationID);
    },
    touchMove: function (event) {
      if (this.isDragging) {
        const currentPosition = getPositionX(event);
        this.currentTranslate =
          this.prevTranslate + currentPosition - this.startPos;
      }
    },
    animation: function () {
      this.setSliderPosition();
      if (this.isDragging) requestAnimationFrame(this.animation);
    },
    setSliderPosition: function () {
      this.slider.style.transform = `translateX(${this.currentTranslate}px)`;
    },
    setPositionByIndex: function () {
      this.currentTranslate = this.currentIndex * -window.innerWidth;
      this.prevTranslate = this.currentTranslate;

      this.setSliderPosition();
    },
  },
  mounted() {
    this.slider = document.querySelector("#" + this.identifier_name);
    this.slides = Array.from(
      document.querySelectorAll("#" + this.identifier_name + " .slide")
    );

    this.slides.forEach((slide, index) => {
      const slideImage = slide.querySelector("img");
      slideImage.addEventListener("dragstart", (e) => {
        e.preventDefault();
      });

      // Touch events
      slide.addEventListener("touchstart", this.touchStart(index));
      slide.addEventListener("touchend", this.touchEnd);
      slide.addEventListener("touchmove", this.touchMove);

      // Mouse events
      slide.addEventListener("mousedown", this.touchStart(index));
      slide.addEventListener("mouseup", this.touchEnd);
      slide.addEventListener("mouseleave", this.touchEnd);
      slide.addEventListener("mousemove", this.touchMove);
    });

    // Disables context menu
    window.oncontextmenu = function (e) {
      e.preventDefault();
      e.stopPropagation();

      return false;
    };
  },
  computed: {
    slidersWidth: function () {
      return this.images.length * window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  @include flex-column;
  overflow: visible;
  max-width: 100vw;
  height: 100%;
  padding: 5rem 0 2rem 0;
}

.titleText {
  @include font-title;
  font-size: 2.5rem;
  background-color: $blue-color;
  padding: 2rem 0;
  width: auto;
  letter-spacing: -2px;
}

.slider-container {
  @include flex-column(flex-start, flex-start);
  @include transition(transform, 250ms, ease-out);
  transform: translateX(0);
  padding: 2rem 0;
  position: relative;
  z-index: 10;

  &.grabbing {
    img {
      @include transition(all, 250ms, ease-in-out);
      transform: scale(0.9, 0.9);
    }
  }

  &.mobile {
    padding: 0 0;
  }

  .slides {
    @include flex-row(center, flex-start);
    cursor: grabbing;

    .slide {
      flex: 1;
      @include flex-column(space-between, center);
      height: auto;
      margin-top: 50px;

      &.static {
        margin-top: 0;
        height: 850px;
        &.mobile {
          height: auto !important;
        }
      }

      & > * {
        flex: 1;
        vertical-align: bottom;
      }

      .item-text {
        @include font-normal($blue-color);
        @include flex-row(center, flex-end);
        position: relative;
        bottom: 0;
        width: 680px;
        max-width: 50%;
        text-align: left;
        line-height: 2.5rem;
        span {
          justify-self: flex-end;
        }
        &.mobile {
          @include font-small($blue-color);
          max-width: 80%;
          margin: 0 0 1rem 0;
        }
      }

      user-select: none;

      img {
        &.shadow {
          @include elevate-1;
        }
        @include image-options;
        min-height: 625px;

        &.mobile {
          min-height: 425px;
        }
        &.mobile.full {
          min-height: auto !important;
        }
      }
    }
  }
}

.current-indicators {
  @include flex-row-center;

  width: 100vw;
  margin: 3rem 0 5rem 0;
  gap: 15px;

  &.mobile {
    margin: 2rem 0 3rem 0;
  }

  .dot {
    @include square(12px);
    @include transition(background-color, 200ms);
    border: 1px $blue-color solid;
    border-radius: 50%;
    opacity: 0.75;
    &.current {
      background-color: $blue-color;
    }
  }

  &.mobile .dot {
    @include square(8px);
  }
}

@media only screen and (max-width: 768px) {
  .container {
    padding: 0;
  }

  .titleText {
    font-size: 1.5rem;
    padding: 1rem 0;
  }

  .slides {
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }

  .slide {
    width: 100vw !important;
  }
}
</style>