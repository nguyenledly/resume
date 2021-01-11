<template>
  <div class="container-resume">
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
  }
};
</script>
