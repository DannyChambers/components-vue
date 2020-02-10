<template>
  <a :href="href" :target="target" :class="classes">
    <span class="link_text">
      {{text}}
    </span>
  </a>
</template>

<script>
  export default {
    name: 'Link',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: {
        type: String,
        defaut: "inline"
      },
      href: {
        type: String,
        required: true
      },
      target: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `link link--${this.variant} ${this.classList}`;  
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
