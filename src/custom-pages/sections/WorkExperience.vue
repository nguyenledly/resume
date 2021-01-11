<template>
  <div class="my-auto">
    <h1 class="main-name text-uppercase mb-5">
      <span class="sub2-color">Work Experience 🔨 &nbsp;</span>
    </h1>
    <div id="timeline_1">
      <timeline>
        <timeline-title
          bg-color="#3b833b"
          class="main-color sub-name"
          style="font-size: 18pt"
        >August 2018 - Present</timeline-title>
        <timeline-item class="sub-color" bg-color="transparent">
          <span slot="others">
            🏢
            <md-tooltip md-direction="left">Company</md-tooltip>
          </span>
          <a href="https://vlab.tech" target="_blank" class="sub-color">
            <span style="font-size: 12pt">VLAB J.S.C</span>
          </a>
        </timeline-item>
        <timeline-item class="sub-color" bg-color="transparent">
          <span slot="others">
            👨‍💼
            <md-tooltip md-direction="left">Position</md-tooltip>
          </span>
          <span style="font-size: 12pt">Fullstack Developer</span>
        </timeline-item>
        <timeline-item class="sub-color" bg-color="transparent">
          <span slot="others">
            📖
            <md-tooltip md-direction="left">Tasks</md-tooltip>
          </span>
          <div style="font-size: 11pt">
            • Participating in the entrance test of company.
            <br />• Working and communicating directly with customer to catch up requests and demands.
            <br />• Taking responsibilities on raising ideas and developing new features.
            <br />• Maintaining and fixing bugs of backend and frontend for websites of customer and company.
            <br />• Working with team leader to achieve the best quality and user experience for each of product.
            <br />• Be on time of finishing in any kind of feature or demand for customer.
            <br />• Taking configuration on server to release product.
            <br />• Keeping study new technology such as Vue.js, Flutter.
          </div>
        </timeline-item>
        <timeline-item class="sub-color" bg-color="transparent">
          <span slot="others">
            🔧
            <md-tooltip md-direction="left">Tools</md-tooltip>
          </span>
          <p style="font-size: 11pt">
            • Backend Developer:
            <span class="sub-name">PHP | Laravel | MySQL | PostgreSQL | PostGis</span>.
            <br />• Frontend Developer:
            <span
              class="sub-name"
            >HTML5 | CSS | SCSS | VueJS | Javascript | JQuery | NPM</span>.
            <br />• Server:
            <span class="sub-name">CentOS | Ubuntu | Linux | Nginx | Apache</span>.
          </p>
        </timeline-item>
      </timeline>
    </div>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";
export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
};
</script>

<style></style>
