<template>
  <div class="my-auto">
    <h1 class="main-name text-uppercase mb-5">
      <span class="sub2-color">Projects 🏆 &nbsp;</span>
    </h1>
    <div v-for="(project, index) in projects" :key="index">
      <project-card :dataBackgroundColor="project.headerColor">
        <template slot="header">
          <h2 class="sub-name text-uppercase" style="font-size: 30pt">{{project.name}}</h2>
        </template>
        <template slot="content">
          <md-table v-model="project.detail" :table-header-color="'red'">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="CRITERIA" style="width:20%; font-weight:700">{{ item.key }}</md-table-cell>
              <md-table-cell md-label="CONTENT" v-html="item.value"></md-table-cell>
            </md-table-row>
          </md-table>
          <div class="md-layout-item mx-auto md-small-size-100">
            <md-card>
              <carousel
                :per-page="1"
                loop
                :speed="700"
                autoplay
                :autoplay-timeout="5000"
                :mouse-drag="false"
                navigationEnabled
                navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
              >
                <slide v-for="(carousel, imgIndex) in project.carousel" :key="imgIndex">
                  <!-- <div class="carousel-caption">
                  <h4 class="text-info" style="font-weight:300">
                    <md-icon class="main-color">label_important</md-icon>Create New Object
                  </h4>
                  </div>-->
                  <img :src="carousel.src" alt="carousel" @click="openGallery(imgIndex, index)" />
                </slide>
              </carousel>
            </md-card>
          </div>
        </template>
      </project-card>
      <LightBox
        ref="lightbox"
        :media="project.carousel"
        :show-caption="true"
        :show-light-box="false"
        :site-loading="siteLoading"
      ></LightBox>
      <hr class="w-50 my-5" v-if="index < (projects.length - 1)" />
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard";
import { Carousel, Slide } from "vue-carousel";
import LightBox from "vue-image-lightbox";
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");
import projects from "../javascript/projects";
export default {
  components: {
    ProjectCard,
    Carousel,
    Slide,
    LightBox
  },
  data() {
    return {
      siteLoading: require("@/assets/img/loading.gif"),
      projects: projects
    };
  },
  methods: {
    openGallery(index, lightBoxIndex) {
      this.$refs.lightbox[lightBoxIndex].showImage(index);
    }
  }
};
</script>

<style>
</style>