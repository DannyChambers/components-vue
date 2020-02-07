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
  import Container from     '../../01-arrangements/container/variant-1/component.vue'

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
  @import "../../../00-tokens/colours/variant-1/_style";
  @import "../../../00-tokens/fonts/variant-1/_style";
  @import "../../../00-tokens/dimensions/variant-1/_style";
  @import "../../../00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
