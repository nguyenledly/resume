
<template>
  <!-- :class="{ 'nav-item active router-link-active': isActive }" -->
  <li class="md-list-item">
    <a
      ref="resume_link"
      :class="classLink()"
      @click="hideSidebar"
      v-bind="$attrs"
      :href="href"
    >
      <div class="md-list-item-content md-ripple">
        <slot>
          <md-icon>{{ link.icon }}</md-icon>
          <p>{{ link.name }}</p>
        </slot>
      </div>
    </a>
  </li>
  <!-- <li class="md-list-item">
    <router-link
      ref="resume_link"
      :class="classLink()"
      @click="hideSidebar"
      v-bind="$attrs"
    >
      <div class="md-list-item-content md-ripple">
        <slot>
          <md-icon>{{ link.icon }}</md-icon>
          <p>{{ link.name }}</p>
        </slot>
      </div>
    </router-link>
  </li> -->
</template>
<script>
export default {
  inject: {
    autoClose: {
      default: true,
    },
  },
  props: {
    link: {
      type: [String, Object],
      default: () => {
        return {
          name: "",
          path: "",
          icon: "",
        };
      },
    },
    tag: {
      type: String,
      default: "router-link",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
  },
  mounted() {},
  methods: {
    hideSidebar() {
      if (
        this.autoClose &&
        this.$sidebar &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false);
      }
    },
    classLink() {
      if (this.$refs.resume_link) {
        if (this.isActive) {
          this.$refs.resume_link.classList.remove("active");
          return "active md-list-item-router md-list-item-container md-button-clean ";
        }
        this.$refs.resume_link.classList.remove("active");
        return "md-list-item-router md-list-item-container md-button-clean";
      } else {
        return "md-list-item-router md-list-item-container md-button-clean";
      }
    },
  },
  computed: {},
};
</script>
<style></style>
