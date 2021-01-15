<template>
  <div
    class="sidebar"
    :data-color="sidebarItemColor"
    :data-image="sidebarBackgroundImage"
    :style="sidebarStyle"
  >
    <div class="logo" title="Dark Mode">
      <div class="simple-text logo-mini m-0 d-flex align-content-center justify-content-center" @click="toggleDarkMode()">
        <div class="logo-img d-flex align-items-center justify-content-center" :class="{'dark-mode':isDarkMode}">
          <i v-if="isDarkMode" class="md-icon md-icon-font">dark_mode</i>
          <i v-else class="md-icon md-icon-font black-color">brightness_5</i>
        </div>
      </div>
    </div>
    <!-- <div class="logo">
      <md-button class="md-button md-just-icon md-round">
        <small>EN</small>
      </md-button>
      <md-button class="md-button md-just-icon md-round"><small>VI</small></md-button>
    </div> -->
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <md-list class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
          ></sidebar-link>
        </slot>
      </md-list>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SidebarLink from "./SidebarLink.vue";

export default {
  components: {
    SidebarLink
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    sidebarBackgroundImage: {
      type: String,
      default: require("@/assets/img/sidebar-bg.jpg")
    },
    imgLogo: {
      type: String,
      default: require("@/assets/img/vue-logo.png")
    },
    sidebarItemColor: {
      type: String,
      default: "green",
      validator: value => {
        let acceptedValues = ["", "purple", "blue", "green", "orange", "red"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  methods:{
    toggleDarkMode(){
      this.$store.dispatch('toggleDarkMode');
    }
  },
  computed: {
    ...mapGetters(['isDarkMode']),
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.sidebarBackgroundImage})`
      };
    }
  }
};
</script>
<style lang="scss">
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
.sidebar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
