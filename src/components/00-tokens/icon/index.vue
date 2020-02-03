<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      icon_placement: String,
      icon_graphic: String,
    },
    computed: {
      classes() {
        return `icon--${this.icon_placement} icon--${this.icon_graphic}`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "../../00-tokens/colours/_index";
  @import "../../00-tokens/fonts/_index";
  @import "../../00-tokens/dimensions/_index";


  @import "./_index";

</style>
