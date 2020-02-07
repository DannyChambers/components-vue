<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>

  //Tokens --

  //Arrangements --

  //Patterns --

  //Modules --

  //Pages --

  export default {
    name: 'Layout',
    props: {
      variant: String
    },
    computed: {
      classes() {
        return `layout layout--${this.variant}`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "../../../00-tokens/colours/variant-1/_style";
  @import "../../../00-tokens/fonts/variant-1/_style";
  @import "../../../00-tokens/dimensions/variant-1/_style";
  @import "../../../00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
