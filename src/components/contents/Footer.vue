<template>
  <footer id="footer-container">
    <p class="footer-text" :class="{ mobile: mobile }">{{ footerTextA }}</p>
    <p class="footer-text" :class="{ mobile: mobile }">{{ footerTextB }}</p>
    <p class="footer-text" :class="{ mobile: mobile }">{{ footerTextC }}</p>
    <div class="social-media" :class="{ mobile: mobile }">
      <div class="chang">
        갤러리 창 인스타그램
        <img
          src="../../assets/instagram.png"
          alt="instagram icon"
          class="icon-img"
          :class="{ mobile: mobile }"
        />
      </div>
      <div class="blue">
        갤러리 카페 블루 인스타그램
        <img
          src="../../assets/instagram.png"
          alt="instagram icon"
          class="icon-img"
          :class="{ mobile: mobile }"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import CONSTANTS from "../contents/constants";

export default {
  props: ["isMobile"],
  data() {
    return {
      mobile: this.isMobile,
      footerTextA: CONSTANTS.FOOTER_TEXT_A,
      footerTextB: CONSTANTS.FOOTER_TEXT_B,
      footerTextC: CONSTANTS.FOOTER_TEXT_C,
    };
  },
};
</script>

<style lang="scss" scoped>
#footer-container {
  @include flex-column-center;
  margin: 2rem 0 0 0;
}

.footer-text {
  @include font-dense-muted($blue-color);
  font-size: 0.85rem;
  text-align: center;

  &.mobile {
    font-size: 0.65rem;
  }
}

.social-media {
  @include flex-row-center;
  margin: 4rem 0;
  cursor: pointer;
  gap: 50px;

  &.mobile {
    gap: 20px;
  }
}

.social-media > * {
  @include flex-row-center;
  @include font-small($blue-color);
  font-weight: 400;
  gap: 8px;
}

.icon-img {
  width: 25px;
  &.mobile {
    width: 20px;
  }
}
</style>