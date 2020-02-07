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
  @import "../../../00-tokens/colours/variant-1/_style";
  @import "../../../00-tokens/fonts/variant-1/_style";
  @import "../../../00-tokens/dimensions/variant-1/_style";
  @import "../../../00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
