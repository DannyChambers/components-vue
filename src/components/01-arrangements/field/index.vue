<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Container',
    props: {
      variant: String
    },
    computed: {
      classes() {
        return `container`;  
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
