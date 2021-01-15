<template>
  <div class="container-resume" id="container_resume">
    <section id="about">
      <about></about>
    </section>
    <section id="education">
      <education></education>
    </section>
    <section id="work_experience">
      <work-experience></work-experience>
    </section>
    <section id="skill">
      <skill></skill>
    </section>
    <section id="hobby">
      <hobby></hobby>
    </section>
    <section id="project">
      <project></project>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import About from "./sections/About.vue";
import Education from "./sections/Education.vue";
import WorkExperience from "./sections/WorkExperience.vue";
import Skill from "./sections/Skill.vue";
import Hobby from "./sections/Hobby.vue";
import Project from "./sections/Project.vue";
export default {
  components: {
    About,
    Education,
    WorkExperience,
    Skill,
    Hobby,
    Project,
  },
  computed: {
    ...mapGetters(["isDarkMode"]),
  },
  watch: {
    isDarkMode(newVal, oldVal) {
      let body = document.getElementById("body");
      let containerResume = document.getElementById("container_resume");
      if (newVal) {
        containerResume.classList.add("dark-mode");
        body.classList.add("dark-mode");
      } else {
        containerResume.classList.remove("dark-mode");
        body.classList.remove("dark-mode");
      }
    },
  },
};
</script>
