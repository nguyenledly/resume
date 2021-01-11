<template>
  <div class="my-auto w-100">
    <div>
      <h1 class="main-name text-uppercase">
        <span class="main-color">Hoang Tuan &nbsp;</span>
        <span class="sub2-color">Nguyen</span>
      </h1>
    </div>
    <div class="mb-3">
      <h2
        class="text-uppercase mt-0"
        style="font-family: 'Titillium Web', sans-serif; font-weight: 600;"
      >
        <vue-typer
          :text="[
                'Fullstack developer',
                'Laravel - Vuejs Master',
                'Dedication and Innovation',
                'A Kindness Teammate!'
              ]"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="50"
          :pre-erase-delay="2000"
          :erase-delay="50"
          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="smooth"
        ></vue-typer>
      </h2>
    </div>
    <div class="text-uppercase mb-3">
      <h4 class="sub-name">
        <span class="sub-color">
          15/3P Trung My Tan Xuan street, Trung Chanh ward, Hoc Mon
          district, Ho Chi Minh city
        </span>
      </h4>
      <h4 class="sub-name">
        <span class="sub-color">+84 - 961244398 · &nbsp;</span>
        <span class="main-color">nguyen.h.tuan1997@gmail.com</span>
      </h4>
    </div>
    <div>
      <div>
        <a href="https://google.com" target="_blank" class="mr-3">
          <button
            class="btn btn-success rounded-circle bg-main-color"
            style="width:60px; height:60px"
          >
            <i class="fab fa-github-alt fa-2x"></i>
          </button>
        </a>
        <a href="https://www.facebook.com/nguyen.h.tuan1997" target="_blank">
          <button
            class="btn btn-success rounded-circle bg-main-color"
            style="width:60px; height:60px"
          >
            <i class="fab fa-facebook-f fa-2x"></i>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  components: {
    VueTyper
  }
};
</script>