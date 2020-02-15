<template>
  <button :class="classes" @click="onClick">
    {{text}}
    <slot></slot>
  </button>
</template>

<script>

  export default {
    name: 'Button',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: String,
      text: {
        type: String
      }
    },
    computed: {
      classes() {
        return `button button--${this.variant} ${this.classList}`;  
      },
    },
    methods: {
      onClick() {
        console.log("Called onClick in button");
        this.$emit('click')
      }
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
