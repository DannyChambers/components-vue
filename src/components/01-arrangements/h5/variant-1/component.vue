
<template>
  <h5 :class="classes">
    <slot></slot>
  </h5>
</template>

<script>
  export default {
    name: 'H5',
    props: {
      classList:{
        type: String,
        default: "",
      },
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `h5 ${this.classList}`;
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
