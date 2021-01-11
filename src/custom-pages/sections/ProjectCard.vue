<template>
  <md-card>
    <md-card-header :data-background-color="dataBackgroundColor" class="text-center">
      <slot name="header"></slot>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>

    <md-card-actions md-alignment="left">
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  props:{
    dataBackgroundColor:{
      type: String,
      default: "green",
    }
  }
};
</script>

<style>
</style>