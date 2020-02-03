<template>
  <button :class="classes">
    {{text}}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      variant: String,
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `button button--${this.variant}`;  
      },
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
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
