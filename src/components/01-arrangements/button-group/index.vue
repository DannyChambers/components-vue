<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ButtonGroup',
    props: {
      variant: String,
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `button-group button-group--${this.variant}`;  
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
