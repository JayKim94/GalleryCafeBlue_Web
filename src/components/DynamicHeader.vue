<template>
  <header id="header-container">
    <div class="title-container" :class="{ fixed: isFixed, mobile: mobile }">
      <p class="blue-text">BLUE</p>
      <div class="menu-button">
        <button @click="onSideNavToggle">
          <img src="../assets/menu.png" />
        </button>
      </div>
      <div
        class="side-nav"
        :class="{ opened: navOpen }"
        @click="onSideNavToggle"
      >
        <div class="nav-item" @click="onMenuClick(0)">
          <router-link class="link" to="/">블루 스토리</router-link>
        </div>
        <div class="nav-item" @click="onMenuClick(1)">
          <router-link class="link" to="/menu">메뉴</router-link>
        </div>
        <div class="nav-item" @click="onMenuClick(0)">
          <router-link class="link disabled" to="/">커피 레시피</router-link>
        </div>
        <div class="nav-item" @click="onMenuClick(0)">
          <router-link class="link disabled" to="/">티 레시피</router-link>
        </div>
        <div class="nav-item" @click="onMenuClick(0)">
          <router-link class="link disabled" to="/">예약하기</router-link>
        </div>
        <div class="nav-item" @click="onMenuClick(0)">
          <router-link class="link disabled" to="/">공지이벤트</router-link>
        </div>
      </div>
    </div>
    <div class="menu-container" :class="{ fixed: isFixed, mobile: mobile }">
      <div class="menu-list">
        <div id="menu0" class="menu-item" :class="{ active: activeIndex == 0 }">
          <router-link @click.native="onMenuClick(0)" class="link" to="/"
            >블루 스토리</router-link
          >
        </div>
        <div id="menu1" class="menu-item" :class="{ active: activeIndex == 1 }">
          <router-link @click.native="onMenuClick(1)" to="/menu" class="link"
            >메뉴</router-link
          >
        </div>
        <div id="menu2" class="menu-item" :class="{ active: activeIndex == 2 }">
          <router-link
            @click.native="onMenuClick(0)"
            class="link disabled"
            to="/"
            >커피 레시피</router-link
          >
        </div>
        <div id="menu3" class="menu-item" :class="{ active: activeIndex == 3 }">
          <router-link
            @click.native="onMenuClick(0)"
            class="link disabled"
            to="/"
            >티 레시피</router-link
          >
        </div>
        <div id="menu4" class="menu-item" :class="{ active: activeIndex == 4 }">
          <router-link
            @click.native="onMenuClick(0)"
            class="link disabled"
            to="/"
            >예약하기</router-link
          >
        </div>
        <div id="menu5" class="menu-item" :class="{ active: activeIndex == 5 }">
          <router-link
            @click.native="onMenuClick(0)"
            class="link disabled"
            to="/"
            >공지이벤트</router-link
          >
        </div>
        <div id="selected"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["isMobile"],
  data() {
    return {
      activeIndex: 0,
      isFixed: false,
      mobile: this.isMobile,
      setUp: false,
      navOpen: false,
    };
  },
  methods: {
    onMenuClick(i) {
      this.activeIndex = i;
      document.getElementById("selected").style.left = i * 186 + "px";
    },
    updateScroll() {
      if (window.scrollY > 80) {
        this.isFixed = true;
      } else if (this.isFixed) {
        this.isFixed = false;
      }
    },
    onSideNavToggle() {
      this.navOpen = !this.navOpen;
    },
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.updateScroll);

    if (this.setUp) return;

    const path = window.location.pathname;
    switch (path) {
      case "/":
        this.onMenuClick(0);
        break;
      case "/menu":
        this.onMenuClick(1);
        break;
      default:
        break;
    }

    this.setUp = true;
  },
};
</script>

<style lang="scss">
/* SCOPED GLOBAL */
header {
  width: 100vw;
  position: relative;
  z-index: 9000;
}

/* TITLE */
.title-container {
  @include flex-row-center;
  width: 100%;
  height: 80px;
  background-color: $blue-color;
  overflow: visible;

  &.fixed {
    height: 0;
    opacity: 0;

    .side-nav {
      position: fixed !important;
    }
  }
}

p.blue-text {
  @include font-bold;
}

.menu-button {
  display: none;
  button {
    background-color: transparent;
    border: none;
  }
  img {
    width: 25px;
  }
}

.disabled {
  color: $black-color !important;
  opacity: 0.65 !important;
}

.side-nav {
  .link {
    @include font-header($blue-color);
    display: block;
    text-align: left;
    font-size: 0.85rem;
    font-weight: 500;
  }

  position: absolute;
  border-radius: 3px;
  z-index: 9000;
  width: 0;
  top: 0;
  right: 0;

  .nav-item {
    border-bottom: 1px solid #21212115;
    background-color: $white-color;
    padding: 1.25rem 0 1.25rem 1.75rem;
    width: 250px;
  }

  &.opened {
    @include transition;
    @include flex-column(flex-start, flex-end);
    height: 100vh;
    width: 100vw;
  }
}

/* MENU */
.menu-container {
  @include flex-row-center;
  @include transition;
  @include font-menu($blue-color);

  width: 100%;
  min-height: 88px;
  background-color: $white-color;

  &.fixed {
    @include elevate-1;
    position: fixed;
    top: 0;
    min-height: 70px;

    .menu-item {
      margin-bottom: 0;
    }

    #selected {
      display: none;
    }
  }
  &.mobile.fixed {
    display: none;
  }

  .menu-list {
    @include flex-row;
    position: relative;
    gap: 6rem;
  }

  .menu-item {
    margin-bottom: 13px;
    cursor: pointer;
    width: 90px;

    /* Fade-in on hover */
    opacity: 0.75;

    &.active {
      opacity: 1;
    }
  }

  /* Blue bar under the current tab */
  #selected {
    @include transition;
    background-color: $blue-color;
    display: block;
    position: absolute;
    left: 0;
    top: 35px;
    width: 90px;
    height: 3px;
    opacity: 0.75;
    border-radius: 5px;
  }
}

@media only screen and (max-width: 768px) {
  .title-container {
    @include flex-row(space-between, center);
    @include transition;
    height: 70px;
    padding: 0 2rem;
    position: fixed;

    top: 0;
    &.fixed {
      @include elevate-1;
      height: 65px;
      opacity: 1;
    }
  }

  .menu-button {
    display: block;
    img {
      @include translate(0, 25%);
    }
  }

  .menu-container {
    display: none;
  }
}
</style>