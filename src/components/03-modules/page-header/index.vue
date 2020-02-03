<template>
  <div :class="classes">
    <Container>
      <slot></slot>
    </Container>
  </div>
</template>

<script>

  //Tokens --

  //Arrangements --
  import Container from     '../../01-arrangements/container/index.vue'

  //Patterns --

  //Modules --

  //Pages --

  export default {
    components: {
      Container
    },
    name: 'PageHeader',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `page-header ${this.classList}`;  
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


  @import "./_index";

</style>
