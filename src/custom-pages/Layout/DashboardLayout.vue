<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <!-- <notifications></notifications> -->

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link href="#">
        <img
          :src="sidebarAvatar"
          alt="avatar"
          class="md-elevation-4 sidebar-avatar"
        />
      </sidebar-link>
      <sidebar-link href="#about" :isActive="compareIsCurrentURL('about')">
        <md-icon>person</md-icon>
        <p>About</p>
      </sidebar-link>
      <sidebar-link
        href="#education"
        :isActive="compareIsCurrentURL('education')"
      >
        <md-icon>school</md-icon>
        <p>Education</p>
      </sidebar-link>
      <sidebar-link
        href="#work_experience"
        :isActive="compareIsCurrentURL('work_experience')"
      >
        <md-icon>work</md-icon>
        <p>Work Experience</p>
      </sidebar-link>
      <sidebar-link href="#skill" :isActive="compareIsCurrentURL('skill')">
        <md-icon>flag</md-icon>
        <p>Skills</p>
      </sidebar-link>
      <sidebar-link href="#hobby" :isActive="compareIsCurrentURL('hobby')">
        <md-icon>sports_soccer</md-icon>
        <p>Hobby</p>
      </sidebar-link>
      <sidebar-link href="#project" :isActive="compareIsCurrentURL('project')">
        <md-icon>emoji_events</md-icon>
        <p>Projects</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content></dashboard-content>
    </div>
  </div>
</template>

<script>
// import TopNavbar from "@/pages/Layout/TopNavbar.vue";
import TopNavbar from "../Layout/TopNavbar.vue";
import ContentFooter from "@/pages/Layout/ContentFooter.vue";
import DashboardContent from "@/pages/Layout/Content";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "@/pages/Layout/Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    // ContentFooter,
    // MobileMenu,
    // FixedPlugin
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-bg.jpg"),
      sidebarAvatar: require("@/assets/img/me.jpg"),
      sectionObserver: null,
      currentURL: null,
    };
  },
  mounted() {
    this.observeSections();
  },
  methods: {
    observeSections() {
      try {
        this.sectionObserver.disconnect();
      } catch (error) {}

      const options = {
        rootMargin: "-10%",
        threshold: 0.2,
      };
      this.sectionObserver = new IntersectionObserver(
        this.sectionObserverHandler,
        options
      );

      // Observe each section
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        this.sectionObserver.observe(section);
      });
    },
    sectionObserverHandler(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // console.log("sectionId", sectionId);
          // Push sectionId to router here
          window.history.pushState("", "", this.$route.path + "#" + sectionId);
          this.currentURL = window.location.href;
          // console.log(this.$refs.resume_link);
          // try {
          //   this.$router.push({ hash: `#${sectionId}` });
          // } catch (e) {}
        }
      }
    },
    compareIsCurrentURL(section_id) {
      if (this.currentURL) {
        let currentSectionID = this.currentURL.split("#")[1];
        if (currentSectionID == section_id) {
          console.log("section_id_2", section_id);
          return true;
        }
        return false;
      }
      return false;
    },
  },
  watch: {
    $route(to, from) {
      this.currentURL = window.location.href;
      console.log("watch", this.currentURL);
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar-avatar {
  border-radius: 50%;
}
p {
  cursor: pointer;
}
</style>
