
<template>
  <h2 :class="classes">
    {{text}}
  </h2>
</template>

<script>
  export default {
    name: 'H2',
    props: {
      classList:{
        type: String,
        default: "",
      },
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `h2 ${this.classList}`;
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "../../00-tokens/colours/_index";
  @import "../../00-tokens/fonts/_index";
  @import "../../00-tokens/dimensions/_index";


  @import "./_h2";

</style>

