<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      variant: String,
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `card card--${this.variant}`;  
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
