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
      classList:{
        type: String,
        default: "",
      },
      variant: String
    },
    computed: {
      classes() {
        return `layout layout--${this.variant} ${this.classList}`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
