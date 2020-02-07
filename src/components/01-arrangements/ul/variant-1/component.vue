
<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'Ul',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `ul ${this.classList}`;
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
