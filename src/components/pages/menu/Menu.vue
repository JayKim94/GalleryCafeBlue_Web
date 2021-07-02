<template>
  <div class="menu-container">
    <Slider
      identifier="coffeeSlider"
      :is-mobile="isMobile"
      :images="coffees"
      :showIndicators="true"
      :image-width="isMobile ? 50 : 30"
      :shadow="false"
      title="COFFEE"
    />
    <Slider
      identifier="beverageSlider"
      :is-mobile="isMobile"
      :images="beverages"
      :showIndicators="true"
      :image-width="isMobile ? 60 : 30"
      :shadow="false"
      title="BEVERAGE"
    />
    <Slider
      identifier="brunchSlider"
      :is-mobile="isMobile"
      :images="brunches"
      :showIndicators="true"
      :image-width="isMobile ? 60 : 30"
      :shadow="false"
      title="BRUNCH"
    />
    <Slider
      identifier="extraSlider"
      :is-mobile="isMobile"
      :images="extras"
      :showIndicators="true"
      :image-width="isMobile ? 60 : 30"
      :shadow="false"
      title="EXTRA"
    />
  </div>
</template>

<script>
import Coffee_1 from "../../../assets/coffee_1.png";
import Coffee_2 from "../../../assets/coffee_2.png";
import Beverage_1 from "../../../assets/bev_1.png";
import Beverage_2 from "../../../assets/bev_2.png";
import Beverage_3 from "../../../assets/bev_3.png";
import Beverage_4 from "../../../assets/bev_4.png";
import Slider from "../../../components/shared/Slider.vue";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      isMobile: screen.width < 768 ? true : false,
      coffees: [
        {
          source: Coffee_1,
          alt: "iced americano",
          description:
            "복잡한 도심를 떠나 한적하고 아름다운 정원에서 신선한 음료와 브런치를  여유롭게 즐기고 누리며 예술작품까지 감상하는 소규모 프라이빗한 공간",
        },
        {
          source: Coffee_2,
          alt: "black coffee",
          description:
            "복잡한 도심를 떠나 한적하고 아름다운 정원에서 신선한 음료와 브런치를  여유롭게 즐기고 누리며 예술작품까지 감상하는 소규모 프라이빗한 공간",
        },
      ],
      beverages: [
        {
          source: Beverage_1,
          alt: "",
          description:
            "복잡한 도심를 떠나 한적하고 아름다운 정원에서 신선한 음료와 브런치를  여유롭게 즐기고 누리며 예술작품까지 감상하는 소규모 프라이빗한 공간",
        },
        {
          source: Beverage_2,
          alt: "",
          description:
            "복잡한 도심를 떠나 한적하고 아름다운 정원에서 신선한 음료와 브런치를  여유롭게 즐기고 누리며 예술작품까지 감상하는 소규모 프라이빗한 공간",
        },
        {
          source: Beverage_3,
          alt: "",
          description:
            "복잡한 도심를 떠나 한적하고 아름다운 정원에서 신선한 음료와 브런치를  여유롭게 즐기고 누리며 예술작품까지 감상하는 소규모 프라이빗한 공간",
        },
        {
          source: Beverage_4,
          alt: "",
          description:
            "복잡한 도심를 떠나 한적하고 아름다운 정원에서 신선한 음료와 브런치를  여유롭게 즐기고 누리며 예술작품까지 감상하는 소규모 프라이빗한 공간",
        },
      ],
      brunches: [
        {
          source: Coffee_1,
          alt: "",
          description:
            "복잡한 도심를 떠나 한적하고 아름다운 정원에서 신선한 음료와 브런치를  여유롭게 즐기고 누리며 예술작품까지 감상하는 소규모 프라이빗한 공간",
        },
      ],
      extras: [
        {
          source: Coffee_1,
          alt: "",
          description:
            "복잡한 도심를 떠나 한적하고 아름다운 정원에서 신선한 음료와 브런치를  여유롭게 즐기고 누리며 예술작품까지 감상하는 소규모 프라이빗한 공간",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-container {
  @include flex-column;
  padding-top: 7rem;
}

.title {
  @include font-title($blue-color);
  width: 100%;
  text-align: center;
}
</style>