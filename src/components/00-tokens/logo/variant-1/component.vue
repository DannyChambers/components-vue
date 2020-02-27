<template>
  <a :href="this.linkTarget" :class="classes"><span class="logo_text">Company name</span></a>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      classList:{
        type: String,
        default: "",
      },
      linkTarget: {
        type: String,
        default: "/",
      }
    },
    computed: {
      classes() {
        return `logo ${this.classList}`;
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
