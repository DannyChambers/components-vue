<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      classList:{
        type: String,
        default: "",
      },
      icon_placement: String,
      icon_graphic: String,
    },
    computed: {
      classes() {
        return `icon--${this.icon_placement} icon--${this.icon_graphic} ${this.classList}`;  
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
